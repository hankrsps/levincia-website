# Levincia Website

Static Next.js site configured for GitHub Pages at **https://levincia-ps.com**.

## GitHub Pages setup

1. Upload the contents of this folder to the repository root.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. In **Settings → Pages → Custom domain**, enter `levincia-ps.com`.
4. Push to `main` (or `source`) or manually run **Deploy Levincia to GitHub Pages** from the Actions tab.
5. Wait for both the **build** and **deploy** jobs to turn green.
6. Enable **Enforce HTTPS** once GitHub makes the option available.

The workflow verifies that both `out/index.html` and `out/CNAME` exist before deployment.
