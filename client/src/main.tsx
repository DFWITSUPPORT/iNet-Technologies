import { createRoot, hydrateRoot } from "react-dom/client";
import { Router } from "wouter";
import { AppShell } from "./App";
import "./index.css";

// Static hosts may serve /route.html, /route/index.html or /route/ for the same page. Normalize to
// /route before React renders so the router matches the URL the prerendered HTML was built for.
const p = location.pathname;
const clean = p.replace(/\/index\.html$/, "/").replace(/\.html$/, "").replace(/(.)\/+$/, "$1");
if (clean !== p) history.replaceState(null, "", clean + location.search + location.hash);

const root = document.getElementById("root")!;
const app = (
  <Router>
    <AppShell />
  </Router>
);

// Prerendered routes ship real markup; hydrate it instead of re-rendering from scratch.
if (root.firstElementChild) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
