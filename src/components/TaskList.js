import React, { useContext } from 'react';
import TasksContext from '../context/tasks/tasksContext';
import Task from './Task';

function TaskList({ priority }) {
  const tasksContext = useContext(TasksContext);
  const { getTaskList } = tasksContext;

  return (
    <div className='task-list'>
      <h3 className='task-list__title'>{priority}</h3>
      <ul>
        {getTaskList(priority).map(task => (
          <Task
            key={task.id}
            taskBody={task.task}
            taskId={task.id}
            taskPriority={task.priority}
            isDone={task.done}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
