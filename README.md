# PostCSS short-native-vars [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[PostCSS short-native-vars] lets you ... in CSS.

```pcss
:root {
	$test-size: 20px;
	$test-2-size: 10px;
	$test-color: #000;
	$test-3: orange;
	--var: 12px;
}

.test {
	$value: 123px;
	width: calc($test-size * 2 * $test-2-size);
	color: $test-color;
	height: $value;
}

.test-2 {
	width: $test-size;
	height: $test-size;
	color: red;
	background-color: $orange;
}
 

/* becomes */
 
:root {
	--test-size: 20px;
	--test-2-size: 10px;
	--test-color: #000;
	--test-3: orange;
	--var: 12px;
}

.test {
	--value: 123px;
	width: calc(var(--test-size) * 2 * var(--test-2-size));
	color: var(--test-color);
	height: var(--value);
}

.test-2 {
	width: var(--test-size);
	height: var(--test-size);
	color: red;
	background-color: var(--orange);
}
 
```

## Usage

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

**PostCSS short-native-vars** runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Options

...

[cli-img]: https://img.shields.io/travis/karaaa006/postcss-short-native-vars/master.svg
[cli-url]: https://travis-ci.org/karaaa006/postcss-short-native-vars
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-short-native-vars.svg
[npm-url]: https://www.npmjs.com/package/postcss-short-native-vars

[PostCSS]: https://github.com/postcss/postcss
[PostCSS short-native-vars]: https://github.com/karaaa006/postcss-short-native-vars
