# Rizal's Portfolio

A Next.js portfolio exported as a static site and hosted with Cloudflare Workers
Static Assets. `npm run build` generates HTML, JavaScript, CSS, and public assets
in `out/`. No server runtime or OpenNext adapter is needed for this deployment.

## Development

Use Node.js 24 LTS and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Preview the static site

```bash
npm run preview
```

This builds the site and serves `out/` using Wrangler at http://localhost:8787.
After an existing build, `npm start` serves the export without rebuilding.
Next.js `next start` does not support `output: "export"`.

Verify the build and Workers configuration without publishing:

```bash
npm run deploy:check
```

## Deploy to Cloudflare Workers

The Worker name is `rizal-portfolio` in `wrangler.jsonc`. Change it before deploying
if you want a different name; use the same name for a connected Cloudflare project.

```bash
npx wrangler login
npm run deploy
```

Wrangler uploads `out/` and prints the deployed URL. If your account has multiple
Cloudflare accounts, set `CLOUDFLARE_ACCOUNT_ID` to select the intended one. For
non-interactive CI, provide `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as CI
secrets instead of running `wrangler login`.

For Cloudflare Workers Builds connected to this repository, use:

| Setting                    | Value                 |
| -------------------------- | --------------------- |
| Root directory             | Repository root       |
| Build command              | `npm run build`       |
| Deploy command             | `npx wrangler deploy` |
| Build environment variable | `NODE_VERSION=24`     |

The asset directory is already configured as `./out` in `wrangler.jsonc`.
Unknown routes serve the exported `404.html` with HTTP status 404.

To use `rizalfatah.my.id`, add it under the deployed Worker's **Settings → Domains
& Routes → Add → Custom Domain**. Metadata in `app/layout.tsx`, `app/robots.ts`,
and `app/sitemap.ts` uses this domain; update all three if your domain changes.

## Static export notes

- Images use `unoptimized: true`; there is no Next.js image optimization server.
- `next/font/google` downloads Inter at build time, so builds need access to
  Google Fonts. The exported site serves the downloaded font itself.
- The contact form currently simulates submission. Sending messages requires a
  separate form service or API.
- New dynamic routes need `generateStaticParams()` to be exported. Server Actions,
  request-time SSR, and request-dependent API handlers require a different setup.

References: [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
and [Cloudflare Workers SSG routing](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/).
