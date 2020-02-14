import React, { useReducer } from 'react';
import TasksContext from './tasksContext';
import tasksReducer from './tasksReducer';
import _uniqueId from 'lodash/uniqueId';

import { CREATE_TASK, DELETE_TASK, SET_UNORDERED } from '../types';

const TasksState = props => {
  const initialState = {
    tasks: []
  };

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  // Set unordered tasks
  function setUnorderedTasks() {
    let unordered = localStorage.getItem('tasks');
    if (unordered !== null) {
      dispatch({ type: SET_UNORDERED, payload: JSON.parse(unordered) });
    } else {
      dispatch({ type: SET_UNORDERED, payload: [] });
    }
  }

  // Create new task
  function addTask(newTask) {
    dispatch({ type: CREATE_TASK, payload: newTask });
    localStorage.setItem(
      'tasks',
      JSON.stringify([
        ...state.tasks,
        { id: _uniqueId(), list: 'unordered', task: newTask }
      ])
    );
  }

  // Delete task
  function deleteTask(taskId) {
    const newTasks = state.tasks.filter(task => task.id !== taskId);
    dispatch({ type: DELETE_TASK, payload: newTasks });

    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        deleteTask,
        setUnorderedTasks
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksState;
