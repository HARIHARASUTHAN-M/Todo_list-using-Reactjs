import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()} className='searchForm'>
        <label htmlFor="search">Search Item</label>
        <input 
            type="text"
            id='search'
            placeholder='Search Item' 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem