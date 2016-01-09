var _ = require('lodash')

module.exports = Collision

function Collision () {}

Collision.prototype.handle = function (a, b, delta) {
  var self = this

  var results = a.intersects(b)

  if (results) {
    var ind = _.indexOf(results, _.max(results, function (i) { return i.response.overlap }))
    var overlap = results[ind].response.overlapV
    overlap = [overlap.x, overlap.y]
    return self.correct(delta, overlap)
  }

  return false
}

Collision.prototype.correct = function (delta, overlap) {
  return {
    translation: [
      -0.2 * delta.translation[0] + 0.5 * overlap[0],
      -0.2 * delta.translation[1] + 0.5 * overlap[1]
    ]
  }
}
