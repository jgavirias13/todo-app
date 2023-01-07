import React from 'react';
import './TodoInfo.css';

function TodoInfo({ text }) {
  return (
    <p className='MessageInfo'>{text}</p>
  )
}

export { TodoInfo };