import React, { useContext, useEffect } from 'react';
import TasksContext from '../context/tasks/tasksContext';

function StorageLoader() {
  const tasksContext = useContext(TasksContext);
  const { setTasks } = tasksContext;

  useEffect(() => {
    setTasks();
  }, []);
  return <></>;
}

export default StorageLoader;
