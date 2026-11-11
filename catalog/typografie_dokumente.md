# Headlines

Für Headlines nutzen wir die **Jost Bold**.

Entweder blaue Schrift auf weißem Grund:

```type
{
  "headings": [36],
  "font": "Jost",
  "background":"#FFFFFF",
  "color": "#0672AA",
  "weight": 500,
}
```

Oder weiße Schrift auf blauem Grund:

```type
{
  "headings": [36],
  "font": "Jost",
  "background": "#0672AA",
  "color": "#FFFFFF",
  "weight": 500,
}
```

# Fließtext

Für Fließtext nutzen wir die **Jost Regular**.
Farbe ist abhängig von der Nutzungsart. Entweder unser Firmenblau, ein Grauton oder
Weiß auf einem anderen Hintergrund.

Das ist ein Beispiel mit einem Grauton auf weißem Grund:

```type
{
  "color": "#333333",
  "background":"FFFFFF",
  "font": "Jost",
  "paragraphs": [
    { "label": "Fließtext", "value": "15/22", "font-weight": 400, }
  ]
}
```