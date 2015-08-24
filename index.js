'use strict'

var window = require('global/window')

module.exports = function scrollPosition (element) {
  if (!element || element === window) {
    return {
      x: window.scrollX,
      y: window.scrollY
    }
  }

  return {
    x: element.scrollLeft,
    y: element.scrollTop
  }
}
