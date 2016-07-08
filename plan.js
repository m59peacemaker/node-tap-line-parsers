const plan = line => {
  const matches = line.match(/^(\d+)\.\.(\d+)( # (.+))?/)
  const result = {
    start: Number(matches[1]),
    end: Number(matches[2])
  }
  if (matches[3]) {
    result.skip = matches[4] || true
  }
  return result
}

module.exports = plan
