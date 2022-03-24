import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import theme from './theme'

const App = () => {
  useEffect(() => {
    document.title = "connectiv! Styleguide"
  }, [])
};

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
    pages: [
    {
      path: '/typografie-im-web',
      title: 'Typografie im Web',
      content: pageLoader(() => import("./typografie_im_web.md"))
      },
      {
        path: '/typografie-fuer-dokumente',
          title: 'Typografie für Dokumente',
          content: pageLoader(() => import("./typografie_fuer_dokumente.md"))
          },
    ]
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
    ]
  },
];