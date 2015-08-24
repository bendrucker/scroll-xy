'use strict'

var test = require('tape')
var window = require('global/window')
var position = require('./')

test('window', function (t) {
  window.scrollX = 0
  window.scrollY = 1
  t.deepEqual(position(window), {
    x: 0,
    y: 1
  })
  t.deepEqual(position(), {
    x: 0,
    y: 1
  })
  t.end()
})

test('element', function (t) {
  var element = {
    scrollLeft: 2,
    scrollTop: 3
  }
  t.deepEqual(position(element), {
    x: 2,
    y: 3
  })
  t.end()
})
