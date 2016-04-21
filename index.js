'use strict'

var window = require('global/window')
var document = require('global/document')

module.exports = function scrollPosition (element) {
  if (!element || element === window) {
    return {
      x: window.scrollX,
      y: window.scrollY,
      maximum: {
        x: document.documentElement.scrollWidth - window.innerWidth,
        y: document.documentElement.scrollHeight - window.innerHeight
      }
    }
  }

  return {
    x: element.scrollLeft,
    y: element.scrollTop,
    maximum: {
      x: element.scrollWidth - element.offsetWidth,
      y: element.scrollHeight - element.offsetHeight
    }
  }
}
