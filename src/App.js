import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { Header } from './Header';
import { VerticalMenu } from './VerticalMenu';
import './App.css';
import ProgressBar from '@ramonak/react-progress-bar';

const todos = [
  { id: 1, text: 'Cortar Cebolla', completed: false },
  { id: 2, text: 'Tomar el curso de react', completed: false },
  { id: 3, text: 'Llorar con la llorona', completed: true }
]

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className='container'>
        <VerticalMenu />
        <div>
          <TodoCounter />
          <ProgressBar completed={60} className='ProgressBar' customLabel=' ' bgColor='#53EBF4' height='5px'/>
          <TodoList>
            {todos.map(todo => (
              <TodoItem key={todo.id} text={todo.text} />
            ))}
          </TodoList>
          <CreateTodoButton />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
