import React from 'react';
import './CreateTodoButton.css';
import { IoMdAdd } from 'react-icons/io';

function CreateTodoButton({clickEvent}) {
  return (
    <button className='CreateTodoButton' onClick={() => clickEvent((prevState) => !prevState)}>
      <IoMdAdd className='CreateTodoButtonAdd'/>
      <span className='CreateTodoButtonText'>NEW TASK</span>
    </button>
  )
}

export { CreateTodoButton };