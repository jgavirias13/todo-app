import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { Header } from '../Header';
import { VerticalMenu } from '../VerticalMenu';
import { TodoContext } from '../TodoContext';
import ProgressBar from '@ramonak/react-progress-bar';
import './App.css';

function AppUi() {
  return (
    <React.Fragment>
      <Header />
      <div className='container'>
        <TodoContext.Consumer>
          {({setSearchValue, searchValue, setFilterStatus, filterStatus}) => (
            <VerticalMenu
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            setFilterStatus={setFilterStatus}
            filterStatus={filterStatus} />
          )}
        </TodoContext.Consumer>
        <div>
          <TodoCounter />
          <TodoContext.Consumer>
            {({completedTodos, todos, loading, error, searchedTodos, toggleCompleteTodos, deleteTodo}) => (
              <React.Fragment>
                <ProgressBar completed={completedTodos / todos.length * 100} className='ProgressBar' customLabel=' ' bgColor='#53EBF4' height='5px' />
                {loading && <p className='AppMessageInfo'>Estamos cargando la informacion...</p>}
                {error && <p className='AppMessageInfo'>Hubo un error al cargar la informacion</p>}
                {(!loading && !searchedTodos.length) && <p className='AppMessageInfo'>No tienes tareas pendientes</p>}
                <TodoList>
                  {searchedTodos.map(todo => (
                    <TodoItem key={todo.id} text={todo.text} completed={todo.completed} toggleCompleteTodos={toggleCompleteTodos} id={todo.id} onDeleteTodo={deleteTodo} />
                  ))}
                </TodoList>
              </React.Fragment>
            )}
          </TodoContext.Consumer>
          <CreateTodoButton />
        </div>
      </div>
    </React.Fragment>
  );
}

export { AppUi };