# singha105.github.io

My portfolio site, live at **[singha105.github.io](https://singha105.github.io)**.

Built with Next.js 16, React 19 and Tailwind CSS 4, exported as a static site, and deployed to GitHub Pages by GitHub Actions.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/site.ts` | All the content: projects, experience, skills and links |
| `src/components/` | One component per page section |
| `src/app/globals.css` | Design tokens and the page's two animations |
| `public/` | Images, the résumé PDF, and the WAPH course page |
| `waph/` | The original WAPH course report and screenshots |

To add a project, add an entry to `featuredProjects` or `moreProjects` in `src/data/site.ts` and put its image in `public/projects/`.

## Deploy

Every push to `main` runs [`deploy.yml`](.github/workflows/deploy.yml): lint, `next build` (a static export to `out/`), then publish to GitHub Pages. Pages has to be set to deploy from **GitHub Actions** under Settings → Pages → Source.
