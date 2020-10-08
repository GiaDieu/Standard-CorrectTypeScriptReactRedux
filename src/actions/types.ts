import {
  fetchTodosAction,
  fetchTodosFailureAction,
  fetchTodosSuccessAction,
  deleteTodosAction,
} from "./todos";

export enum ActionTypes {
  FETCH_TODOS = "@@/FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "@@/FETCH_TODOS_SUCCESS",
  FETCH_TODOS_FAILURE = "@@/FETCH_TODOS_FAILURE",
  DELETE_TODO = "@@/DELETE_TODO",
}

export type Actions =
  | fetchTodosAction
  | fetchTodosSuccessAction
  | fetchTodosFailureAction
  | deleteTodosAction;
