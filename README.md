# AI Site

## About

A computer science project website containing an interactive infographic exploring the aspects of the advancement of artificial intelligence.

## Deploying

A `deploy` script defined in [`package.json`](package.json) will run `next build` to build the site, and will then output the assets to the [`out`](out) folder. This will then be committed to the `gh-pages` branch to be deployed to GitHub pages. The `assetPrefix` and `basePath` properties in [`next.config.js`](next.config.js) will also need to be changed accordingly. Font paths in [`globals.css`](styles/globals.css) will need to be manually changed.

## License

This open-source project is licensed under the [Unlicense](https://github.com/r1zyn/ai-site/blob/master/LICENSE) license.
