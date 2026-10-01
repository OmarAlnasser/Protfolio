# Omar Hamad Al-Nasser — Portfolio

Personal portfolio (Arabic / English) for data analytics and business intelligence work.
Static site: no build step, works on GitHub Pages.

## Files

| File | Purpose |
|---|---|
| `index.html` | All content. Arabic text is written directly in the HTML. |
| `main.js` | English translations (`EN` object) and interactions: language switch, mobile menu, project filters and dialog, certificate marquee, copy email. |
| `styles.css` | All styles; colour tokens are at the top under `:root`. |
| `assets/` | Images (HR project screenshots, one per language). |
| `Omar-Hamad-Al-Nasser-CV.pdf` | Downloadable CV. |

## Editing content

- **Translatable text:** give the element a `data-i18n="key"` attribute, keep the Arabic in the HTML, and add the same `key` with the English text to the `EN` object in `main.js`.
- **New project:** copy an `<article class="project">` block in `#projects`, set `data-category` to `bi`, `ml` or `simulation`, and add its English keys.
- **New certificate:** add an `<li class="cert">` to one of the two `.cert-lane` lists.
- **Language:** the visitor's choice is remembered; `?lang=en` opens the English version directly.

## Preview locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
