import { invertObject } from '../invertObject'

describe('invertObject', () => {
  it.each([
    [{ a: 1 }, { 1: 'a' }],
    [
      { a: 1, b: 2 },
      { 1: 'a', 2: 'b' },
    ],
    [
      { a: 'z', b: 'y' },
      { z: 'a', y: 'b' },
    ],
  ])(
    'swaps keys and values of object %s to give %s',
    (object, invertedObject) => {
      expect(invertObject(object)).toEqual(invertedObject)
    }
  )
})
