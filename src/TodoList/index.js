import React from 'react';
import './TodoList.css';

function TodoList(props) {
  return (
    <section className='TodoListContainer'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && props.searchValue === '' && props.totalTodos === 0 && props.onEmptyTodos()}
      {!props.loading && props.searchValue !== '' && !props.todos.length && props.onEmptySearchResults(props.searchValue)}

      <ul className='TodoList'>
        {props.render && props.todos.map(props.render)}
        {!props.render && props.children && props.todos.map(props.children)}
      </ul>
    </section>
  )
}

export { TodoList };