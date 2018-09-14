import React from "react";
import List from "./List.jsx";
import { connect } from "react-redux";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from "../actions/todos";

class Todos extends React.Component {
  addItem = e => {
    e.preventDefault();
    this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ""))
    );
  };
  removeItem = todo => {
    this.props.dispatch(handleDeleteTodo(todo));
  };
  toggleItem = id => {
    this.props.dispatch(handleToggle(id));
  };
  render() {
    return (
      <div>
        <h1>Todo</h1>
        <input
          type="text"
          placeholder="Add todo"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Goal</button>
        <List
          toggle={this.toggleItem}
          items={this.props.todos}
          remove={this.removeItem}
        />
      </div>
    );
  }
}

export default connect(state => ({ todos: state.todos }))(Todos);
