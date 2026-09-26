# martijnrozema.com

Source of [martijnrozema.com](https://martijnrozema.com), the one-page site where I offer monday.com app development to partner agencies.

Built with Angular and prerendered to static HTML, in English (`/`) and Dutch (`/nl/`).

## Stack

- Angular 22: standalone components, zoneless change detection
- Angular i18n (`@angular/localize`) with XLIFF translation files, one build per language
- Static prerendering through `@angular/ssr` with `outputMode: "static"`, so every page ships as plain HTML and no server is needed
- Plain CSS with design tokens as custom properties, no UI library
- Fonts self-hosted through Fontsource, so the site makes no third-party requests
- Vitest for unit tests, angular-eslint and Prettier for code style

## Getting started

Requires a Node.js version supported by Angular 22 (22.22.3+, 24.15+ or 26+).

```bash
npm install
npm start              # English dev server on http://localhost:4200
npm run start:nl       # Dutch dev server on http://localhost:4200
npm test               # unit tests
npm run lint
npm run build          # both languages, static, in dist/martijnrozema-com/browser
```

The dev server runs one language at a time; on it, the language switch falls back to the page that is being served. To try the switch between both languages, serve the production build:

```bash
npm run build
npx serve dist/martijnrozema-com/browser
```

## Project structure

```
src/
├── styles.css                  design tokens, base styles and utilities
├── locale/                     extracted source messages and the Dutch translation
└── app/features/home/
    ├── pages/home/             the routed page, also sets title and meta tags
    ├── components/             one component per section, each with its own copy
    └── content/contact.ts      email and links, the same in every language
```

## How it works

**Copy lives where it is rendered.** Fixed text sits in the component templates, marked with the `i18n` attribute. Repeated items, such as the services or the days of the week strip, are rendered with `@for` from data in the component class, and each of those strings is a `$localize` message. Every message has a stable custom ID (`i18n="@@hero.title"`, `` $localize`:@@services.apps.title:Custom monday apps` ``), so rewording the English does not orphan the translation. Sentences with a link inside, like the one in the footer, are a single message with the link as a placeholder, so a translation can place it wherever the language needs it.

**One build per language.** `angular.json` defines English as the source locale at the root and Dutch under `/nl/`. At build time Angular inlines the translations from `src/locale/messages.nl.xlf`, so each language gets its own bundle with no translation lookups at runtime. `i18nMissingTranslation` is set to `error`: a string without a Dutch translation fails the build instead of showing up in English on the Dutch page.

**Prerendered per language.** Each locale is prerendered with its own `lang` attribute and base href, and the page sets a localized title and meta description, so search engines and link previews get the correct language without running any JavaScript. Both pages list each other as `hreflang` alternates. The language switch is a plain link between the two builds.

## Changing copy

1. Edit the English text in the component template or class, or add a new `i18n` attribute or `$localize` message with its own ID.
2. Run `npm run extract-i18n` to update `src/locale/messages.xlf`.
3. Add or update the matching `<target>` in `src/locale/messages.nl.xlf`.
4. Run `npm run build`; it fails if a translation is missing.

## Deployment

`npm run build` writes a fully static site to `dist/martijnrozema-com/browser`: English at the root and Dutch in `nl/`. That folder can be served by any static host.

## License

The source is public to read, not to reuse. All rights reserved; see [LICENSE](LICENSE).
