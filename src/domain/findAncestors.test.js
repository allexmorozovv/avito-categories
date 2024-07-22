import { findAncestors } from "./findAncestors";

//         1✓
//      /     \
//     2+      3✓
//          /  |  \ 
//         4+  5+  6✓
//
//

const catalog = {
  "1":{name:"Электроника", childrenIds:["2", "3"]},
  "2":{name:"Телевизоры", childrenIds:[], parentId:"1"},
  "3":{name:"Телефоны", childrenIds:["4", "5", "6"], parentId:"1"},
  "4":{name:"Самсунг", childrenIds:[], parentId:"3"},
  "5":{name:"Айфон", childrenIds:[], parentId:"3"},
  "6":{name:"Сяоми", childrenIds:[], parentId:"3"},
};


describe("findAncestors", () => {
  test("ancertors id === 1 ", ()=> {
    expect(findAncestors(catalog,["2","4","5"], "1")).toEqual([]) 
  })
  
  test("ancertors id === 6 ", ()=> {

    expect(findAncestors(catalog, ["2","4","5"], "6")).toEqual(["1", "3"]) //  [1, 3]
  })

  test("ancertors id === 6 ", ()=> {
    expect(findAncestors(catalog, ["4","5"], "6")).toEqual(["3"]) // ["3"]
  })
  test("ancertors id === 6 ", ()=> {
    expect(findAncestors(catalog, ["5"], "6")).toEqual([])
  })
})
