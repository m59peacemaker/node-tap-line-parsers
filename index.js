const parsers = [
  'version',
  'plan',
  'test',
  'bailout',
  'diagnostic'
].reduce((acc, type) => {
  acc[type] = require('./' + type)
  return acc
}, {})

module.exports = parsers
