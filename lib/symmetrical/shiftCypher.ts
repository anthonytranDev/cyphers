// Shift cypher

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

const createCharCodeList = (charList: string[]) =>
  charList.map((e) => e.charCodeAt(0))

const createShiftChars = (shiftPosition: number) => {
  const pos = shiftPosition % 26
  return [...alphabet.slice(pos, 26), ...alphabet.slice(0, pos)]
}

const createCypher = (shiftPosition: number) => {
  const alphabetCharCodes = createCharCodes(alphabet)
  const shiftCharCodes = createCharCodes(createShiftChars(shiftPosition))

  const alphabetCodes = { ...alphabetCharCodes }
  const emptyCypher: { [k: string]: any } = {}

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

export { encode }
