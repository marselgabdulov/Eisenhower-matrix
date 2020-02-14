import React, { useState, useContext } from 'react';
import TasksContext from '../context/tasks/tasksContext';

function Form() {
  const tasksContext = useContext(TasksContext);
  const { addTask } = tasksContext;

  const [newTask, setNewTask] = useState('');

  return (
    <form
      onSubmit={e => {
        console.log(newTask);
        addTask(newTask);
        e.preventDefault();
      }}
    >
      <input
        type='text'
        name='newTask'
        placeholder='add task'
        onChange={e => setNewTask(e.target.value)}
      />
      <input type='submit' value='add task' />
    </form>
  );
}

export default Form;
