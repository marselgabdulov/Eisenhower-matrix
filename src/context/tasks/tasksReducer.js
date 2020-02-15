import {
  CREATE_TASK,
  DELETE_TASK,
  SET_TASK_PRIORITY,
  SET_TASKS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        tasks: [...state.tasks, action.payload]
      };
    case DELETE_TASK:
      return {
        tasks: action.payload
      };
    case SET_TASK_PRIORITY:
      return {
        tasks: action.payload
      };
    case SET_TASKS:
      return {
        tasks: action.payload
      };
    default:
      return state;
  }
};
