
//         1✓
//      /     \
//     2+      3✓
//          /  |  \ 
//         4+  5+  6✓
//
//

// const catalog = {
//   "1":{name:"Электроника", childrenIds:["2", "3"]},
//   "2":{name:"Телевизоры", childrenIds:[], parentId:"1"},
//   "3":{name:"Телефоны", childrenIds:["4", "5", "6"], parentId:"1"},
//   "4":{name:"Самсунг", childrenIds:[], parentId:"3"},
//   "5":{name:"Айфон", childrenIds:[], parentId:"3"},
//   "6":{name:"Сяоми", childrenIds:[], parentId:"3"},
// };
export const findAncestors = (catalog, arrayIds, id) => {
  const result = []
  const parentId = catalog[id].parentId
  
  if(parentId === undefined) {
    return []
  }

  const parentChildrenIds = catalog[parentId].childrenIds.filter(el => el !== id)

  if(parentChildrenIds.every(el => arrayIds.includes(el))) {
    const ancertorIds = findAncestors(catalog, arrayIds, parentId)
    result.push(...ancertorIds, catalog[id].parentId)
  }
  return result
}

// console.log(findAncertors(catalog, ["2","4","5"], "1"));
// console.log(findAncestors(catalog, ["2","4","5"], "6")); //  [1, 3]
// console.log(findAncertors(catalog, ["4","5"], "6")); //  [ 3]
// console.log(findAncertors(catalog, ["2","3"], "3")); //  [ 3]
// console.log(findAncertors(catalog, ["5"], "6")); // []