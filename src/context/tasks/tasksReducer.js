import {
  CREATE_TASK,
  DELETE_TASK,
  SET_TASK_PRIORITY,
  SET_TASK_LIST
} from '../types';
import _uniqueId from 'lodash/uniqueId';

export default (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        tasks: [
          ...state.tasks,
          { id: _uniqueId(), priority: 'unordered', task: action.payload }
        ]
      };
    case DELETE_TASK:
      return {
        tasks: action.payload
      };
    case SET_TASK_PRIORITY:
      return {
        tasks: action.payload
      };
    case SET_TASK_LIST:
      return {
        tasks: action.payload
      };
    default:
      return state;
  }
};
