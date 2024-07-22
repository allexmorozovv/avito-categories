import {
  buildCategoriesDict
} from "./buildCategoriesDict";

//     1
//   /   \
//  2     3
//  |
//  4

const categories = [{
    id: 1,
    name: "name1",
    url: "url1",
  },
  {
    id: 2,
    name: "name2",
    url: "url2",
    parentId: 1
  },
  {
    id: 3,
    name: "name3",
    url: "url3",
    parentId: 1
  },
  {
    id: 4,
    name: "name4",
    url: "url4",
    parentId: 2
  }
]

const expectedResult = {
  "1": {
    name: "name1",
    url: "url1",
    childrenIds: ["2", "3"]
  },
  "2": {
    name: "name2",
    url: "url2",
    parentId: "1",
    childrenIds: ["4"]
  },
  "3": {
    name: "name3",
    url: "url3",
    parentId: "1",
    childrenIds: []
  },
  "4": {
   
    name: "name4",
    url: "url4",
    parentId: "2",
    childrenIds: []
  }
}

describe("buildCategoriesDict", () => {
  test("build List", ()=> {
    expect(buildCategoriesDict(categories)).toEqual(expectedResult)
  })
})