import { useEffect } from "react";
import { useLocation } from "wouter";
import { getHeadData } from "@/lib/seo";

function upsert(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const meta = (key: "name" | "property", k: string, v: string) =>
  upsert(
    `meta[${key}="${k}"]`,
    () => {
      const m = document.createElement("meta");
      m.setAttribute(key, k);
      return m;
    },
    "content",
    v,
  );

/**
 * Keeps <head> in sync on client-side navigation. The prerender step writes the same tags
 * into each route's HTML for crawlers that don't run JavaScript.
 */
export default function HeadManager() {
  const [location] = useLocation();

  useEffect(() => {
    const h = getHeadData(location);
    document.title = h.title;
    meta("name", "description", h.description);
    meta("property", "og:title", h.title);
    meta("property", "og:description", h.description);
    meta("property", "og:url", h.canonical);
    meta("property", "og:type", h.ogType);
    meta("property", "og:image", h.ogImage);
    meta("name", "twitter:card", "summary_large_image");
    meta("name", "twitter:title", h.title);
    meta("name", "twitter:description", h.description);
    meta("name", "twitter:image", h.ogImage);

    const robots = document.head.querySelector('meta[name="robots"]');
    if (h.noindex) meta("name", "robots", "noindex");
    else robots?.remove();

    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (h.noindex) canonical?.remove();
    else upsert(
      'link[rel="canonical"]',
      () => {
        const l = document.createElement("link");
        l.rel = "canonical";
        return l;
      },
      "href",
      h.canonical,
    );

    let ld = document.getElementById("ld-json");
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "ld-json";
      ld.setAttribute("type", "application/ld+json");
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(h.jsonLd);
  }, [location]);

  return null;
}
