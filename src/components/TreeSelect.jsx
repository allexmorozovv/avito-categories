import React from 'react'
import List from "./List";
import { buildCategoriesDict } from "../domain/buildCategoriesDict";
import { findDescendants } from '../domain/findDescendants';
import { findAncestors } from '../domain/findAncestors';

function TreeSelect({ categories, selectedIds, setSelectedIds }) {
  const list = buildCategoriesDict(categories)
  const toplevelIds = categories.filter(el => el.parentId === undefined).map(el => String(el.id))

  const checkedUncheckedBox = (elId)=> {
    
    const descendants = findDescendants(list, elId)
    const ancestor = findAncestors(list, selectedIds, elId)
    setSelectedIds((selectedIds) => {
      if(!selectedIds.includes(elId)) {
        return  [...selectedIds, elId, ...descendants, ...ancestor]
      } else {
        const unChecked = [elId, ...descendants, ...ancestor]
        return selectedIds.filter(el => !unChecked.includes(el))
      }
    })
  }

  return (
    <div className="App">
      <List
        list={list} 
        ids={toplevelIds} 
        selectedIds={selectedIds} 
        setSelectedIds={setSelectedIds} 
        checkedUncheckedBox={checkedUncheckedBox}
      />
    </div>
  );
}

export default TreeSelect