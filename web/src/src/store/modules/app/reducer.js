import produce from 'immer';
import types from './types';

const INITIAL_STATE = {
  loading: true,
  tasks: [],
};

function app(state = INITIAL_STATE, action) {
  // action = ACTION COM TODOS OS DADOS
  switch (action.type) {
    case types.SAVE: {
      return produce(state, (draft) => {
        draft.tasks.push(action.task);
      });
    }
    case types.REMOVE: {
      return produce(state, (draft) => {
        const index = draft.tasks.findIndex(
          (task) => task.id === action.taskId
        );
        draft.tasks.splice(index, 1);
      });
    }
    case types.TOGGLE: {
      return produce(state, (draft) => {
        const index = draft.tasks.findIndex(
          (task) => task.id === action.taskId
        );
        draft.tasks[index].completed = !draft.tasks[index].completed;
      });
    }
    case types.SET_LOADING: {
      return produce(state, (draft) => {
        draft.loading = action.loadingState;
      });
    }
    case types.SET: {
      return produce(state, (draft) => {
        draft.tasks = action.tasks;
      });
    }
    default:
      return state;
  }
}

export default app;
