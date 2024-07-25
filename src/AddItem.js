import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  const useref=useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
            type="text"
            autoFocus
            required
            ref={useref}
            id='addItem' 
            placeholder='Add Item'
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
        />
        <button type='submit' onClick={()=>useref.current.focus()}>
            <FaPlus/>
        </button>

    </form>
  )
}

export default AddItem