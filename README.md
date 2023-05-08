# Mazey Wordpress Utils

[![NPM version][npm-image]][npm-url]
[![l][l-image]][l-url]

[npm-image]: https://img.shields.io/npm/v/mazey-wordpress-utils
[npm-url]: https://npmjs.org/package/mazey-wordpress-utils
[l-image]: https://img.shields.io/npm/l/mazey-wordpress-utils
[l-url]: https://github.com/mazeyqian/mazey-wordpress-utils

WordPress utilities.

## Install

You can get mazey-wordpress-utils via [npm](https://www.npmjs.com/package/mazey-wordpress-utils).

```
npm install mazey-wordpress-utils --save
```

## Usage

### hideSidebar

```
import { hideSidebar } from 'mazey-wordpress-utils';

hideSidebar({
  urlContainList: [ 'hide_sidebar' ], // It's a list for String in URL, `[ 'hide_sidebar' ]` is the default value.
});
```

### hideHeaderInTOC

The page will hide Header when it meets one of these two conditions:

- Use WordPress Plugin [Easy Table of Contents](https://wordpress.org/plugins/easy-table-of-contents/) and open it in this page.
- The page's URL is matched with one of the `urlContainList`.

```
import { hideHeaderInTOC } from 'mazey-wordpress-utils';

hideHeaderInTOC({
  urlContainList: [ 'str1' ], // It's a list for String in URL, `[ 'urlContainListDefaultValue' ]` is the default value.
});
```

### setImgWidthHeight

Set img width and height.

```
import { setImgWidthHeight } from 'mazey-wordpress-utils';

// Call the function to set the width and height of all img elements
setImgWidthHeight();
```

## Contributing

```
# dev
npm run dev

# build
npm run build
```
