import React from 'react';  
import { AppUi } from './AppUI';

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  const savedTodos = !localStorageTodos || localStorageTodos === '' ? [] : JSON.parse(localStorageTodos);

  const [todos, setTodos] = React.useState(savedTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const [filterStatus, setFilterStatus] = React.useState('all');
  const completedTodos = todos.filter(f => !!f.completed).length;
  let filteredStatusTodos = [];

  switch(filterStatus) {
    case 'all':
      filteredStatusTodos = todos;
      break;
    case 'completed':
      filteredStatusTodos = todos.filter(f => !!f.completed);
      break;
    case 'uncompleted':
      filteredStatusTodos = todos.filter(f => !f.completed);
      break;
  }

  let searchedTodos = [];

  if (!searchValue.length > 0) {
    searchedTodos = filteredStatusTodos;
  } else {
    searchedTodos = filteredStatusTodos.filter(f => f.text.toUpperCase().includes(searchValue.toUpperCase()));
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
  }

  const toggleCompleteTodos = (id, status) => {
    todos.find(f => f.id == id).completed = status;
    const newTodosList = [...todos];
    setTodos(newTodosList);
    saveTodos(newTodosList);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(f => f.id != id);
    setTodos(newTodos);
    saveTodos(newTodos);
  }

  return (
    <AppUi
      setSearchValue={setSearchValue}
      searchValue={searchValue}
      setFilterStatus={setFilterStatus}
      filterStatus={filterStatus}
      completedTodos={completedTodos}
      todos={todos}
      toggleCompleteTodos={toggleCompleteTodos}
      deleteTodo={deleteTodo}
      searchedTodos={searchedTodos}
    />
  );
}

export default App;
