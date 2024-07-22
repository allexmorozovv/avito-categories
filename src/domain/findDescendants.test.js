import { findDescendants } from "./findDescendants";

//         1
//      /     \
//     2       3
//          /  |  \ 
//         4   5   6
//
//

const catalog = {
  "1":{name:"Электрроника", childrenIds:["2", "3"]},
  "2":{name:"Телевизоры", childrenIds:[], parentId:"1"},
  "3":{name:"Телефоны", childrenIds:["4", "5", "6"], parentId:"1"},
  "4":{name:"Самсунг", childrenIds:[], parentId:"3"},
  "5":{name:"Айфон", childrenIds:[], parentId:"3"},
  "6":{name:"Сяоми", childrenIds:[], parentId:"3"},
};

describe("findDescendants", () => {
  test("descendants id === 1 ", ()=> {
    expect(findDescendants(catalog, "1")).toEqual(["2", "3", "4", "5", "6"])
  })
  
  test("descendants id === 2 ", ()=> {
    expect(findDescendants(catalog, "2")).toEqual([])
  })

  test("descendants id === 3 ", ()=> {
    expect(findDescendants(catalog, "3")).toEqual(["4", "5", "6"])
  })
})


// console.log(descendants(catalog, "1"));
// // ["2", "3", "4", "5"]

// console.log(descendants(catalog, "2"));
// // ["3", "4"]

// console.log(descendants(catalog, "3"));
// // []
