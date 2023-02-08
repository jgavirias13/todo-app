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
import { ChangeAlertWithStorageListener } from '../ChangeAlert';
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
    searchValue,
    addTodo,
    sincronizeTodos
  } = useTodos();

  return (
    <React.Fragment>
      <Header />
      <div className='container'>
        <VerticalMenu>
          <TodoSearch setSearchValue={setSearchValue} loading={loading}/>
          <TodoFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
        </VerticalMenu>
        <div>
          <TodoCounter />
          <ProgressBar completed={completedTodos / todos.length * 100} className='ProgressBar' customLabel=' ' bgColor='#53EBF4' height='5px' />

          <TodoList
            error={error}
            loading={loading}
            todos={searchedTodos}
            searchValue={searchValue}
            totalTodos={todos.length}
            onError={() => <TodoError/>}
            onLoading={() => <TodoLoader/>}
            onEmptyTodos={() => <TodoInfo text={'Crea tu primera tarea'}/>}
            onEmptySearchResults={(searchText) => <TodoInfo text={`No hay resultados para tu busqueda "${searchText}"`}/>}
            /* render={todo => (
              <TodoItem key={todo.id} text={todo.text} completed={todo.completed} toggleCompleteTodos={toggleCompleteTodos} id={todo.id} onDeleteTodo={deleteTodo} />
            )} */
          >
            {
              todo => (
                <TodoItem key={todo.id} text={todo.text} completed={todo.completed} toggleCompleteTodos={toggleCompleteTodos} id={todo.id} onDeleteTodo={deleteTodo} />
              )
            }
          </TodoList>

          {!!openModal && (
            <Modal>
              <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
            </Modal>
          )}
          <CreateTodoButton clickEvent={setOpenModal} />
        </div>
      </div>
      <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export default App;
