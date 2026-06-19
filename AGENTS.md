# AGENTS.md

This repository is the online CV / resume site for Konuralp Yolgecen, published as a static GitHub Pages site.

## Project Shape

- `index.html` is the main French CV page.
- `indexTurkish.html` is the Turkish CV page.
- `scss/` contains the editable Sass source for the theme.
- `css/resume.css` and `css/resume.min.css` are generated from `scss/`; keep them in sync when style source changes.
- `js/resume.js` is the editable custom JavaScript.
- `js/resume.min.js` is generated from `js/resume.js`; keep it in sync when JavaScript source changes.
- `img/` contains profile photos, company logos, skill icons, and professional carousel photos.
- `vendor/` contains checked-in third-party browser dependencies used directly by the HTML.
- SEO and hosting support files live at the root: `robots.txt`, `sitemap.xml`, `google9aa8b2a23c3ce0a0.html`, and `.well-known/`.

## Tech Stack

- Static HTML site based on Start Bootstrap Resume.
- Bootstrap 4.1.3, jQuery 3.3.1, Font Awesome 5.3.1.
- Sass build handled by Gulp 3.
- Runtime animation libraries: Vivify, Anime.js, AOS, jQuery Easing.
- There is no backend, framework router, or build-time templating.

## Commands

- Install dependencies: `npm install`
- Build all generated assets: `npx gulp`
- Build CSS only: `npx gulp css`
- Build JS only: `npx gulp js`
- Local development server with live reload: `npx gulp dev`

Notes:

- `package.json` has no npm scripts; use Gulp tasks directly.
- This project uses old Gulp 3 tooling. If modern Node fails with Gulp errors, use an older compatible Node runtime rather than rewriting the build system unless the user explicitly asks for modernization.
- The site can also be inspected by opening `index.html` directly, but the Gulp dev server is better for checking browser behavior.

## Content Guidelines

- Treat this as a public professional CV. Keep copy concise, credible, and recruiter/client friendly.
- Preserve the current sections and anchors unless there is a deliberate navigation change: `about`, `experience`, `education`, `skills`, `interests`.
- French is the primary page. Turkish is the secondary localized page. When updating CV content, check whether the matching language page should be updated too.
- Keep personal/contact data consistent across pages unless the difference is intentional.
- Do not invent employment history, degrees, certifications, client names, technologies, dates, SIRET details, or personal claims.
- If adding external links, use HTTPS where possible and keep `target="_blank"` consistent with existing links.
- Keep image `alt` text present and meaningful enough for accessibility.

## Style Guidelines

- Edit Sass in `scss/` first, then regenerate `css/resume.css` and `css/resume.min.css`.
- Preserve the Bootstrap 4 / Start Bootstrap Resume structure unless a requested change requires otherwise.
- The main brand color is `$primary` in `scss/_variables.scss`.
- Sidebar layout is controlled mostly by `scss/_nav.scss`; section sizing is controlled mostly by `scss/_resume-item.scss`.
- Avoid one-off inline styles in HTML. Existing inline styles can remain, but new styling should usually go into Sass.
- Keep the site responsive on mobile and desktop, especially the fixed left sidebar, carousels, large headings, and skill icon rows.

## JavaScript Guidelines

- Edit `js/resume.js`, then regenerate `js/resume.min.js`.
- Current behaviors include smooth scrolling, mobile menu collapse, Bootstrap scrollspy, popovers, automatic age calculation, image carousels, modal photo preview, name animation, and AOS initialization.
- The age calculation depends on the birthday `1993-09-15`; keep both `#age` and `#agePageTurkish` working if language pages remain separate.
- If adding a carousel, include its ID in the carousel initialization or refactor carefully.

## Assets

- Prefer reusing existing images and icon conventions before adding new asset types.
- Optimize new photos/logos for web size before committing.
- Keep professional photos under `img/photos_professional/`, company logos under `img/icons_company/`, and skill/tool icons under `img/icons/`.
- Do not overwrite existing images casually; many are personal/professional assets.

## Vendor Files

- Avoid manual edits in `vendor/` unless the task is specifically about vendored assets.
- If dependencies are refreshed, use the `vendor` Gulp task and review the resulting diff carefully.

## Verification Checklist

After changes, check the relevant items:

- HTML pages still load without console errors.
- Navigation links scroll to the intended sections.
- Language dropdown links point to the intended pages.
- Popovers, carousels, image modal, and AOS animations still initialize.
- Mobile navbar opens, closes, and does not cover unreadable content.
- If Sass changed, generated CSS files were updated.
- If custom JS changed, minified JS was updated.
- `git status --short` does not include unrelated accidental changes.

## Current Repository Caveats

- The working tree may contain user changes, especially images or vendored files. Do not revert files you did not modify.
- The HTML currently contains emoji and accented French/Turkish text; keep UTF-8 encoding intact.
- Some external assets are loaded from CDNs, so full visual behavior may require network access in the browser.
