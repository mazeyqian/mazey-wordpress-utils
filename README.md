# mazey-wordpress-utils

[![NPM version][npm-image]][npm-url]
[![l][l-image]][l-url]

[npm-image]: https://img.shields.io/npm/v/mazey-wordpress-utils
[npm-url]: https://npmjs.org/package/mazey-wordpress-utils
[l-image]: https://img.shields.io/npm/l/mazey-wordpress-utils
[l-url]: https://github.com/mazeyqian/mazey-wordpress-utils

Wordpress utilities.

## Install

You can get mazey-wordpress-utils via [npm](https://www.npmjs.com/package/mazey-wordpress-utils).

```
npm install mazey-wordpress-utils --save
```

## Usage

Hide Sidebar.

```
import { hideSidebar } from 'mazey-wordpress-utils';

hideSidebar({
  urlContainList: [ 'hide_sidebar' ], // It's a list for String in URL, `[ 'hide_sidebar' ]` is the default value.
});
```

Hide Header.

```
import { hideHeaderInTOC } from 'mazey-wordpress-utils';

hideHeaderInTOC({
  urlContainList: [ 'str1' ], // It's a list for String in URL, `[ 'urlContainListDefaultValue' ]` is the default value.
});
```

## Develop

```
# dev
npm run dev

# build
npm run build

# documentation
npm run docs
```
