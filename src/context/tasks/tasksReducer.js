import { CREATE_TASK, SET_UNORDERED } from '../types';
import _uniqueId from 'lodash/uniqueId';

export default (state, action) => {
  switch (action.type) {
    case SET_UNORDERED:
      return {
        tasks: action.payload
      };
    case CREATE_TASK:
      return {
        tasks: [
          ...state.tasks,
          { id: _uniqueId(), list: 'unordered', task: action.payload }
        ]
      };
    default:
      return state;
  }
};
