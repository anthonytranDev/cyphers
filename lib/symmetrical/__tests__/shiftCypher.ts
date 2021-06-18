import { encode } from '../shiftCypher'

describe('encode', () => {
  it.each([
    [0, 'rick', 'rick'],
    [1, 'rick', 'sjdl'],
    [6, 'rick', 'xoiq'],
    [6, 'rick and morty', 'xoiq gtj suxze'],
  ])(
    'encodes string value "%s" with a shift value "%s" to give string "%s"',
    (shiftValue, message, cypherText) => {
      const text = encode(message, shiftValue)

      expect(text).toEqual(cypherText)
    }
  )
})
