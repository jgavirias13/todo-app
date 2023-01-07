import React from 'react';
import './TodoList.css';

function TodoList(props) {
  const renderFunction = props.render || props.children;
  return (
    <section className='TodoListContainer'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && props.searchValue === '' && props.totalTodos === 0 && props.onEmptyTodos()}
      {!props.loading && props.searchValue !== '' && !props.todos.length && props.onEmptySearchResults(props.searchValue)}

      <ul className='TodoList'>
        {props.todos.map(renderFunction)}
      </ul>
    </section>
  )
}

export { TodoList };