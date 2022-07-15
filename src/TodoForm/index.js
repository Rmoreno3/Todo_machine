import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  }

  const onWrite = (e) => {
    setNewTodoValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  return(
    <form onSubmit={onSubmit}>
      <label>...</label>
      <textarea
        required
        value={newTodoValue}
        onChange={onWrite}
        placeholder="Tomar agua"
      />
      <div className='TodoForm-buttonContainer'>
        <button
          className='ToddoForm-button TodoForm-button-cancel'
          type='button'
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className='ToddoForm-button TodoForm-button-add'
          type='submit'
        >
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };