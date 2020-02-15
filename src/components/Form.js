import React, { useState, useContext } from 'react';
import TasksContext from '../context/tasks/tasksContext';

function Form() {
  const tasksContext = useContext(TasksContext);
  const { addTask } = tasksContext;
  const [newTask, setNewTask] = useState('');

  return (
    <form
      className='form'
      onSubmit={e => {
        addTask(newTask);
        setNewTask('');
        e.preventDefault();
      }}
    >
      <input
        className='input'
        type='text'
        name='newTask'
        value={newTask}
        required
        placeholder='add task'
        onChange={e => setNewTask(e.target.value)}
      />
      <input type='submit' value='add task' className='button create' />
    </form>
  );
}

export default Form;
