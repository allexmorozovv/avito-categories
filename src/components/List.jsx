import React from 'react'
import ListItem from './ListItem';

function List({ids,list,selectedIds,setSelectedIds, checkedUncheckedBox}) {

  return (
    <div className='list'>
      <ul>
        {ids.map(id => {
          return (
            <ListItem 
              key={id}
              elId={id} 
              list={list}  
              selectedIds={selectedIds} 
              setSelectedIds={setSelectedIds} 
              checkedUncheckedBox={checkedUncheckedBox}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default List