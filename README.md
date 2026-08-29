# #FlaggeWest — Elsfleth

Fun-/Community-Website für das Wohnheim von Freunden. Keine Wohnungsvermietung, kein Immobilienportal.

## Dateien
- `index.html` – komplette Website
- `styles.css` – Design, Responsive Layout, Animationen
- `script.js` – Mobile Navigation + Event-System

## Events
In `script.js` gibt es oben das Array `events`.

Wenn es leer ist, erscheint automatisch:
**„Noch keine nice EVENTS. Aber vielleicht bald!“**

Ein Event kann so angelegt werden:

```js
{
  date: "12.10.2026 · 19:00",
  title: "Kneipen-Rallye",
  text: "Wir ziehen los und schauen, wer den Heimweg noch findet.",
  location: "Start: FlaggeWest",
  bring: "Gute Laune · Ausweis · ggf. Regenschirm"
}
```

Mehrere Objekte können einfach durch Kommas getrennt ergänzt werden.

## Deployment
Die drei Dateien direkt ins Repository legen. Es wird kein Backend benötigt.
