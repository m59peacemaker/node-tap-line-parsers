const test = require('tape')
const parsers = require('../')

const data = {
  version: [
    [
      'TAP version 13',
      {version: '13'}
    ],
    [
      'TAP version 1.5b',
      {version: '1.5b'}
    ]
  ],
  plan: [
    [
      '1..5',
      {start: 1, end: 5}
    ],
    [
      '1..0 # Skipped: WWW::Mechanize not installed',
      {start: 1, end: 0, skip: 'Skipped: WWW::Mechanize not installed'}
    ]
  ],
  test: [
    [
      'ok',
      {ok: true}
    ],
    [
      'ok 1',
      {ok: true, point: 1}
    ],
    [
      'not ok 1',
      {ok: false, point: 1}
    ],
    [
      'not ok cuz',
      {ok: false, description: 'cuz'}
    ],
    [
      'ok 5 should be truthy',
      {ok: true, point: 5, description: 'should be truthy'}
    ],
    [
      'ok 5 # skip',
      {ok: true, point: 5, skip: true}
    ],
    [
      'ok 5 foo # skip bar',
      {ok: true, point: 5, description: 'foo', skip: 'bar'}
    ],
    [
      'ok 5 # skip bro',
      {ok: true, point: 5, skip: 'bro'}
    ],
    [
      'ok 5 # SKIP skip bro!',
      {ok: true, point: 5, skip: 'skip bro!'}
    ],
    [
      'ok 1 # TODO',
      {ok: true, point: 1, todo: true}
    ],
    [
      'ok foo # TODO the things',
      {ok: true, description: 'foo', todo: 'the things'}
    ],
    [
      'ok (unnamed assert)',
      {ok: true, description: '(unnamed assert)'}
    ],
    [
      'not ok 28 (unnamed assert)',
      {ok: false, point: 28, description: '(unnamed assert)'}
    ]
  ],
  bailout: [
    [
      'Bail out!',
      {reason: ''}
    ],
    [
      'Bail out! hey',
      {reason: 'hey'}
    ],
    [
      'Bail out! Howdy ho! Sup.',
      {reason: 'Howdy ho! Sup.'}
    ],
  ],
  diagnostic: [
    [
      '# ',
      {message: ''}
    ],
    [
      '# like a fool',
      {message: 'like a fool'}
    ]
  ]
}

Object.keys(data).forEach(k => {
  const sets = data[k]
  sets.forEach(set => {
    const input = set[0]
    test(`parse ${k}: ${input}`, t => {
      t.plan(1)
      t.deepEqual(parsers[k](input), set[1])
    })
  })
})
