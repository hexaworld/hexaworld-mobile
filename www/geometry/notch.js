var Geometry = require('./geometry.js')

module.exports = function (opts) {
  opts = opts || {}

  var height = opts.size * Math.sqrt(3) / 2
  var outer = height + opts.extent
  var inner = height

  var o = opts.offset || 1
  var n = opts.count
  var i = opts.ind

  var start = 120 - (60 / n) * i - o / 2
  var end = 120 - (60 / n) * (i + 1) + o / 2

  return new Geometry({
    props: {
      fill: 'rgb(50,50,50)',
      stroke: 'white',
      thickness: 3,
      type: 'polygon'
    },

    points: [
      [inner / Math.tan(start * Math.PI / 180), -inner],
      [outer / Math.tan(start * Math.PI / 180), -outer],
      [outer / Math.tan(end * Math.PI / 180), -outer],
      [inner / Math.tan(end * Math.PI / 180), -inner]
    ],

    transform: {
      scale: 1,
      rotation: opts.rotation,
      translation: opts.translation
    }
  })
}
