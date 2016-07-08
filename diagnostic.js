const diagnostic = line => {
  const matches = line.match(/^# (.+)/)
  const result = {message: ''}
  if (matches) {
    result.message = matches[1]
  }
  return result
}

module.exports = diagnostic
