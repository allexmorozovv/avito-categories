 export function findDescendants(catalog, id) {
  const result = []
  catalog[id].childrenIds.forEach(child => {
    result.push(child)
    const arr = findDescendants(catalog, child)
    arr.forEach(el=> result.push(el))
  })
  return result
}

