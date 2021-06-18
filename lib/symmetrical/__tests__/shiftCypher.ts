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
