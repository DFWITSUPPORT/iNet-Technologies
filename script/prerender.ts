/**
 * Static prerender for the Replit static deployment.
 *
 * Replit's static host has no SPA fallback (it serves `_redirects` as a plain file), so a direct
 * load of /terms returned 404. We render every route at build time and write it to both
 * `<route>/index.html` and `<route>.html`, so the host finds a real file whichever convention it
 * uses. Each file also carries that route's title, meta description, canonical, OG tags and JSON-LD.
 */
import { build as viteBuild } from "vite";
import { mkdir, readFile, rm, writeFile } from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";

const PUBLIC_DIR = path.resolve("dist/public");
const SSR_DIR = path.resolve("dist/ssr");

interface ServerEntry {
  render(url: string): { html: string; head: string };
  routePaths: string[];
  notFoundPath: string;
  renderSitemap(lastmod: string): string;
}

export async function prerender() {
  await viteBuild({
    logLevel: "warn",
    build: {
      ssr: "src/entry-server.tsx",
      outDir: SSR_DIR,
      emptyOutDir: true,
      // Keep asset URLs identical to the client build without re-emitting files.
      ssrEmitAssets: false,
    },
  });

  const entry: ServerEntry = await import(
    pathToFileURL(path.join(SSR_DIR, "entry-server.js")).href
  );
  const template = await readFile(path.join(PUBLIC_DIR, "index.html"), "utf-8");
  if (!template.includes("<!--app-html-->") || !template.includes("<!--head:start-->")) {
    throw new Error("prerender: index.html is missing the <!--app-html--> or <!--head:start--> markers");
  }

  const page = (url: string) => {
    const { html, head } = entry.render(url);
    return template
      .replace(/<!--head:start-->[\s\S]*?<!--head:end-->/, head)
      .replace("<!--app-html-->", html);
  };

  const written: string[] = [];
  const out = async (rel: string, content: string) => {
    const file = path.join(PUBLIC_DIR, rel);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, content);
    written.push(rel);
  };

  for (const route of entry.routePaths) {
    const html = page(route);
    if (route === "/") {
      await out("index.html", html);
    } else {
      const rel = route.replace(/^\//, "");
      await out(`${rel}/index.html`, html);
      await out(`${rel}.html`, html);
    }
  }
  await out("404.html", page(entry.notFoundPath));

  const today = new Date().toISOString().slice(0, 10);
  await out("sitemap.xml", entry.renderSitemap(today));

  await rm(SSR_DIR, { recursive: true, force: true });
  console.log(`prerendered ${written.length} files:\n  ${written.join("\n  ")}`);
}
