import React, {useEffect, useState} from 'react'
import List from './List';

function ListItem({elId, list, selectedIds,setSelectedIds, checkedUncheckedBox}) {

  const {id, url, name, childrenIds} = list[elId]
  const [open, setOpen] = useState(false)

  const img_class_name = open ? 'img-open' : 'img'
  const list_item_class_name = childrenIds.length === 0 ?'list-item-empty': 'list-1tem'

  const handleChange = () => {
    checkedUncheckedBox(elId)
  }


const isChecked = selectedIds.includes(elId) ? true : false

  return (
    <div className='list-item'>
      <li className={list_item_class_name}>
        {childrenIds.length>0 && <button className='button'  onClick={() => setOpen(!open)}><img className={img_class_name} src="./arrow_2.png"/></button>} 
        <input 
          type="checkbox" 
          id={elId}
          value={elId}
          name={name}
          checked={isChecked} 
          onChange={handleChange}
          
           />
          {/* <Checkbox/> */}
        <a  href={'#'}>{name}</a>
        {open && childrenIds.length > 0 &&  <List 
                                             ids={childrenIds} 
                                             list={list}  
                                             selectedIds={selectedIds} 
                                             setSelectedIds={setSelectedIds} 
                                             checkedUncheckedBox={checkedUncheckedBox}
                                            />}
      </li>
    </div>
  )
}

export default ListItem