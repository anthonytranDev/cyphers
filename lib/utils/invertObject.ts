const invertObject = (object: Record<string | number, string | number>) => {
  const invertedObject = {}

  for (const [key, value] of Object.entries(object)) {
    invertedObject[value] = key
  }

  return invertedObject
}

export { invertObject }
