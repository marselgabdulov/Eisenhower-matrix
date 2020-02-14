import { CREATE_TASK } from '../types';
import _uniqueId from 'lodash/uniqueId';

export default (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        unorderedTasks: [
          ...state.unorderedTasks,
          { id: _uniqueId(), list: 'unordered', task: action.payload }
        ]
      };
    default:
      return state;
  }
};
