import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { Header } from '../Header';
import { VerticalMenu } from '../VerticalMenu';
import ProgressBar from '@ramonak/react-progress-bar';
import './App.css';

function AppUi({
  setSearchValue,
  searchValue,
  setFilterStatus,
  filterStatus,
  completedTodos,
  todos,
  toggleCompleteTodos,
  deleteTodo,
  searchedTodos,
}) {
  return (
    <React.Fragment>
      <Header />
      <div className='container'>
        <VerticalMenu
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          setFilterStatus={setFilterStatus}
          filterStatus={filterStatus} />
        <div>
          <TodoCounter />
          <ProgressBar completed={completedTodos / todos.length * 100} className='ProgressBar' customLabel=' ' bgColor='#53EBF4' height='5px' />
          <TodoList>
            {searchedTodos.map(todo => (
              <TodoItem key={todo.id} text={todo.text} completed={todo.completed} toggleCompleteTodos={toggleCompleteTodos} id={todo.id} onDeleteTodo={deleteTodo} />
            ))}
          </TodoList>
          <CreateTodoButton />
        </div>
      </div>
    </React.Fragment>
  );
}

export { AppUi };