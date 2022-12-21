import React from 'react';
import './TodoSearch.css';
import { AiOutlineSearch} from 'react-icons/ai';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target?.value);
  }

  return (
    <div>
      <input className='TodoSearch' placeholder="Search" onChange={onSearchValueChange}/>
      <AiOutlineSearch className='TodoSearch-icon'/>
    </div>
  )
}

export { TodoSearch };