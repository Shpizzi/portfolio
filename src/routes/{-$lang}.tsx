import { Outlet, createFileRoute, notFound } from "@tanstack/react-router";

// ponytail: `{-$lang}` è opzionale: senza è italiano, con `en` inglese. Qualsiasi altro
// valore (es. /xx/projects) non è una lingua ma una pagina che non esiste.
export const Route = createFileRoute("/{-$lang}")({
  beforeLoad: ({ params }) => {
    if (params.lang && params.lang !== "en") throw notFound();
  },
  component: Outlet,
});
