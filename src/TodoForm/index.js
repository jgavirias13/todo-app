import React from 'react';
import './TodoForm.css';

function TodoForm({
  addTodo,
  setOpenModal
}) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue !== '') {
      addTodo(newTodoValue);
    }
    setOpenModal(false);
  }

  return (
    <div className='TodoForm'>
      <form className='TodoFormForm' onSubmit={onSubmit}>
        <h2>Agrega tu nueva tarea</h2>
        <textarea className='TodoFormNewTodo' placeholder='Tu tarea pendiente' onChange={onChange} value={newTodoValue} />
        <div className='TodoFormButtons'>
          <button className='TodoFormButton' type='button' onClick={onCancel}>
            Cancelar
          </button>
          <button className='TodoFormButton' type='submit'>
            Añadir
          </button>
        </div>
      </form>
    </div>
  )
}

export { TodoForm };