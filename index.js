'use strict'

var window = require('global/window')
var document = require('global/document')

module.exports = function scrollPosition (element) {
  if (!element || element === window) {
    return {
      x: window.scrollX,
      y: window.scrollY,
      maximumX: document.documentElement.scrollWidth - window.innerWidth,
      maximumY: document.documentElement.scrollHeight - window.innerHeight
    }
  }

  return {
    x: element.scrollLeft,
    y: element.scrollTop,
    maximumX: element.scrollWidth - element.offsetWidth,
    maximumY: element.scrollHeight - element.offsetHeight
  }
}
