# scroll-xy [![Build Status](https://travis-ci.org/bendrucker/scroll-xy.svg?branch=master)](https://travis-ci.org/bendrucker/scroll-xy)

> Get the current x/y scroll position


## Install

```
$ npm install --save scroll-xy
```


## Usage

```js
var scrollPosition = require('scroll-xy')

scrollPosition()
//=> {x, y} for window

scrollPosition(element)
//=> {x, y} for element
```

## API

#### `scrollPosition(element)` -> `object`

Returns an `{x, y}` coordinates object where coordinates are integers.

##### element

Type: `HTMLElement`  
Default: `window`

A DOM element, defaulting to `window` which has special handling.

##### options

###### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Ben Drucker](http://bendrucker.me)
