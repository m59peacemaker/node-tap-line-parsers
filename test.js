const isOk = (line) => {
  const regex = /^((not )?ok)/
  const matches = line.match(regex)
  return matches[1] === 'ok'
}

const getPoint = (line) => {
  const regex = /^(not )?ok (\d+) ?/
  const matches = line.match(regex)
  if (matches && matches[2]) {
    return Number(matches[2])
  }
}

const getDescription = (line) => {
  line = line.split(/ # \w+/)[0]
  const regex = /^(not )?ok( \d+)?( (.+))?/
  const matches = line.match(regex)
  if (matches) {
    return matches[4]
  }
}

const getDirective = line => {
  const matches = line.match(/ # (\w+)( (.+))?/)
  if (matches) {
    return {
      name: matches[1].toLowerCase(),
      message: matches[3]
    }
  }
}

const parseTest = line => {
  const result = {
    ok: isOk(line)
  }
  ;[
    ['point', getPoint(line)],
    ['description', getDescription(line)]
  ].forEach(a => {
    const key = a[0]
    const value = a[1]
    if (value !== undefined) {
      result[key] = value
    }
  })
  const directive = getDirective(line)
  if (directive !== undefined) {
    result[directive.name] = directive.message || true
  }
  return result
}

module.exports = parseTest
