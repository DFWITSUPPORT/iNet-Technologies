// Build-time only: rendered by script/prerender.ts to produce one HTML file per route.
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { AppShell } from "./App";
import { ROUTES, NOT_FOUND_META, getHeadData, renderHeadTags, renderSitemap } from "./lib/seo";

export function render(url: string): { html: string; head: string } {
  const html = renderToString(
    <Router ssrPath={url}>
      <AppShell />
    </Router>,
  );
  return { html, head: renderHeadTags(getHeadData(url)) };
}

export const routePaths = ROUTES.map((r) => r.path);
export const notFoundPath = NOT_FOUND_META.path;
export { renderSitemap };
