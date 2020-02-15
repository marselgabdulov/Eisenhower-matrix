import React, { useReducer } from 'react';
import TasksContext from './tasksContext';
import tasksReducer from './tasksReducer';
import _uniqueId from 'lodash/uniqueId';

import {
  CREATE_TASK,
  DELETE_TASK,
  SET_TASK_PRIORITY,
  SET_TASK_LIST
} from '../types';

const TasksState = props => {
  const initialState = {
    tasks: []
  };

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  // Set task list by priority
  function setTaskList(priority) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks !== null) {
      dispatch({
        type: SET_TASK_LIST,
        payload: tasks.filter(task => task.priority === priority)
      });
    } else {
      dispatch({ type: SET_TASK_LIST, payload: [] });
    }
  }

  // Create new task
  function addTask(newTask) {
    dispatch({ type: CREATE_TASK, payload: newTask });
    localStorage.setItem(
      'tasks',
      JSON.stringify([
        ...state.tasks,
        { id: _uniqueId(), priority: 'unordered', task: newTask }
      ])
    );
  }

  // Change task's priority
  function setTaskPriority(taskId, priority) {
    const newTasks = state.tasks.map(task => {
      if (task.id === taskId) {
        task.priority = priority;
      }
      return task;
    });
    dispatch({ type: SET_TASK_PRIORITY, payload: newTasks });
    localStorage.setItem('tasks', JSON.stringify(newTasks));
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
        setTaskPriority,
        setTaskList
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksState;
