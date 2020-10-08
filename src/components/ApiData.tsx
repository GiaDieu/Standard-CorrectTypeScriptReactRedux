import React from "react";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import { fetchTodos, Todo, deleteTodos } from "../actions";

export interface ApiDataProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodos: typeof deleteTodos;
  isLoading: boolean;
}

export interface ApiDataState {
  isLoading: boolean;
}
export class _ApiData extends React.Component<ApiDataProps, ApiDataState> {
  constructor(props: ApiDataProps) {
    super(props);

    this.state = { isLoading: this.props.isLoading };
  }

  componentDidUpdate(prevProps: ApiDataProps) {
    // console.log("prevProps", prevProps);
    // console.log("currentProps", this.props);
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ isLoading: false });
    }
  }
  onFetchButton = (): void => {
    this.props.fetchTodos();
    this.setState({ isLoading: true });
  };

  onDeleteButton = (id: number) => {
    this.props.deleteTodos(id);
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id}>
          <span onClick={() => this.onDeleteButton(todo.id)}>
            Title: {todo.title}
          </span>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onFetchButton}>Fetch Api</button>
        {this.state.isLoading ? "Loading..." : null}
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (
  state: StoreState
): { todos: Todo[]; isLoading: boolean } => {
  return {
    todos: state.todos.todos,
    isLoading: state.todos.isLoading,
  };
};

export const ApiData = connect(mapStateToProps, { fetchTodos, deleteTodos })(
  _ApiData
);
