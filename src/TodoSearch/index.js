import React from 'react';
import './TodoSearch.css';
import { AiOutlineSearch} from 'react-icons/ai';

function TodoSearch({ setSearchValue, loading }) {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target?.value);
  }

  return (
    <div>
      <input className='TodoSearch' placeholder="Search" onChange={onSearchValueChange} disabled={loading}/>
      <AiOutlineSearch className='TodoSearch-icon'/>
    </div>
  )
}

export { TodoSearch };