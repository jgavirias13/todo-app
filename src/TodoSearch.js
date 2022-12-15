import React from 'react';
import './TodoSearch.css';
import { AiOutlineSearch} from 'react-icons/ai';

function TodoSearch() {
  return (
    <div>
      <input className='TodoSearch' placeholder="Search" />
      <AiOutlineSearch className='TodoSearch-icon'/>
    </div>
  )
}

export { TodoSearch };