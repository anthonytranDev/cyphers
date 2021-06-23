import createCharCodeList from '../createCharCodeList'

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
