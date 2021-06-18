const invertObject = (object: Record<string, number>) => {
  var createdObject = {}
  for (var key in object) {
    createdObject[object[key]] = key
  }
  return createdObject
}

export default invertObject
