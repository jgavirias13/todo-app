import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { Header } from '../Header';
import { VerticalMenu } from '../VerticalMenu';
import { useTodos } from './useTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoSearch } from '../TodoSearch';
import { TodoFilter } from '../TodoFilter';
import { TodoLoader } from '../TodoLoader';
import { TodoError } from '../TodoError';
import { TodoInfo } from '../TodoInfo';
import ProgressBar from '@ramonak/react-progress-bar';
import './App.css';

function App() {

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
  } = useTodos();

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
          {loading && <TodoLoader/>}
          {error && <TodoError/>}
          {(!loading && !searchedTodos.length) && <TodoInfo/>}
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

export default App;
