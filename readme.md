# pretty-version-diff [![CircleCI](https://img.shields.io/circleci/project/github/vladgolubev/pretty-version-diff.svg)](https://circleci.com/gh/vladgolubev/pretty-version-diff) ![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

> Print semver version diff like sindresorhus/np CLI

Credits to: [sindresorhus/np](https://github.com/sindresorhus/np/blob/master/lib/ui.js#L9)

## Install

```
$ yarn add pretty-version-diff
```

## Usage

```js
const prettyVersionDiff = require('pretty-version-diff');

prettyVersionDiff('unicorns');
//=> 'unicorns & rainbows'
```

## API

### prettyVersionDiff(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.

## License

MIT © [Vlad Holubiev](http://vladholubiev.com)
