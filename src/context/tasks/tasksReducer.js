import {
  CREATE_TASK,
  DELETE_TASK,
  SET_TASK_PRIORITY,
  SET_TASKS,
  CLEAR_ALL,
  EDIT_TASK,
  SET_DONE
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case DELETE_TASK:
    case SET_TASK_PRIORITY:
    case EDIT_TASK:
    case SET_DONE:
    case SET_TASKS:
    case CLEAR_ALL:
      return {
        tasks: action.payload
      };
    case CREATE_TASK:
      return {
        tasks: [...state.tasks, action.payload]
      };
    default:
      return state;
  }
};
