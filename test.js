'use strict'

var test = require('tape')
var window = require('global/window')
var document = require('global/document')
var position = require('./')

test('window', function (t) {
  window.scrollX = 0
  window.scrollY = 1
  window.innerWidth = 80
  window.innerHeight = 150

  document.documentElement.scrollWidth = 100
  document.documentElement.scrollHeight = 200

  t.deepEqual(position(window), {
    x: 0,
    y: 1,
    maximumX: 20,
    maximumY: 50
  })
  t.deepEqual(position(), {
    x: 0,
    y: 1,
    maximumX: 20,
    maximumY: 50
  })
  t.end()
})

test('element', function (t) {
  var element = {
    scrollLeft: 2,
    scrollTop: 3,
    offsetWidth: 20,
    offsetHeight: 80,
    scrollWidth: 50,
    scrollHeight: 100

  }
  t.deepEqual(position(element), {
    x: 2,
    y: 3,
    maximumX: 30,
    maximumY: 20
  })
  t.end()
})
