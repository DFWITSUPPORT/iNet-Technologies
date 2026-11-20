import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Clean URLs: every route is prerendered to <route>.html (script/prerender.ts). Serve it for
  // /route and /route/ directly, without serve-static's 301 to the /route/ directory.
  app.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();
    const clean = req.path.replace(/\/+$/, "");
    if (!clean || path.extname(clean)) return next();
    const rel = `${clean.slice(1)}.html`;
    if (rel.includes("..") || !fs.existsSync(path.join(distPath, rel))) return next();
    // `root` keeps send's dotfile check off the absolute path (e.g. a parent dir like ~/.openclaw).
    res.sendFile(rel, { root: distPath });
  });

  app.use(express.static(distPath, { redirect: false }));

  // Anything else is a genuine 404.
  app.use("/{*path}", (_req, res) => {
    res.status(404).sendFile("404.html", { root: distPath });
  });
}
