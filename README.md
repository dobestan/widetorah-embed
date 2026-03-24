# widetorah-embed

[![npm](https://img.shields.io/npm/v/widetorah-embed)](https://www.npmjs.com/package/widetorah-embed)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/widetorah-embed)
[![Size](https://img.shields.io/badge/size-~5KB-green)](https://bundlephobia.com/package/widetorah-embed)

Embed WideTorah scripture widgets on any website. **Zero dependencies**, Shadow DOM style isolation, 3 built-in themes (light, dark, sepia), and automatic daily verse updates. Each widget includes a "Powered by WideTorah" backlink.

WideTorah covers the **Hebrew Bible (Tanakh)** — **24 books** (Torah: 5, Nevi'im: 21, Ketuvim: 13 by Jewish canon), **23,145 verses**, Hebrew Masoretic text, English translations (JPS, KJV), **54 parashot** (weekly Torah portions), **2,121 Talmud daf** (pages), and **3,901 Rashi commentaries** — all accessible via free public API.

> **Try the interactive widget builder at [widget.widetorah.com](https://widget.widetorah.com)**

<p align="center">
  <img src="demo.gif" alt="widetorah-embed demo — Torah verse widget with Hebrew Masoretic text and English translation, light/dark/sepia themes" width="800">
</p>

## Table of Contents

- [Quick Start](#quick-start)
- [What You Can Do](#what-you-can-do)
  - [Verse Card — Single Torah Verse Display](#verse-card--single-torah-verse-display)
  - [Chapter Card — Full Chapter with Navigation](#chapter-card--full-chapter-with-navigation)
  - [Comparison Card — Side-by-Side Verse Comparison](#comparison-card--side-by-side-verse-comparison)
  - [Verse of the Day — Auto-Updating Daily Widget](#verse-of-the-day--auto-updating-daily-widget)
  - [Search Box — Full-Text Torah Search](#search-box--full-text-torah-search)
- [Widget Options](#widget-options)
- [Themes](#themes)
- [CDN Options](#cdn-options)
- [Technical Details](#technical-details)
- [Learn More About the Torah](#learn-more-about-the-torah)
- [WideHoly Scripture Family](#wideholy-scripture-family)
- [License](#license)

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-widetorah="verse" data-ref="Genesis 1:1" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/widetorah-embed@1/dist/embed.min.js"></script>
```

That's it. The widget loads, fetches the verse from the WideTorah API, and renders it with full style isolation. References use English book names (`Genesis 1:1`) or Hebrew names (`Bereshit 1:1`) — both are supported.

## What You Can Do

The Tanakh (Hebrew Bible) is the foundational text of Judaism, compiled and canonized over centuries of Israelite history. Its 24 books are divided into three sections: Torah (the Five Books of Moses — Bereshit/Genesis through Devarim/Deuteronomy), Nevi'im (Prophets — Joshua through Malachi), and Ketuvim (Writings — Psalms, Proverbs, Job, and more). WideTorah presents the complete Masoretic text with vowel points (nikud) alongside English translations, organized by the traditional weekly reading cycle of 54 parashot.

### Verse Card — Single Torah Verse Display

A Verse Card renders a single verse in Hebrew with English translation. Hebrew text renders right-to-left with full Masoretic nikud (vowel points) and cantillation marks (trop). The default translation is JPS (Jewish Publication Society, 1917), the standard scholarly translation used in synagogues and Jewish educational institutions.

| Translation | Code | Style |
|-------------|------|-------|
| JPS 1917 | `jps` | Traditional Jewish scholarly translation |
| King James Version | `kjv` | Widely recognized Christian translation |

```html
<!-- Genesis 1:1 — B'reshit bara Elohim (In the beginning God created) -->
<div data-widetorah="verse"
  data-ref="Genesis 1:1"
  data-theme="light">
</div>

<!-- Deuteronomy 6:4 — The Shema (Hear O Israel) with Hebrew text -->
<div data-widetorah="verse"
  data-ref="Deuteronomy 6:4"
  data-translation="jps"
  data-show-original="true"
  data-theme="sepia">
</div>

<!-- Leviticus 19:18 — Love your neighbor as yourself, compact -->
<div data-widetorah="verse"
  data-ref="Leviticus 19:18"
  data-size="compact"
  data-theme="dark">
</div>

<script src="https://cdn.jsdelivr.net/npm/widetorah-embed@1/dist/embed.min.js"></script>
```

**Available options for Verse Card:**

| Attribute | Values | Default |
|-----------|--------|---------|
| `data-ref` | `"Book Chapter:Verse"` e.g. `Genesis 1:1` | required |
| `data-translation` | `jps`, `kjv` | `jps` |
| `data-show-original` | `true`, `false` | `false` (shows Hebrew with nikud) |
| `data-theme` | `light`, `dark`, `sepia` | `light` |
| `data-size` | `default`, `compact` | `default` |

Learn more: [Torah Verse Lookup — widetorah.com](https://widetorah.com) · [The Shema — Deuteronomy 6:4](https://widetorah.com) · [Aseret HaDibrot — Ten Commandments](https://widetorah.com)

### Chapter Card — Full Chapter with Navigation

A Chapter Card renders all verses in a chapter with previous/next navigation. The Torah's 929 chapters range from 9 verses (Genesis 25) to 91 verses (Psalms 119 in the Ketuvim). Chapter Cards display the parashah name when the chapter falls within the standard weekly reading cycle.

Each chapter header displays the Hebrew book name alongside the English name, the chapter number, and the parashah it belongs to (for Torah books). This context helps readers orient within the traditional Jewish reading cycle.

```html
<!-- Genesis Chapter 1 — Bereishit parashah, creation account -->
<div data-widetorah="chapter"
  data-ref="Genesis 1"
  data-theme="light">
</div>

<!-- Exodus Chapter 20 — Yitro parashah, Ten Commandments -->
<div data-widetorah="chapter"
  data-ref="Exodus 20"
  data-translation="jps"
  data-theme="sepia">
</div>

<!-- Psalms Chapter 119 — Longest chapter in Tanakh, 176 verses -->
<div data-widetorah="chapter"
  data-ref="Psalms 119"
  data-show-original="true"
  data-theme="dark">
</div>

<script src="https://cdn.jsdelivr.net/npm/widetorah-embed@1/dist/embed.min.js"></script>
```

Learn more: [Browse Tanakh Chapters — widetorah.com](https://widetorah.com) · [54 Parashot — Weekly Portions](https://widetorah.com/parashot/) · [Psalms — 150 Chapters](https://widetorah.com)

### Comparison Card — Side-by-Side Verse Comparison

Compare any two verses from across the Tanakh — useful for showing how the same theme appears in Torah law, prophetic books, and Ketuvim wisdom literature, or for displaying how different translations render a Hebrew hapax legomenon (a word appearing only once in the entire text).

The Tanakh has extensive internal cross-references — for example, 2 Kings 19 and Isaiah 37 are nearly identical chapters, and Chronicles often parallels Samuel and Kings. The Comparison Card makes these parallels visible.

```html
<!-- Compare two accounts of the Ten Commandments: Exodus 20:2 vs Deuteronomy 5:6 -->
<div data-widetorah="compare"
  data-a="Exodus 20:2"
  data-b="Deuteronomy 5:6"
  data-theme="light">
</div>

<!-- Compare two messianic prophecies: Isaiah 9:6 vs Isaiah 53:3 -->
<div data-widetorah="compare"
  data-a="Isaiah 9:6"
  data-b="Isaiah 53:3"
  data-show-original="true"
  data-theme="sepia">
</div>

<!-- Compare two wisdom sayings: Proverbs 3:5 vs Ecclesiastes 12:13 -->
<div data-widetorah="compare"
  data-a="Proverbs 3:5"
  data-b="Ecclesiastes 12:13"
  data-translation="jps"
  data-theme="dark">
</div>

<script src="https://cdn.jsdelivr.net/npm/widetorah-embed@1/dist/embed.min.js"></script>
```

Learn more: [Parallel Torah Passages — widetorah.com](https://widetorah.com) · [Rashi Commentaries — 3,901 entries](https://widetorah.com) · [Talmud Cross-References](https://widetorah.com)

### Verse of the Day — Auto-Updating Daily Widget

The Verse of the Day widget displays a curated verse that changes automatically each day. Results are cached in localStorage and refresh at midnight UTC. The daily selection follows a 365-verse cycle aligned loosely with the Torah reading cycle, covering all five books of Moses plus highlights from Psalms and Proverbs.

```html
<!-- Verse of the Day — full size, light theme -->
<div data-widetorah="votd" data-theme="light"></div>

<!-- Verse of the Day — dark theme -->
<div data-widetorah="votd" data-theme="dark"></div>

<!-- Verse of the Day — sepia, evokes the feel of a parchment scroll -->
<div data-widetorah="votd" data-theme="sepia"></div>

<!-- Compact for narrow sidebars (verse + reference only) -->
<div data-widetorah="votd" data-theme="light" data-size="compact"></div>

<script src="https://cdn.jsdelivr.net/npm/widetorah-embed@1/dist/embed.min.js"></script>
```

Learn more: [Daily Torah Verse — widetorah.com](https://widetorah.com) · [Torah Reading Schedule — Parashah Calendar](https://widetorah.com/parashot/) · [Daf Yomi — Daily Talmud Study](https://widetorah.com)

### Search Box — Full-Text Torah Search

Embed a full-text search box that queries all 23,145 verses in both JPS and KJV translations, plus 3,901 Rashi commentaries. Results appear as the user types with book, chapter, and verse reference. Hebrew transliteration search is also supported — searching "shema" returns Deuteronomy 6:4 even without a Hebrew keyboard.

```html
<!-- Default Torah search box -->
<div data-widetorah="search"
  data-placeholder="Search Torah verses…"
  data-theme="light">
</div>

<!-- Hebrew-aware search placeholder -->
<div data-widetorah="search"
  data-placeholder="Search in Hebrew or English…"
  data-theme="sepia">
</div>

<!-- Dark theme search -->
<div data-widetorah="search"
  data-placeholder="Find a verse or commentary…"
  data-theme="dark">
</div>

<script src="https://cdn.jsdelivr.net/npm/widetorah-embed@1/dist/embed.min.js"></script>
```

Learn more: [Tanakh Search — widetorah.com](https://widetorah.com) · [Rashi Commentary Search](https://widetorah.com) · [API Search Endpoint](https://widetorah.com/developers/)

## Widget Options

All widget types share these common attributes:

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-widetorah` | `verse`, `chapter`, `compare`, `votd`, `search` | required | Widget type |
| `data-ref` | `"Book Chapter:Verse"` e.g. `Genesis 1:1` | — | Verse or chapter reference |
| `data-a` | verse reference | — | First verse for comparison |
| `data-b` | verse reference | — | Second verse for comparison |
| `data-theme` | `light`, `dark`, `sepia` | `light` | Visual theme |
| `data-size` | `default`, `compact` | `default` | Compact suits sidebars under 300px |
| `data-translation` | `jps`, `kjv` | `jps` | English translation |
| `data-show-original` | `true`, `false` | `false` | Show Hebrew Masoretic text with nikud |
| `data-placeholder` | any string | `"Search Torah…"` | Placeholder for search widget |

## Themes

WideTorah widgets support 3 themes:

```html
<!-- Light — white background, dark text, indigo/purple accent -->
<div data-widetorah="votd" data-theme="light"></div>

<!-- Dark — dark background, light text, indigo accent -->
<div data-widetorah="votd" data-theme="dark"></div>

<!-- Sepia — warm parchment background, brown text — evokes a Torah scroll -->
<div data-widetorah="votd" data-theme="sepia"></div>
```

All themes are self-contained inside Shadow DOM — they never affect or inherit from your site's CSS.

## CDN Options

### jsDelivr (recommended — global CDN, auto-updates with npm)

```html
<script src="https://cdn.jsdelivr.net/npm/widetorah-embed@1/dist/embed.min.js"></script>
```

Pin to a specific version for production stability:

```html
<script src="https://cdn.jsdelivr.net/npm/widetorah-embed@1.0.1/dist/embed.min.js"></script>
```

### R2 CDN (widetorah.com hosted)

```html
<script src="https://cdn.widetorah.com/embed.min.js"></script>
```

### npm (for bundlers — Webpack, Vite, Rollup)

```bash
npm install widetorah-embed
```

```javascript
import 'widetorah-embed';
```

## Technical Details

- **Shadow DOM**: Complete style isolation — no CSS conflicts with your site. Widgets are fully encapsulated.
- **Zero dependencies**: No jQuery, React, Vue, or any external library. Pure browser APIs only.
- **RTL support**: Hebrew text renders correctly right-to-left with Masoretic nikud and trop marks.
- **System fonts**: No Google Fonts request — widgets use the system font stack and load instantly.
- **CORS**: WideTorah API has CORS enabled for all origins — no proxy needed.
- **Caching**: Verse of the Day cached in localStorage, refreshes daily at midnight UTC.
- **MutationObserver**: Works with dynamically added elements (React, Vue, Angular SPAs).
- **Bundle size**: ~5KB gzipped.
- **Accent color**: Indigo (`#6366F1`) — matches the WideTorah brand.
- **API base**: `https://widetorah.com/api/v1/` — free, no authentication required.

## Learn More About the Torah

- **Browse**: [All 24 Tanakh Books — widetorah.com](https://widetorah.com) · [Five Books of Moses](https://widetorah.com) · [Nevi'im — Prophets](https://widetorah.com) · [Ketuvim — Writings](https://widetorah.com)
- **Study**: [54 Parashot — Weekly Torah Portions](https://widetorah.com/parashot/) · [Rashi Commentaries — 3,901 entries](https://widetorah.com) · [Talmud Daf Yomi — 2,121 pages](https://widetorah.com)
- **Reference**: [Hebrew-English Tanakh](https://widetorah.com) · [JPS Translation Guide](https://widetorah.com/translations/) · [Masoretic Text Explained](https://widetorah.com)
- **Tools**: [Torah Verse Lookup](https://widetorah.com) · [Parashah Calendar](https://widetorah.com/parashot/) · [Widget Builder](https://widget.widetorah.com)
- **API**: [REST API Docs](https://widetorah.com/developers/) · [OpenAPI Spec](https://widetorah.com/api/openapi.json)

## WideHoly Scripture Family

Part of [WideHoly](https://wideholy.com) — Scripture for everyone.

| Site | Domain | Scripture |
|------|--------|-----------|
| WideBible | [widebible.com](https://widebible.com) | 66 books, 31,102 verses, KJV/ASV/BBE/YLT, 1,833 people |
| WideQuran | [widequran.com](https://widequran.com) | 114 surahs, 6,236 ayahs, Arabic Uthmani + 5 translations |
| **WideTorah** | [widetorah.com](https://widetorah.com) | **24 books, 23,145 verses, Hebrew Masoretic + English, 54 parashot, 3,901 Rashi commentaries** |
| WideGita | [widegita.com](https://widegita.com) | 18 chapters, 700 verses, Sanskrit Devanagari + 9 commentators |
| WideSutra | [widesutra.com](https://widesutra.com) | 5 collections, 5,326 texts, Pali + English |
| WideHoly | [wideholy.com](https://wideholy.com) | 5 religions, 236,000+ scripture records, cross-religion comparison |

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [WideHoly](https://wideholy.com).
