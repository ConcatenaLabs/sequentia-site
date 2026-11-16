# sequentia-site

The website at [sequentia.io](https://sequentia.io): what Sequentia is, its key features, the
testnet's applications, answers to common questions and the community's channels. Sequentia is a
Bitcoin sidechain for asset tokenization and disintermediated exchanges.

It is a static [Astro](https://astro.build/) site, built into plain HTML in `dist/` and served by
GitHub Pages. The documentation is a separate site, [docs.sequentia.io](https://docs.sequentia.io),
and shares this site's palette (ink, gold and cream) and type (Montserrat).

## Build and preview

Needs Node.js 22 (`.nvmrc`).

```sh
npm ci
npm run build       # writes dist/
npm run preview     # serves dist/ on http://localhost:4321
```

`npm run dev` serves the site with live reload while you edit.

## Where things are

| Path | What it holds |
|---|---|
| `src/pages/index.astro` | The home page: hero, key features, testnet ecosystem, FAQ, community |
| `src/data/faq.ts` | The FAQ's questions and answers |
| `src/site.ts` | Shared links (testnet, docs, socials, contact) and the `PREVIEW` switch |
| `src/layouts/Base.astro` | The page shell: head, header, footer |
| `src/components/` | Header and footer |
| `src/styles/global.css` | Palette, type and every section's style |
| `public/img/` | The logos and images, kept here so the site depends on no other host |

## Add a page

Create `src/pages/<name>.astro`; it is served at `/<name>/`. Wrap it in the layout and build every
internal link with `url()`, so it works both at the preview address and at the domain:

```astro
---
import Base from '../layouts/Base.astro';
import { url } from '../site';
---
<Base title="Name: Sequentia" description="One sentence on what the page is.">
  <section class="section wrap">
    <h2>Heading</h2>
    <p>Text. <a href={url('#faq')}>Back to the questions</a>.</p>
  </section>
</Base>
```

Link it from the header (`src/components/Header.astro`) or the footer if visitors should find it.

## Writing

Write in the present tense about what is true now, in plain words, and link docs.sequentia.io for
depth. The workflow refuses em and en dashes anywhere under `src/` and in this file. The network is
Sequentia; its token is the Sequence token (SEQ), named that way on first mention.

## Publish

`.github/workflows/deploy.yml` builds every pull request, and on every push to `main` builds and
publishes the site to GitHub Pages while the repository variable `PAGES_ENABLED` is `true`. It reads
the address Pages serves from (`actions/configure-pages`), so the same build works at
`https://concatenalabs.github.io/sequentia-site/` and, once the domain is set, at
`https://sequentia.io/`.

While `PREVIEW` is `true` in `src/site.ts`, every page sends `noindex`. Set it to `false` in the
same pull request that follows the domain switch.

## Pointing sequentia.io at this site

1. **DNS**, at the registrar of `sequentia.io` (replace the records that point at the current host;
   leave `docs` and every other subdomain alone):

   | Name | Type | Value |
   |---|---|---|
   | `@` | A | `185.199.108.153` |
   | `@` | A | `185.199.109.153` |
   | `@` | A | `185.199.110.153` |
   | `@` | A | `185.199.111.153` |
   | `@` | AAAA | `2606:50c0:8000::153` |
   | `@` | AAAA | `2606:50c0:8001::153` |
   | `@` | AAAA | `2606:50c0:8002::153` |
   | `@` | AAAA | `2606:50c0:8003::153` |
   | `www` | CNAME | `concatenalabs.github.io.` |

   GitHub serves `www.sequentia.io` as a redirect to `sequentia.io`.

2. **Custom domain** on the repository, once the records resolve:

   ```sh
   gh api -X PUT repos/ConcatenaLabs/sequentia-site/pages -f cname=sequentia.io
   ```

3. **HTTPS**, once GitHub has issued the certificate (`gh api repos/ConcatenaLabs/sequentia-site/pages
   --jq .https_certificate.state` reads `approved`):

   ```sh
   gh api -X PUT repos/ConcatenaLabs/sequentia-site/pages -F https_enforced=true
   ```

4. **Rebuild** so links drop the preview's `/sequentia-site/` prefix:
   `gh workflow run deploy.yml -R ConcatenaLabs/sequentia-site`, then set `PREVIEW` to `false`.

Verifying `sequentia.io` for the organization (Organization settings, Pages, Add a domain) adds a
`TXT` record named `_github-pages-challenge-ConcatenaLabs` and stops any other GitHub account from
claiming the domain.
