import React, { useReducer } from 'react';
import TasksContext from './tasksContext';
import tasksReducer from './tasksReducer';

import { CREATE_TASK } from '../types';

const TasksState = props => {
  const initialState = {
    unorderedTasks: []
  };

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  // Create new task
  function addTask(newTask) {
    dispatch({ type: CREATE_TASK, payload: newTask });
  }

  return (
    <TasksContext.Provider
      value={{ unorderedTasks: state.unorderedTasks, addTask }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksState;
