const version = part => {
  const matches = part.match(/TAP version (\S+)/)
  return {version: matches[1]}
}

module.exports = version
