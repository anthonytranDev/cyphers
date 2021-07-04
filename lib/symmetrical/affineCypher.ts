import { invertObject } from '../utils/invertObject'
import { ALPHABET } from '../constants'

type Multiple = 1 | 3 | 5 | 7 | 9 | 11 | 15 | 17 | 19 | 21 | 23 | 25
type SelectedInteger =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
type Key = [multiplier: Multiple, adder: SelectedInteger]

const calcAffineInteger =
  ([multiplier, adder]: Key) =>
  (int: number): number =>
    (multiplier * int + adder) % 26

const createCypher = (affine: Key) => {
  const alphabetCharPos = ALPHABET.map((_, i) => i)
  const affineIntegerList: number[] = alphabetCharPos.map(
    calcAffineInteger(affine)
  )

  const cypher = {}
  for (const [index, value] of Object.entries({ ...affineIntegerList })) {
    const key = ALPHABET[value as number]
    cypher[key] = ALPHABET[index]
  }

  return cypher
}

const encode = (text: string, affineKey: Key, decode: boolean = false) => {
  const cypher = decode
    ? invertObject(createCypher(affineKey))
    : createCypher(affineKey)

  const message = text
    .split('')
    .map((char) => (cypher[char] ? cypher[char] : char))
    .join('')

  return message
}

export { encode, createCypher }
export type { Key }
