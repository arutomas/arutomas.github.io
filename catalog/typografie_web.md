# Headlines

Für Headlines nutzen wir die **Futura Bold BT** also Futura Bold BT (Schriftstärke 700).

Entweder blaue Schrift auf weißem Grund:

```type
{
  "headings": [46,40,26],
  "font": "Futura Md Bt",
  "color": "#0672AA",
  "weight": 700,
  "background": "#FFFFFF",
}
```

Oder weiße Schrift auf blauem Grund:

```type
{
  "headings": [46,40,26],
  "font": "Futura Md Bt",
  "color": "#FFFFFF",
  "weight": 700,
  "background": "#0672AA",
}
```

# Subheadlines

Für Subheadlines nutzen wir die **Futura Lt BT** also  Light BT (Schriftstärke 400).

Entweder blaue Schrift auf weißem Grund:

```type
{
  "headings": [24],
  "font": "Futura Lt Bt",
  "color": "#0672AA",
  "background":"FFFFFF",
}
```

Oder weiße Schrift auf blauem Grund:

```type
{
  "headings": [24],
  "font": "Futura Lt Bt",
  "color": "#FFFFFF",
  "background": "#0672AA",
}
```


# Paragraph / Fließtext

Für Fließtext nutzen wir die **Futura Lt BT** also Futura Light BT (Schriftstärke 400).
Farbe ist abhängig von der Nutzungsart. Entweder unser Firmenblau, ein Grauton oder
Weiß auf einem anderen Hintergrund.

Das ist ein Beispiel mit einem Grauton auf weißem Grund:

```type
{
  "paragraphs": ["20/28"],
  "font": "Futura Lt Bt",
  "color": "#333333",
}
```

# Beispiel Textblock

```type
{
  "color": "#0672AA",
  "font": "Futura Lt BT",
  "headings": [
    { "label": "H2", "value": 24, },
  ],
}
```

```type
{
  "headings": [46],
  "font": "Futura Md Bt",
  "color": "#0672AA",
  "weight": 700,
}
```

```type
{
  "color": "#333333",
  "font": "Futura Lt BT",
  "paragraphs": [
    { "label": "Paragraph", "value": "20/28", "font-weight": 400, }
  ]
}
```

# Newsletter

Für unseren Newsletter nutzen wir die Arial als Fallback-Font in den Schriftschnitten: "Bold" und "Regular".
Ansonsten wird die Futura Md BT Medium, Futura Md BT Bold und Futura Bk BT genutzt.
 
**Überschrift**

```type
{
  "headings": [Bold],
  "font": "Roboto",
  "weight": 700,
  "color": "#333333",
  "background":"FFFFFF",
}
```

**Text**

```type
{
  "headings": [Regular],
  "font": "Roboto",
  "weight": 400,
  "color": "#333333",
  "background": "#FFFFFF",
}
```