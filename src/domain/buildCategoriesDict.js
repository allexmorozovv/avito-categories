// const categoriesCopy = structuredClone(categories) //  [...categories] or
// x = categories.map(el => ({...el}))

// categoriesDict.topLevelIds = categoriesCopy.filter(el => el.parentId === undefined)

// const categories = [{
//   id: 1,
//   name: "name1",
//   url: "url1",
// },
// {
//   id: 2,
//   name: "name2",
//   url: "url2",
//   parentId: 1
// },
// {
//   id: 3,
//   name: "name3",
//   url: "url3",
//   parentId: 1
// },
// {
//   id: 4,
//   name: "name4",
//   url: "url4",
//   parentId: 2
// }
// ]

// export const buildCategoriesDict = (categories) => {
//   const categoriesDict = {}
//   for (const category of categories) {
//     const categoryObj = {
//       name: category.name,
//       url: category.url,
//       childrenIds: []
//     }
//     if(category.parentId !== undefined) {
//       categoryObj.parentId = String(category.parentId)
//     }

//     // parentId ?String(category.parentId):'',
    
//     categoriesDict[category.id] = categoryObj
//     // category.childrenIds = []
//     // for(const child of categories) {
//     //   if(child.parentId === category.id){
//     //     category.childrenIds.push(child.id)
//     //   }
//     // }
//   }
//   for (const child of categories) {
//     // console.log(child);
//     // if(child.parentId === categoriesDict[parentId]) {
//     //   category.childrenIds.push(child.id)
//     // }
//     if (child.parentId) {
//       categoriesDict[child.parentId].childrenIds.push(String(child.id))
//     }
//   }

//   return categoriesDict
// }

export const buildCategoriesDict = (categories) => {
  const categoriesDict = {}
  for (const category of categories) {
    const categoryObj = {
      name: category.name,
      url: category.url,
      childrenIds: []
    }
    if(category.parentId !== undefined) {
      categoryObj.parentId = String(category.parentId)
    }
    categoriesDict[category.id] = categoryObj
  }
  
  for (const child of categories) {
    if (child.parentId) {
      categoriesDict[child.parentId].childrenIds.push(String(child.id))
    }
  }
  return categoriesDict
}