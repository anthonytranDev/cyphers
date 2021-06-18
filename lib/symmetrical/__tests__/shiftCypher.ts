import { encode, createCharCodeList } from '../shiftCypher'

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

describe('encode', () => {
  it.each([
    ['rick', 'rick', 0],
    ['rick', 'sjdl', 1],
    ['rick', 'xoiq', 6],
    ['rick and morty', 'xoiq gtj suxze', 6],
  ])(
    'encodes the message "%s" to give string "%s" with shift key "%s"',
    (message, cypherText, shiftValue) => {
      const text = encode(message, shiftValue)

      expect(text).toEqual(cypherText)
    }
  )
})
