import { combineReducers } from "redux";
import { rootState, todosReducer } from "./Todos";

export interface StoreState {
  todos: rootState;
}
export default combineReducers<StoreState>({
  todos: todosReducer,
});
