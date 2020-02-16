import React, { useContext } from 'react';
import TasksContext from '../context/tasks/tasksContext';

function ClearButton() {
  const tasksContext = useContext(TasksContext);
  const { clearAll } = tasksContext;

  return (
    <button className='button delete' onClick={clearAll}>
      Clear All
    </button>
  );
}

export default ClearButton;
