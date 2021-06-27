import createCharCodeList from '../utils/createCharCodeList'
import { ALPHABET } from '../constants'

const createShiftCharCodeList = (shiftPosition: number) => {
  const pos = shiftPosition % 26
  const shiftedChar = [...ALPHABET.slice(pos, 26), ...ALPHABET.slice(0, pos)]
  return createCharCodeList(shiftedChar)
}

const createCypher = (shiftPosition: number) => {
  const alphabetCharCodes = createCharCodeList(ALPHABET)
  const shiftCharCodes = createShiftCharCodeList(shiftPosition)

  const cypher: Record<string, number> = {}

  for (const [key, value] of Object.entries(alphabetCharCodes)) {
    cypher[value] = shiftCharCodes[key]
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
