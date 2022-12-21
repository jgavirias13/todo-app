import React from 'react';  
import { AppUi } from './AppUI';

function useLocalStorage(itemName, initValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        const parsedItem = !localStorageItem || localStorageItem === '' ? initValue : JSON.parse(localStorageItem);
        setItem(parsedItem)
        setLoading(false);
      } catch(err) {
        setLoading(false);
        setError(true);
      }
    }, 5000);
  });

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem)
  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}

function App() {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

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

  const toggleCompleteTodos = (id, status) => {
    todos.find(f => f.id == id).completed = status;
    const newTodosList = [...todos];
    saveTodos(newTodosList);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(f => f.id != id);
    saveTodos(newTodos);
  }

  return (
    <AppUi
      loading={loading}
      error={error}
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
