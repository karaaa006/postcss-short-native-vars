# Installing PostCSS short-native-vars

[PostCSS short-native-vars] runs in all Node environments, with special instructions for:

| [Node](#node) | [PostCSS CLI](#postcss-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

Add [PostCSS short-native-vars] to your project:

```bash
npm install postcss-short-native-vars --save-dev
```

Use **PostCSS short-native-vars** to process your CSS:

```js
const postcssShortNativeVars = require('postcss-short-native-vars');

postcssShortNativeVars.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssShortNativeVars = require('postcss-short-native-vars');

postcss([
  postcssShortNativeVars(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli --save-dev
```

Use **PostCSS short-native-vars** in your `postcss.config.js` configuration file:

```js
const postcssShortNativeVars = require('postcss-short-native-vars');

module.exports = {
  plugins: [
    postcssShortNativeVars(/* pluginOptions */)
  ]
}
```

## Webpack

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader --save-dev
```

Use **PostCSS short-native-vars** in your Webpack configuration:

```js
const postcssShortNativeVars = require('postcss-short-native-vars');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: {
            ident: 'postcss',
            plugins: () => [
              postcssShortNativeVars(/* pluginOptions */)
            ]
          } }
        ]
      }
    ]
  }
}
```

## Create React App

Add [React App Rewired] and [React App Rewire PostCSS] to your project:

```bash
npm install react-app-rewired react-app-rewire-postcss --save-dev
```

Use **React App Rewire PostCSS** and **PostCSS short-native-vars** in your
`config-overrides.js` file:

```js
const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssShortNativeVars = require('postcss-short-native-vars');

module.exports = config => reactAppRewirePostcss(config, {
  plugins: () => [
    postcssShortNativeVars(/* pluginOptions */)
  ]
});
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss --save-dev
```

Use **PostCSS short-native-vars** in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssShortNativeVars = require('postcss-short-native-vars');

gulp.task('css', () => gulp.src('./src/*.css').pipe(
  postcss([
    postcssShortNativeVars(/* pluginOptions */)
  ])
).pipe(
  gulp.dest('.')
));
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss --save-dev
```

Use **PostCSS short-native-vars** in your Gruntfile:

```js
const postcssShortNativeVars = require('postcss-short-native-vars');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
       postcssShortNativeVars(/* pluginOptions */)
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS short-native-vars]: https://github.com/karaaa006/postcss-short-native-vars
[React App Rewire PostCSS]: https://github.com/csstools/react-app-rewire-postcss
[React App Rewired]: https://github.com/timarney/react-app-rewired
