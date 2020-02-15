import React, { useContext, useEffect } from 'react';
import TasksContext from '../context/tasks/tasksContext';
import Task from './Task';

function TaskList() {
  const tasksContext = useContext(TasksContext);
  const { tasks, setUnorderedTasks } = tasksContext;

  useEffect(() => {
    setUnorderedTasks();
  }, []);

  return (
    <div className='task-list'>
      <h3 className='task-list__title'>Unordered Tasks</h3>
      <ul>
        {tasks &&
          tasks
            .filter(task => task.list === 'unordered')
            .map(task => (
              <Task key={task.id} body={task.task} taskId={task.id} />
            ))}
      </ul>
    </div>
  );
}

export default TaskList;
