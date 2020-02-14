import { CREATE_TASK } from '../types';

export default (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        unorderedTasks: [...state.unorderedTasks, action.payload]
      };
    default:
      return state;
  }
};
