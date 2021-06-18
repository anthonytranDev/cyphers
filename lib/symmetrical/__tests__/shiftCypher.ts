import { encode, decode } from '../shiftCypher'

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
