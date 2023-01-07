import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { Header } from '../Header';
import { VerticalMenu } from '../VerticalMenu';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoSearch } from '../TodoSearch';
import { TodoFilter } from '../TodoFilter';
import ProgressBar from '@ramonak/react-progress-bar';
import './App.css';
import { BallTriangle } from 'react-loader-spinner';

function AppUi() {
  const {
    completedTodos,
    todos,
    loading,
    error,
    searchedTodos,
    toggleCompleteTodos,
    deleteTodo,
    openModal,
    setOpenModal,
    filterStatus,
    setFilterStatus,
    setSearchValue,
    addTodo
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <Header />
      <div className='container'>
        <VerticalMenu>
          <TodoSearch setSearchValue={setSearchValue} />
          <TodoFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
        </VerticalMenu>
        <div>
          <TodoCounter />
          <ProgressBar completed={completedTodos / todos.length * 100} className='ProgressBar' customLabel=' ' bgColor='#53EBF4' height='5px' />
          {loading && <BallTriangle height={80} width={80} color={'#53EBF4'} wrapperClass={'Loader'} />}
          {error && <p className='AppMessageInfo'>Hubo un error al cargar la informacion</p>}
          {(!loading && !searchedTodos.length) && <p className='AppMessageInfo'>No tienes tareas pendientes</p>}
          <TodoList>
            {searchedTodos.map(todo => (
              <TodoItem key={todo.id} text={todo.text} completed={todo.completed} toggleCompleteTodos={toggleCompleteTodos} id={todo.id} onDeleteTodo={deleteTodo} />
            ))}
          </TodoList>
          {!!openModal && (
            <Modal>
              <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
            </Modal>
          )}
          <CreateTodoButton clickEvent={setOpenModal} />
        </div>
      </div>
    </React.Fragment>
  );
}

export { AppUi };