import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

import { tools, visibleProjects } from "./src/data/site";

export default defineConfig({
  css: { transformer: "lightningcss" },
  resolve: {
    alias: { "@": `${process.cwd()}/src` },
    dedupe: ["react", "react-dom", "@tanstack/react-query", "@tanstack/query-core"],
  },
  server: { host: "::", port: 8080 },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
      // ponytail: schede progetto e strumenti vengono da src/data/site.ts, così
      // aggiungerne uno non richiede di aggiornare anche questo elenco.
      // Ogni pagina esce due volte: italiano senza prefisso, inglese sotto /en.
      pages: [
        "/",
        "/projects",
        "/updates",
        "/tools",
        ...visibleProjects.map((project) => `/projects/${project.slug}`),
        ...tools.map((tool) => `/tools/${tool.slug}`),
      ].flatMap((path) => [{ path }, { path: path === "/" ? "/en" : `/en${path}` }]),
      prerender: { enabled: true, autoStaticPathsDiscovery: false },
    }),
    viteReact(),
  ],
});
