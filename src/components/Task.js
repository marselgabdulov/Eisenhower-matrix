import React, { useContext } from 'react';
import TasksContext from '../context/tasks/tasksContext';

function Task({ body, taskId }) {
  const tasksContext = useContext(TasksContext);
  const { deleteTask } = tasksContext;
  return (
    <div className='task'>
      <span>{body}</span>
      <button className='delete-task' onClick={() => deleteTask(taskId)}>
        delete
      </button>
    </div>
  );
}

export default Task;
