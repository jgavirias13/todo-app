import React from 'react';
import './TodoItem.css';
import { IoMdRadioButtonOff } from 'react-icons/io';
import { RiDeleteBin5Fill } from 'react-icons/ri';

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <div className='TodoItemContainer'>
        <IoMdRadioButtonOff className='TodoItemRadio' />
        <span className='TodoItemText'>{props.text}</span>
        <RiDeleteBin5Fill className='TodoItemDelete'/>
      </div>
      <hr className='TodoItemLine'/>
    </li>
  );
}

export { TodoItem };