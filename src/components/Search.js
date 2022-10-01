import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({handleSearchText}) => {
  return (
    <div className='search'>
        <MdSearch className='search-icons' size="1.3rem"/>
        <input
        onChange={(e)=>handleSearchText(e.target.value)} 
        type="text" placeholder='search'/>
    </div>
  )
}

export default Search