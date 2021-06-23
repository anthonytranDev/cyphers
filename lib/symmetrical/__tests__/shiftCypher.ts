import {
  encode,
  createCharCodeList,
  createShiftCharCodeList,
  createCypher,
} from '../shiftCypher'

describe('createCharCodeList', () => {
  it.each([
    [['a'], [97]],
    [
      ['a', 'b'],
      [97, 98],
    ],
    [
      ['a', ' ', 'b'],
      [97, 32, 98],
    ],
  ])(
    'converts character array "%s" to char code array "%s"',
    (charArray, charCodeArray) => {
      expect(createCharCodeList(charArray)).toEqual(charCodeArray)
    }
  )
})

describe('createShiftCharCodeList', () => {
  it.each([
    [
      0,
      [
        97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111,
        112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
      ],
    ],
    [
      3,
      [
        100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113,
        114, 115, 116, 117, 118, 119, 120, 121, 122, 97, 98, 99,
      ],
    ],
    [
      25,
      [
        122, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
        111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
      ],
    ],
    [
      26,
      [
        97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111,
        112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
      ],
    ],
    [
      27,
      [
        98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
        113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 97,
      ],
    ],
  ])(
    'converts character array "%s" to char code array "%s"',
    (position, array) => {
      expect(createShiftCharCodeList(position)).toEqual(array)
    }
  )
})

describe('createCypher', () => {
  it.each([
    [
      {
        '97': 97,
        '98': 98,
        '99': 99,
        '100': 100,
        '101': 101,
        '102': 102,
        '103': 103,
        '104': 104,
        '105': 105,
        '106': 106,
        '107': 107,
        '108': 108,
        '109': 109,
        '110': 110,
        '111': 111,
        '112': 112,
        '113': 113,
        '114': 114,
        '115': 115,
        '116': 116,
        '117': 117,
        '118': 118,
        '119': 119,
        '120': 120,
        '121': 121,
        '122': 122,
      },
      0,
    ],
    [
      {
        '97': 98,
        '98': 99,
        '99': 100,
        '100': 101,
        '101': 102,
        '102': 103,
        '103': 104,
        '104': 105,
        '105': 106,
        '106': 107,
        '107': 108,
        '108': 109,
        '109': 110,
        '110': 111,
        '111': 112,
        '112': 113,
        '113': 114,
        '114': 115,
        '115': 116,
        '116': 117,
        '117': 118,
        '118': 119,
        '119': 120,
        '120': 121,
        '121': 122,
        '122': 97,
      },
      1,
    ],
    [
      {
        '97': 103,
        '98': 104,
        '99': 105,
        '100': 106,
        '101': 107,
        '102': 108,
        '103': 109,
        '104': 110,
        '105': 111,
        '106': 112,
        '107': 113,
        '108': 114,
        '109': 115,
        '110': 116,
        '111': 117,
        '112': 118,
        '113': 119,
        '114': 120,
        '115': 121,
        '116': 122,
        '117': 97,
        '118': 98,
        '119': 99,
        '120': 100,
        '121': 101,
        '122': 102,
      },
      6,
    ],
  ])('creates the cypher "%s" ', (cypherCharCode, position) => {
    expect(createCypher(position)).toEqual(cypherCharCode)
  })
})

describe('encode', () => {
  it.each([
    ['rick', 'rick', 0],
    ['rick', 'sjdl', 1],
    ['rick', 'xoiq', 6],
    ['rick and morty', 'xoiq gtj suxze', 6],
  ])(
    'encodes the message "%s" to give cypher text "%s" with shift key "%s"',
    (message, cypherText, shiftValue) => {
      const text = encode(message, shiftValue)

      expect(text).toEqual(cypherText)
    }
  )

  it.each([
    ['rick', 'rick', 0],
    ['sjdl', 'rick', 1],
    ['xoiq', 'rick', 6],
    ['xoiq gtj suxze', 'rick and morty', 6],
  ])(
    'decodes the cypher text "%s" to give message "%s" with shift key "%s"',
    (cypherText, message, key) => {
      const text = encode(cypherText, key, true)

      expect(text).toEqual(message)
    }
  )
})
