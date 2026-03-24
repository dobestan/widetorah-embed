/* widetorah-embed v1.0.0 | MIT | https://widget.widetorah.com */

// <define:SITE_CONFIG>
var define_SITE_CONFIG_default = { site: "widetorah", name: "WideTorah", domain: "widetorah.com", apiBase: "https://widetorah.com/api/v1/torah", votdEndpoint: "https://widetorah.com/api/v1/verse-of-the-day/", searchPath: "/search/", accent: "#2563EB", attribute: "data-widetorah", religion: "judaism", scriptureLabel: "Torah", defaultTranslation: "jps" };

// src/themes.ts
function getThemeCSS(accent) {
  return `
:host {
  display: block;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --site-accent: ${accent};
}

.wide-widget {
  box-sizing: border-box;
  min-width: 280px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 15px;
  line-height: 1.6;
  transition: border-color 0.2s;
}

.wide-widget[data-theme="light"] {
  --bg: #ffffff;
  --text: #1a1a1a;
  --border: #e5e7eb;
  --accent: var(--site-accent);
  --muted: #6b7280;
  --ribbon: #f9fafb;
  --badge-bg: #f3f4f6;
  --badge-text: #374151;
  --link: var(--site-accent);
  --copy-bg: #f3f4f6;
  --copy-hover: #e5e7eb;
  --input-bg: #ffffff;
  --input-border: #d1d5db;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.wide-widget[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #f3f4f6;
  --border: #374151;
  --accent: var(--site-accent);
  --muted: #9ca3af;
  --ribbon: #111111;
  --badge-bg: #374151;
  --badge-text: #d1d5db;
  --link: #93c5fd;
  --copy-bg: #374151;
  --copy-hover: #4b5563;
  --input-bg: #111111;
  --input-border: #4b5563;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0,0,0,0.4);
}

.wide-widget[data-theme="sepia"] {
  --bg: #f5f0e8;
  --text: #3d3529;
  --border: #d4c5a9;
  --accent: var(--site-accent);
  --muted: #8b7d6b;
  --ribbon: #ede8df;
  --badge-bg: #e8e0d0;
  --badge-text: #5c4f3d;
  --link: #7c5c3b;
  --copy-bg: #e8e0d0;
  --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8;
  --input-border: #c4b49a;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61,53,41,0.12);
}

.wide-widget *, .wide-widget *::before, .wide-widget *::after {
  box-sizing: border-box;
}

/* Loading state */
.wide-loading {
  padding: 20px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.wide-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: wide-spin 0.7s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes wide-spin {
  to { transform: rotate(360deg); }
}

/* Error state */
.wide-error {
  padding: 16px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

.wide-error a {
  color: var(--link);
  text-decoration: none;
}

.wide-error a:hover {
  text-decoration: underline;
}

/* Scripture ribbon blockquote */
.wide-ribbon {
  border-left: 4px solid var(--accent);
  background: var(--ribbon);
  margin: 0;
  padding: 14px 16px;
}

.wide-ribbon.compact {
  padding: 10px 12px;
}

/* Scripture text */
.wide-verse-text {
  font-family: Georgia, 'Times New Roman', 'Palatino Linotype', serif;
  font-size: 16px;
  line-height: 1.75;
  color: var(--text);
  margin: 0 0 8px 0;
}

.wide-verse-text.compact {
  font-size: 14px;
  line-height: 1.6;
}

/* Original language text */
.wide-original {
  font-size: 18px;
  line-height: 1.8;
  color: var(--muted);
  margin: 8px 0 0 0;
  font-family: serif;
  direction: auto;
}

/* Content area */
.wide-body {
  padding: 14px 16px 12px;
}

.wide-body.compact {
  padding: 10px 12px 10px;
}

/* Reference + badges */
.wide-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.wide-ref {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}

.wide-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* Actions row */
.wide-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 16px;
  border-top: 1px solid var(--border);
  background: var(--bg);
}

.wide-actions.compact {
  padding: 8px 12px;
}

.wide-link {
  font-size: 12px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: opacity 0.15s;
}

.wide-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.wide-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

.wide-copy-btn {
  background: var(--copy-bg);
  color: var(--text);
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: background 0.15s;
  font-family: inherit;
}

.wide-copy-btn:hover {
  background: var(--copy-hover);
}

.wide-copy-btn svg {
  width: 13px;
  height: 13px;
}

/* Title */
.wide-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 6px 0;
  line-height: 1.3;
}

.wide-subtitle {
  font-size: 13px;
  color: var(--muted);
  margin: 0 0 10px 0;
}

.wide-summary {
  font-size: 14px;
  color: var(--text);
  margin: 0;
  line-height: 1.65;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Verse count / stat badges */
.wide-stat {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--muted);
  background: var(--badge-bg);
  border-radius: 4px;
  padding: 3px 8px;
}

/* Compare layout */
.wide-compare-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 14px 16px;
}

@media (max-width: 480px) {
  .wide-compare-grid {
    grid-template-columns: 1fr;
  }
}

.wide-compare-col {
  border-left: 3px solid var(--accent);
  padding-left: 10px;
}

.wide-compare-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}

.wide-compare-text {
  font-family: Georgia, serif;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text);
}

/* Search box */
.wide-search-wrap {
  padding: 14px 16px;
}

.wide-search-form {
  display: flex;
  gap: 8px;
}

.wide-search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}

.wide-search-input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}

.wide-search-input::placeholder {
  color: var(--muted);
}

.wide-search-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.wide-search-btn:hover {
  opacity: 0.9;
}

/* Powered by footer */
.wide-powered {
  display: block;
  text-align: center;
  padding: 8px 16px;
  font-size: 11px;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

.wide-powered a {
  color: var(--link);
  text-decoration: none;
  font-weight: 500;
}

.wide-powered a:hover {
  text-decoration: underline;
}

/* VOTD header accent bar */
.wide-accent-bar {
  height: 3px;
  background: var(--accent);
  width: 100%;
}

/* Person card avatar placeholder */
.wide-person-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px 0;
}

.wide-person-icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--badge-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--accent);
}

.wide-person-icon svg {
  width: 22px;
  height: 22px;
}

.wide-person-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin: 0;
}

.wide-person-era {
  font-size: 12px;
  color: var(--muted);
  margin: 2px 0 0 0;
}
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent);
  shadow.appendChild(style);
  return shadow;
}
function createWidgetRoot(shadow, el, extraClass) {
  const theme = el.dataset.theme || "light";
  const size = el.dataset.size || "default";
  const div = document.createElement("div");
  div.className = ["wide-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", theme);
  div.setAttribute("data-size", size);
  shadow.appendChild(div);
  return div;
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="wide-loading">
      <span class="wide-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="wide-error">
      <p>${message}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${config.name}
      </a>
    </div>
  `;
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
var copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
var checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
var personIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
function poweredByHTML(config) {
  return `<span class="wide-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${config.name}</a></span>`;
}
function bindCopyButton(btn, text) {
  btn.addEventListener("click", () => {
    var _a;
    (_a = navigator.clipboard) == null ? void 0 : _a.writeText(text).then(() => {
      btn.innerHTML = `${checkIcon} Copied!`;
      setTimeout(() => {
        btn.innerHTML = `${copyIcon} Copy`;
      }, 2e3);
    }).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      btn.innerHTML = `${checkIcon} Copied!`;
      setTimeout(() => {
        btn.innerHTML = `${copyIcon} Copy`;
      }, 2e3);
    });
  });
}

// src/widgets/verse.ts
function parseRef(ref) {
  const withBook = ref.match(/^(.+?)\s+(\d+):(\d+)$/);
  if (withBook) {
    return { book: withBook[1], chapter: withBook[2], verse: withBook[3] };
  }
  const noBook = ref.match(/^(\d+):(\d+)$/);
  if (noBook) {
    return { book: "", chapter: noBook[1], verse: noBook[2] };
  }
  return null;
}
function buildApiUrl(config, ref, translation) {
  const parsed = parseRef(ref);
  if (!parsed) return "";
  const params = new URLSearchParams();
  if (parsed.book) params.set("book", parsed.book);
  params.set("chapter", parsed.chapter);
  params.set("verse", parsed.verse);
  if (translation) params.set("translation", translation);
  return `${config.apiBase}/verses/?${params.toString()}`;
}
function renderVerseWidget(container, data, el, config) {
  const isCompact = el.dataset.size === "compact";
  const showOriginal = el.dataset.showOriginal === "true";
  const ref = data.reference || el.dataset.ref || "";
  const translation = data.translation || config.defaultTranslation;
  const verseUrl = data.url || `https://${config.domain}`;
  const originalHtml = showOriginal && data.original_text ? `<p class="wide-original" lang="${data.original_language || ""}">${data.original_text}</p>` : "";
  container.innerHTML = `
    <div class="wide-ribbon${isCompact ? " compact" : ""}">
      <p class="wide-verse-text${isCompact ? " compact" : ""}">${data.text}</p>
      ${originalHtml}
    </div>
    <div class="wide-body${isCompact ? " compact" : ""}">
      <div class="wide-meta">
        <span class="wide-ref">${ref}</span>
        <span class="wide-badge">${translation.toUpperCase()}</span>
      </div>
    </div>
    <div class="wide-actions${isCompact ? " compact" : ""}">
      <a class="wide-link" href="${verseUrl}" target="_blank" rel="noopener">
        Read on ${config.name} ${externalLinkIcon}
      </a>
      <button class="wide-copy-btn" type="button">
        ${copyIcon} Copy
      </button>
    </div>
    ${poweredByHTML(config)}
  `;
  const copyBtn = container.querySelector(".wide-copy-btn");
  if (copyBtn) {
    bindCopyButton(copyBtn, `${data.text} \u2014 ${ref}`);
  }
}
function initVerseWidget(el, config) {
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  const ref = el.dataset.ref || "";
  const translation = el.dataset.translation || config.defaultTranslation;
  if (!ref) {
    renderError(container, "Missing data-ref attribute.", config);
    return;
  }
  const url = buildApiUrl(config, ref, translation);
  if (!url) {
    renderError(container, `Could not parse reference: "${ref}"`, config);
    return;
  }
  fetch(url).then((r) => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  }).then((data) => {
    const verse = "results" in data && Array.isArray(data.results) ? data.results[0] : data;
    if (!verse || !verse.text) throw new Error("No verse found");
    renderVerseWidget(container, verse, el, config);
  }).catch(() => {
    renderError(
      container,
      `Could not load "${ref}". Visit ${config.name} to read scripture.`,
      config
    );
  });
}

// src/widgets/chapter.ts
function parseChapterRef(ref) {
  const withBook = ref.match(/^(.+?)\s+(\d+)$/);
  if (withBook) return { book: withBook[1], chapter: withBook[2] };
  const noBook = ref.match(/^(\d+)$/);
  if (noBook) return { book: "", chapter: noBook[1] };
  return null;
}
function truncateWords(text, wordLimit) {
  const words = text.split(/\s+/);
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "\u2026";
}
function initChapterWidget(el, config) {
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  const ref = el.dataset.ref || "";
  if (!ref) {
    renderError(container, "Missing data-ref attribute.", config);
    return;
  }
  const parsed = parseChapterRef(ref);
  if (!parsed) {
    renderError(container, `Could not parse chapter reference: "${ref}"`, config);
    return;
  }
  const apiUrl = parsed.book ? `${config.apiBase}/chapters/${encodeURIComponent(parsed.book)}/${parsed.chapter}/` : `${config.apiBase}/chapters/${parsed.chapter}/`;
  fetch(apiUrl).then((r) => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  }).then((data) => {
    var _a;
    const title = data.title || data.name || ref;
    const bookName = data.book_name || data.book || "";
    const summary = data.summary || data.description || "";
    const verseCount = (_a = data.verse_count) != null ? _a : Array.isArray(data.verses) ? data.verses.length : null;
    const chapterUrl = data.url || `https://${config.domain}`;
    const summaryText = summary ? truncateWords(summary, 100) : "";
    container.innerHTML = `
        <div class="wide-body">
          <div class="wide-meta">
            ${bookName ? `<span class="wide-badge">${bookName}</span>` : ""}
            ${verseCount != null ? `<span class="wide-stat">${verseCount} verses</span>` : ""}
          </div>
          <h3 class="wide-title">${title}</h3>
          ${summaryText ? `<p class="wide-summary">${summaryText}</p>` : ""}
        </div>
        <div class="wide-actions">
          <a class="wide-link" href="${chapterUrl}" target="_blank" rel="noopener">
            Read full chapter on ${config.name} ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
  }).catch(() => {
    renderError(
      container,
      `Could not load chapter "${ref}". Visit ${config.name} to read scripture.`,
      config
    );
  });
}

// src/widgets/person.ts
function truncateWords2(text, wordLimit) {
  const words = text.split(/\s+/);
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "\u2026";
}
function initPersonWidget(el, config) {
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  const slug = el.dataset.slug || "";
  if (!slug) {
    renderError(container, "Missing data-slug attribute.", config);
    return;
  }
  const apiUrl = `${config.apiBase}/people/${encodeURIComponent(slug)}/`;
  fetch(apiUrl).then((r) => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  }).then((data) => {
    var _a, _b;
    const name = data.name || data.full_name || slug;
    const era = data.era || data.period || "";
    const bio = data.bio || data.description || "";
    const verseCount = (_b = (_a = data.verse_count) != null ? _a : data.mentioned_verses) != null ? _b : null;
    const personUrl = data.url || `https://${config.domain}/people/${slug}/`;
    const bioText = bio ? truncateWords2(bio, 150) : "";
    container.innerHTML = `
        <div class="wide-person-header">
          <div class="wide-person-icon">${personIcon}</div>
          <div>
            <p class="wide-person-name">${name}</p>
            ${era ? `<p class="wide-person-era">${era}</p>` : ""}
          </div>
        </div>
        <div class="wide-body">
          <div class="wide-meta">
            ${verseCount != null ? `<span class="wide-stat">${verseCount} verses</span>` : ""}
          </div>
          ${bioText ? `<p class="wide-summary">${bioText}</p>` : ""}
        </div>
        <div class="wide-actions">
          <a class="wide-link" href="${personUrl}" target="_blank" rel="noopener">
            Learn more on ${config.name} ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
  }).catch(() => {
    renderError(
      container,
      `Could not load "${slug}". Visit ${config.name} for biblical figures.`,
      config
    );
  });
}

// src/widgets/compare.ts
function parseRef2(ref) {
  const params = new URLSearchParams();
  const withBook = ref.match(/^(.+?)\s+(\d+):(\d+)$/);
  if (withBook) {
    params.set("book", withBook[1]);
    params.set("chapter", withBook[2]);
    params.set("verse", withBook[3]);
    return params;
  }
  const noBook = ref.match(/^(\d+):(\d+)$/);
  if (noBook) {
    params.set("chapter", noBook[1]);
    params.set("verse", noBook[2]);
  }
  return params;
}
async function fetchVerse(config, ref) {
  var _a, _b;
  const params = parseRef2(ref);
  const url = `${config.apiBase}/verses/?${params.toString()}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const data = await r.json();
  const verse = (_b = (_a = data.results) == null ? void 0 : _a[0]) != null ? _b : data;
  if (!(verse == null ? void 0 : verse.text)) throw new Error("No verse data");
  return { text: verse.text, reference: verse.reference || ref, url: verse.url };
}
function initCompareWidget(el, config) {
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  const refA = el.dataset.a || "";
  const refB = el.dataset.b || "";
  if (!refA || !refB) {
    renderError(container, "Missing data-a or data-b attributes.", config);
    return;
  }
  Promise.all([fetchVerse(config, refA), fetchVerse(config, refB)]).then(([verseA, verseB]) => {
    const compareUrl = `https://${config.domain}/compare/`;
    container.innerHTML = `
        <div class="wide-compare-grid">
          <div class="wide-compare-col">
            <p class="wide-compare-label">${verseA.reference}</p>
            <p class="wide-compare-text">${verseA.text}</p>
          </div>
          <div class="wide-compare-col">
            <p class="wide-compare-label">${verseB.reference}</p>
            <p class="wide-compare-text">${verseB.text}</p>
          </div>
        </div>
        <div class="wide-actions">
          <a class="wide-link" href="${compareUrl}" target="_blank" rel="noopener">
            Compare on ${config.name} ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
  }).catch(() => {
    renderError(
      container,
      `Could not load comparison. Visit ${config.name} to compare scripture.`,
      config
    );
  });
}

// src/widgets/votd.ts
var CACHE_PREFIX = "wide_votd_";
function getTodayKey() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function getCached(site) {
  try {
    const key = `${CACHE_PREFIX}${site}`;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.date !== getTodayKey()) {
      localStorage.removeItem(key);
      return null;
    }
    return parsed.data;
  } catch (e) {
    return null;
  }
}
function setCache(site, data) {
  try {
    const key = `${CACHE_PREFIX}${site}`;
    localStorage.setItem(key, JSON.stringify({ date: getTodayKey(), data }));
  } catch (e) {
  }
}
function initVotdWidget(el, config) {
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  const isCompact = el.dataset.size === "compact";
  function render(data) {
    const translation = data.translation || config.defaultTranslation;
    const verseUrl = data.url || `https://${config.domain}`;
    container.innerHTML = `
      <div class="wide-accent-bar"></div>
      <div class="wide-ribbon${isCompact ? " compact" : ""}">
        <p class="wide-verse-text${isCompact ? " compact" : ""}">${data.text}</p>
      </div>
      <div class="wide-body${isCompact ? " compact" : ""}">
        <div class="wide-meta">
          <span class="wide-ref">${data.reference}</span>
          <span class="wide-badge">${translation.toUpperCase()}</span>
          <span class="wide-badge">Verse of the Day</span>
        </div>
      </div>
      <div class="wide-actions${isCompact ? " compact" : ""}">
        <a class="wide-link" href="${verseUrl}" target="_blank" rel="noopener">
          More at ${config.name} ${externalLinkIcon}
        </a>
        <button class="wide-copy-btn" type="button">
          ${copyIcon} Copy
        </button>
      </div>
      ${poweredByHTML(config)}
    `;
    const copyBtn = container.querySelector(".wide-copy-btn");
    if (copyBtn) {
      bindCopyButton(copyBtn, `${data.text} \u2014 ${data.reference}`);
    }
  }
  const cached = getCached(config.site);
  if (cached) {
    render(cached);
    return;
  }
  fetch(config.votdEndpoint).then((r) => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  }).then((data) => {
    if (!(data == null ? void 0 : data.text)) throw new Error("No VOTD data");
    setCache(config.site, data);
    render(data);
  }).catch(() => {
    renderError(
      container,
      `Could not load verse of the day. Visit ${config.name} for daily scripture.`,
      config
    );
  });
}

// src/widgets/search.ts
function initSearchWidget(el, config) {
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  const placeholder = el.dataset.placeholder || `Search ${config.scriptureLabel}\u2026`;
  container.innerHTML = `
    <div class="wide-search-wrap">
      <form class="wide-search-form" action="https://${config.domain}${config.searchPath}" method="get" target="_blank">
        <input
          class="wide-search-input"
          type="search"
          name="q"
          placeholder="${placeholder}"
          aria-label="${placeholder}"
          autocomplete="off"
        />
        <button class="wide-search-btn" type="submit">Search</button>
      </form>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/core.ts
function initWidget(el, type, config) {
  switch (type) {
    case "verse":
      initVerseWidget(el, config);
      break;
    case "chapter":
      initChapterWidget(el, config);
      break;
    case "person":
      initPersonWidget(el, config);
      break;
    case "compare":
      initCompareWidget(el, config);
      break;
    case "votd":
      initVotdWidget(el, config);
      break;
    case "search":
      initSearchWidget(el, config);
      break;
    default:
      break;
  }
}
function initAll(config) {
  const elements = document.querySelectorAll(`[${config.attribute}]`);
  elements.forEach((el) => {
    if (el.shadowRoot) return;
    const widgetType = el.dataset[config.attribute.replace("data-", "")];
    if (!widgetType) return;
    initWidget(el, widgetType, config);
  });
}
(function bootstrap() {
  const config = define_SITE_CONFIG_default;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        var _a;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        if (el.hasAttribute(config.attribute) && !el.shadowRoot) {
          const widgetType = el.dataset[config.attribute.replace("data-", "")];
          if (widgetType) initWidget(el, widgetType, config);
        }
        (_a = el.querySelectorAll) == null ? void 0 : _a.call(el, `[${config.attribute}]`).forEach((child) => {
          if (!child.shadowRoot) {
            const widgetType = child.dataset[config.attribute.replace("data-", "")];
            if (widgetType) initWidget(child, widgetType, config);
          }
        });
      });
    });
  });
  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true
  });
})();
