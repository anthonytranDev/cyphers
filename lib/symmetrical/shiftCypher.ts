// Shift cypher

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

  const alphabetCodes = { ...alphabetCharCodes }
  const emptyCypher: Record<string, number> = {}

  for (const key in alphabetCodes) {
    emptyCypher[alphabetCharCodes[key]] = shiftCharCodes[key]
  }

  return emptyCypher
}

const encode = (message: string, shiftPosition: number) => {
  const cypher = createCypher(shiftPosition)
  const cypherText = message
    .split('')
    .map((elem) => {
      let char = elem
      const charCode = elem.charCodeAt(0)
      if (cypher[charCode]) {
        char = String.fromCharCode(cypher[charCode])
      }
      return char
    })
    .join('')

  return cypherText
}

const decode = (cypherText: string, shiftKey: number) => {
  const reverseShift = 26 - shiftKey
  const cypher = createCypher(reverseShift)
  const cypherTextCharCode = createCharCodeList(cypherText.split(''))
  const message = cypherTextCharCode
    .map((charCode) => {
      let char = charCode

      if (cypher[charCode]) {
        char = cypher[charCode]
      }

      return String.fromCharCode(char)
    })
    .join('')

  return message
}

export {
  encode,
  decode,
  createCharCodeList,
  createShiftCharCodeList,
  createCypher,
}
