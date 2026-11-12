# Headlines

Für Headlines nutzen wir die **Jost Bold** also Schriftstärke 700.

Entweder blaue Schrift auf weißem Grund:

```type
{
  "headings": [46,40,26],
  "font": "Jost",
  "color": "#0672AA",
  "weight": 700,
  "background": "#FFFFFF",
}
```

Oder weiße Schrift auf blauem Grund:

```type
{
  "headings": [46,40,26],
  "font": "Jost",
  "color": "#FFFFFF",
  "weight": 700,
  "background": "#0672AA",
}
```


# Paragraph / Fließtext

Für Fließtext nutzen wir die **Jost Regular** also Schriftstärke 400.
Farbe ist abhängig von der Nutzungsart. Entweder unser Firmenblau, 
ein Grauton oder Weiß auf einem anderen Hintergrund.

```type
{
  "paragraphs": ["20/28"],
  "font": "Jost",
  "color": "#333333",
}
```

In Ausnahmefällen kann auch die **Jost Medium** also Schriftstärke 500 genutzt werden.

```type
{
  "paragraphs": ["20/28"],
  "font": "Jost",
  "weight": 500,
  "color": "#333333",
}
```

# Beispiel Textblock

```type
{
  "headings": [46],
  "font": "Jost",
  "color": "#0672AA",
  "weight": 700,
}
```

```type
{
  "color": "#333333",
  "font": "Jost",
  "paragraphs": [
    { "label": "Paragraph", "value": "16/24", "font-weight": 400, }
  ]
}
```

# Monospace
Für Code-Schnipsel kann die **Roboto Mono** mit Schriftstärke 400 genutzt werden.
Anwendungsfälle wären z. B. kundenorientierte Dokumentationen, wo dann Code-Schnipsel eingebaut werden.

```type
{
  "color": "#333333",
  "font": "Roboto Mono",
  "paragraphs": [
    { "label": "Code-Schnipsel", "value": "16/24", "font-weight": 400, }
  ]
}
```
