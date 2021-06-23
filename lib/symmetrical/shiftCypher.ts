const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

const createCharCodeList = (charList: string[]) =>
  charList.map((e) => e.charCodeAt(0))

const createShiftCharCodeList = (shiftPosition: number) => {
  const pos = shiftPosition % 26
  const shiftedChar = [...alphabet.slice(pos, 26), ...alphabet.slice(0, pos)]
  return createCharCodeList(shiftedChar)
}

const createCypher = (shiftPosition: number) => {
  const alphabetCharCodes = createCharCodeList(alphabet)
  const shiftCharCodes = createShiftCharCodeList(shiftPosition)

  const cypher: Record<string, number> = {}

  for (const key in { ...alphabetCharCodes }) {
    const alphabetCharCode = alphabetCharCodes[key]
    cypher[alphabetCharCode] = shiftCharCodes[key]
  }

  return cypher
}

const encode = (text: string, shiftKey: number, reverse?: boolean) => {
  const key = reverse ? 26 - shiftKey : shiftKey

  const cypher = createCypher(key)
  const textCharCode = createCharCodeList(text.split(''))

  const message = textCharCode
    .map((charCode) =>
      String.fromCharCode(cypher[charCode] ? cypher[charCode] : charCode)
    )
    .join('')

  return message
}

export { encode, createCharCodeList, createShiftCharCodeList, createCypher }
