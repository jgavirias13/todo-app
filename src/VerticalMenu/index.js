import React from 'react';
import './VerticalMenu.css';
import { TodoSearch } from '../TodoSearch';
import { TbClearAll } from 'react-icons/tb';
import { IoMdDoneAll } from 'react-icons/io';
import { MdRemoveDone } from 'react-icons/md';

function VerticalMenu({searchValue, setSearchValue, setFilterStatus, filterStatus}) {
  return (
    <div className='VerticalMenu'>
      <div>
        <div className='VerticalMenu-search'>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <ul className='VerticalMenu-filterOptions'>
          <li onClick={() => setFilterStatus('all')}>
            <TbClearAll className={`VerticalMenu-filterOptionsIcon ${filterStatus === 'all' ? 'VerticalMenu-filterOptionsActive' : ''}`} />
            <span className={`VerticalMenu-filterOptionsText ${filterStatus === 'all' ? 'VerticalMenu-filterOptionsActive' : ''}`}>All</span>
          </li>
          <li onClick={() => setFilterStatus('completed')}>
            <IoMdDoneAll className={`VerticalMenu-filterOptionsIcon ${filterStatus === 'completed' ? 'VerticalMenu-filterOptionsActive' : ''}`} />
            <span className={`VerticalMenu-filterOptionsText ${filterStatus === 'completed' ? 'VerticalMenu-filterOptionsActive' : ''}`}>Completed</span>
          </li>
          <li onClick={() => setFilterStatus('uncompleted')}>
            <MdRemoveDone className={`VerticalMenu-filterOptionsIcon ${filterStatus === 'uncompleted' ? 'VerticalMenu-filterOptionsActive' : ''}`} />
            <span className={`VerticalMenu-filterOptionsText ${filterStatus === 'uncompleted' ? 'VerticalMenu-filterOptionsActive' : ''}`}>No Completed</span>
          </li>
        </ul>
      </div>
      <div className='VerticalMenu-line'></div>
    </div>
  )
}

export { VerticalMenu }