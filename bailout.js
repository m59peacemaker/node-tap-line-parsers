const bailout = line => {
  const matches = line.match(/^Bail out! (.+)/)
  const result = {reason: ''}
  if (matches) {
    result.reason = matches[1]
  }
  return result
}

module.exports = bailout
