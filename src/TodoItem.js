import React from 'react';
import './TodoItem.css';
import { IoMdRadioButtonOff } from 'react-icons/io';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

function TodoItem(props) {

  const onCompleteTodo = () => {
    props.toggleCompleteTodos(props.id, true);
  }

  const onUncompleteTodo = () => {
    props.toggleCompleteTodos(props.id, false);
  }

  const onDeleteTodo = () => {
    props.onDeleteTodo(props.id);
  }

  return (
    <li className='TodoItem'>
      <div className='TodoItemContainer'>
        {props.completed
          ? <IoIosCheckmarkCircleOutline className='TodoItemRadio' onClick={onUncompleteTodo} />
          : <IoMdRadioButtonOff className='TodoItemRadio' onClick={onCompleteTodo} />}
        <span className={`TodoItemText ${props.completed? 'TodoItemTextCompleted' : ''}`}>{props.text}</span>
        <RiDeleteBin5Fill className='TodoItemDelete' onClick={onDeleteTodo}/>
      </div>
      <hr className='TodoItemLine'/>
    </li>
  );
}

export { TodoItem };