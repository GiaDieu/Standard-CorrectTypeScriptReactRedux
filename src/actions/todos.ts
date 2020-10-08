import { Dispatch } from "redux";
import JsonPlaceholder from "./JsonPlaceholder";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface fetchTodosAction {
  type: ActionTypes.FETCH_TODOS;
}

export interface fetchTodosSuccessAction {
  type: ActionTypes.FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

export interface fetchTodosFailureAction {
  type: ActionTypes.FETCH_TODOS_FAILURE;
  payload: boolean;
}

export interface deleteTodosAction {
  type: ActionTypes.DELETE_TODO;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    dispatch<fetchTodosAction>({ type: ActionTypes.FETCH_TODOS });
    return await JsonPlaceholder.get<Todo[]>("/todos")
      .then((response) =>
        dispatch<fetchTodosSuccessAction>({
          type: ActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        })
      )
      .catch((error) =>
        dispatch<fetchTodosFailureAction>({
          type: ActionTypes.FETCH_TODOS_FAILURE,
          payload: error,
        })
      );
  };
};

export const deleteTodos = (id: number): deleteTodosAction => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: id,
  };
};
