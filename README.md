# Built with React and Webpack
The page is live [here](https://ashiq-r31.github.io/lunch-tyme/).

Note: the Google Maps API key may have expired (map may display: cannot open maps on this page), feel free to use your own!

# Information

- Static HTML entry is in `static/index.html`
- React entry point is `src/App.jsx`.
- Built JS output file is `static/js/bundle.js`
- Builds can be configured in `webpack.config.js`

## Build

* Run `yarn build` for a single build
* Run `yarn build:prod` for a minified build (minified by `UglifyJs` provided by `webpack`)
* Run `yarn start`/`yarn build:watch` for a continuous build while editing files
