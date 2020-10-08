import { Actions, Todo, ActionTypes } from "../actions";

export interface rootState {
  isLoading: boolean;
  todos: Todo[];
  error: boolean;
}
const initialState: rootState = {
  isLoading: false,
  todos: [],
  error: false,
};

export const todosReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return { ...state, isLoading: true, todos: [], error: false };

    case ActionTypes.FETCH_TODOS_FAILURE:
      return { ...state, isLoading: false, error: true };

    case ActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        todos: action.payload,
      };

    case ActionTypes.DELETE_TODO:
      const newState = state.todos.filter(
        (todo: Todo) => todo.id !== action.payload
      );
      return { ...state, isLoading: false, error: false, todos: [...newState] };

    default:
      return state;
  }
};
