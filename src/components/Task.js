import React, { useContext } from 'react';
import TasksContext from '../context/tasks/tasksContext';
import { ReactComponent as Trash } from './trash.svg';

function Task({ body, taskId, taskPriority }) {
  const tasksContext = useContext(TasksContext);
  const { deleteTask, setTaskPriority } = tasksContext;

  function handleChange(payload) {
    setTaskPriority(taskId, payload);
  }
  return (
    <div className='task'>
      <div className='task-body'>{body}</div>{' '}
      <select
        onChange={e => {
          handleChange(e.target.value);
        }}
      >
        <option value=''>Choose priority</option>
        <option value='do first'></option>
        <option value='schedule'>Schedule</option>
        <option value='delegate'>Delegate</option>
        <option value="don't do">Don’t Do</option>
        <option value='unordered'>Unordered</option>
      </select>
      <button className='task-button' onClick={() => deleteTask(taskId)}>
        <Trash />
      </button>
    </div>
  );
}

export default Task;
