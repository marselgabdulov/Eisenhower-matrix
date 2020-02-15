import React, { useContext, useState } from 'react';
import TasksContext from '../context/tasks/tasksContext';

function Task({ body, taskId }) {
  const [priority, setPriority] = useState('unordered');

  const tasksContext = useContext(TasksContext);
  const { deleteTask, setTaskPriority } = tasksContext;

  function handleChange(payload) {
    setPriority(payload);
    setTaskPriority(taskId, payload);
  }

  return (
    <div className='task'>
      <div className='task-body'>{body}</div>{' '}
      <select className='priority' onChange={e => handleChange(e.target.value)}>
        <option value='do first'>Do First</option>
        <option value='schedule'>Schedule</option>
        <option value='delegate'>Delegate</option>
        <option value="don't do">Don’t Do</option>
        <option value='unordered'>Unordered</option>
      </select>
      <button className='button delete' onClick={() => deleteTask(taskId)}>
        delete
      </button>
    </div>
  );
}

export default Task;
