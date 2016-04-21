# scroll-xy [![Build Status](https://travis-ci.org/bendrucker/scroll-xy.svg?branch=master)](https://travis-ci.org/bendrucker/scroll-xy)

> Get the current x/y scroll position and scroll maximum


## Install

```
$ npm install --save scroll-xy
```


## Usage

```js
var scrollPosition = require('scroll-xy')

scrollPosition()
//=> {x, y, maximum: {x, y}} for window

scrollPosition(element)
//=> {x, y, maximum: {x, y}} for element
```

## API

#### `scrollPosition(element)` -> `object`

Returns an `{x, y, maximum: {x, y}}` object where values are integers.

##### element

Type: `HTMLElement`
Default: `window`

A DOM element, defaulting to `window` which has special handling.

## License

MIT © [Ben Drucker](http://bendrucker.me)
