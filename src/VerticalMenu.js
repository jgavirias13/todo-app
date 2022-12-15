import React from 'react';
import './VerticalMenu.css';
import { TodoSearch } from './TodoSearch';
import { TbClearAll } from 'react-icons/tb';
import { IoMdDoneAll } from 'react-icons/io';
import { MdRemoveDone } from 'react-icons/md';

function VerticalMenu() {
  return (
    <div className='VerticalMenu'>
      <div>
        <div className='VerticalMenu-search'>
          <TodoSearch />
        </div>
        <ul className='VerticalMenu-filterOptions'>
          <li>
            <TbClearAll className='VerticalMenu-filterOptionsIcon VerticalMenu-filterOptionsActive' />
            <span className='VerticalMenu-filterOptionsText VerticalMenu-filterOptionsActive'>All</span>
          </li>
          <li>
            <IoMdDoneAll className='VerticalMenu-filterOptionsIcon' />
            <span className='VerticalMenu-filterOptionsText'>Completed</span>
          </li>
          <li>
            <MdRemoveDone className='VerticalMenu-filterOptionsIcon' />
            <span className='VerticalMenu-filterOptionsText'>No Completed</span>
          </li>
        </ul>
      </div>
      <div className='VerticalMenu-line'></div>
    </div>
  )
}

export { VerticalMenu }