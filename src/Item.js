import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Item = ({i,handleChange,handleClick}) => {
  return (
    <li className='item'>
        <input type="checkbox" onChange={()=>handleChange(i.id)} checked = {i.checked} />
        <label>{i.item}</label>
        <FaTrashAlt role='button'onClick={()=>handleClick(i.id)}/>
    </li>
  )
}

export default Item