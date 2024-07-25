import React from 'react'
import ItemList from './ItemList'

const Content = ({items,handleChange,handleClick}) => {
  return (
    <>
      {(items.length>0&&items)?(
        <ItemList
          items={items}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      ):(
        <p>List is Empty</p>
      )}
    </>
  )
}

export default Content