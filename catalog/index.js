import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import theme from './theme'

export default {
const pages = [
  {
    title: "connectiv! Styleguide",
    path: "/",   
    content: pageLoader(() => import("./home.md"))
  },

  {
    title: "Logonutzung",
    path: "/logo",
    pages: [ 
      {
      path: '/verwendung',
      title: 'Verwendung',
      content: pageLoader(() => import("./logo_verwendung.md"))
      },
      {
        path: '/varianten',
        title: 'Varianten',
        content: pageLoader(() => import("./varianten.md"))
        },
        {
          path: '/download',
          title: 'Downloads',
          content: pageLoader(() => import("./download.md"))
          },
    ]
  },

  {
    title: 'Farbpalette',
    path: '/farben',
    content: pageLoader(() => import("./farben.md"))
  },

  {
    title: 'Typografie',
    path: '/typografie',
    content: pageLoader(() => import("./typografie.md"))
  },

  {
    title: 'Bildsprache',
    path: '/bildsprache',
    content: pageLoader(() => import("./bildsprache.md"))
  },

  {
    title: 'Wording bei connectiv!',
    pages: [
      {
      path: '/schreibweisen',
        title: 'Schreibweisen',
        content: pageLoader(() => import("./schreibweisen.md"))
        }, 
          {
            path: '/abkuerzungen',
            title: 'Abkürzungen',
            content: pageLoader(() => import("./abkuerzungen.md"))
            },
            {
              path: '/texte',
              title: 'Texte',
              content: pageLoader(() => import("./texte.md"))
              },
              {
                path: '/zielgruppe',
                title: 'Zielgruppe',
                content: pageLoader(() => import("./zielgruppe.md"))
                },
                {
                  path: '/schreibstil',
                  title: 'Schreibstil',
                  content: pageLoader(() => import("./schreibstil.md"))
                  },
    ]
  },
],
}

ReactDOM.render(
  <Catalog 
    title="Catalog"
    pages={pages} 
    logoSrc={"/logo/logo_blau(RGB).svg"}
    theme={theme}
    />,
  document.getElementById("catalog"),
);