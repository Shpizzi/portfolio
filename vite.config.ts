// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

import { visibleProjects } from "./src/data/site";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // ponytail: le schede progetto vengono da src/data/site.ts, così aggiungerne una
    // (o togliere il suo `hidden`) non richiede di aggiornare anche questo elenco.
    pages: [
      { path: "/" },
      { path: "/projects" },
      { path: "/updates" },
      ...visibleProjects.map((project) => ({ path: `/projects/${project.slug}` })),
    ],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
