# tap-line-parsers

Functions for each type of TAP line that parse lines into objects.

## Install

```sh
npm install tap-line-parsers
```

## Usage

```js
const parsers = require('tap-line-parsers')
const parsePlan = require('tap-line-parsers/plan')

parse.version('TAP version 13') // -> {version: '13'}
parsePlan('TAP version 13')  // -> {version: '13'}
```

## API

See tests for sample input/output.

### `version(line)`
### `plan(line)`
### `test(line)`
### `bailout(line)`
### `diagnostic(line)`
