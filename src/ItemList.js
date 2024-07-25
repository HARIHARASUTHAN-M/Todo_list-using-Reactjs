import React from 'react'
import Item from './Item'

const ItemList = ({items,handleChange,handleClick}) => {
  return (
    <ul>
          {items.map((i)=>(
            <Item
              key={i.id}
                i={i}
                handleChange={handleChange}
                handleClick={handleClick}
            />
          ))}
    </ul>
  )
}

export default ItemList