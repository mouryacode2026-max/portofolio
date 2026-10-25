# How to Publish Your Portfolio (So Anyone Can Visit)

Your portfolio is a static website (HTML + CSS + JS), so it can be hosted for **FREE**.

## Option A — Netlify Drop (Easiest, ~2 minutes, no account needed to start)

1. Open https://app.netlify.com/drop in your browser.
2. Drag and drop your entire `Portfolio` folder (the one containing `index.html`, `style.css`, `script.js`, and the `images/` folder) onto the page.
3. Netlify will instantly give you a live public URL like `https://your-site-name.netlify.app`.
4. (Optional) Create a free Netlify account to keep the site permanent and rename the URL to something like `mourya-portfolio.netlify.app`.

## Option B — GitHub Pages (Free, professional URL like username.github.io)

1. Create a free account at https://github.com
2. Create a new repository named `portfolio` (or your name).
3. Upload these files to the repository: `index.html`, `style.css`, `script.js`, and the `images/` folder.
4. In the repository, go to **Settings → Pages**.
5. Under "Source", choose **Deploy from a branch**, select `main` branch and `/ (root)` folder, then click **Save**.
6. Wait 1-2 minutes. Your site will be live at `https://YOUR-USERNAME.github.io/portfolio/`

## Files needed for hosting
- `index.html`  (homepage — renamed from structure.html)
- `style.css`
- `script.js`
- `images/` folder (profile.png, profile.svg)

## Notes
- `index.html` must be named exactly `index.html` — that's the default page servers look for.
- All image paths are already relative (`images/profile.png`), so they work on any host.
- You can later buy a custom domain (e.g. `mourya.dev`) and connect it to Netlify or GitHub Pages.

Recommended for beginners: **Option A (Netlify Drop)**.