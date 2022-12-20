import React from 'react';  
import { AppUi } from './AppUI';

const defaultTodos = [
  { id: 1, text: 'Cortar Cebolla', completed: false },
  { id: 2, text: 'Tomar el curso de react', completed: false },
  { id: 3, text: 'Llorar con la llorona', completed: true },
  { id: 4, text: 'Tomar el curso de react avanzado', completed: true },
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
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
    setTodos(newTodosList);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(f => f.id != id);
    setTodos(newTodos);
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
