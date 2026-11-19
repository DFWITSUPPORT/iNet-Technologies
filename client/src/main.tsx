import { createRoot, hydrateRoot } from "react-dom/client";
import { Router } from "wouter";
import { AppShell } from "./App";
import "./index.css";

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
