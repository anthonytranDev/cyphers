import invertObject from '../invertObject'

describe('invertObject', () => {
  it.each([
    [
      { a: 1, b: 2 },
      { 1: 'a', 2: 'b' },
    ],
    [
      { a: 1, b: 2, c: 3 },
      { 1: 'a', 2: 'b', 3: 'c' },
    ],
  ])('%s is inverted to %s', (object, reversedObject) => {
    expect(invertObject(object)).toEqual(reversedObject)
  })
})
