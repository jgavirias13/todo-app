import React from 'react';
import './CreateTodoButton.css';
import { IoMdAdd } from 'react-icons/io';

function CreateTodoButton() {
  return (
    <button className='CreateTodoButton' onClick={() => console.log('click')}>
      <IoMdAdd className='CreateTodoButtonAdd'/>
      <span className='CreateTodoButtonText'>NEW TASK</span>
    </button>
  )
}

export { CreateTodoButton };