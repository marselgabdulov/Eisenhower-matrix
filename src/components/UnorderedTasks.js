import React, { useContext, useEffect } from 'react';
import TasksContext from '../context/tasks/tasksContext';

function UnorderedTasks() {
  const tasksContext = useContext(TasksContext);
  const { tasks, setUnorderedTasks } = tasksContext;

  useEffect(() => {
    setUnorderedTasks();
  }, []);

  return (
    <>
      <h3>Unordered Tasks</h3>
      <ul>
        {tasks &&
          tasks
            .filter(task => task.list === 'unordered')
            .map(task => <li key={task.id}>{task.task}</li>)}
      </ul>
    </>
  );
}

export default UnorderedTasks;
