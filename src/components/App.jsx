import React from "react";
import ConnectedTodos from "./Todos.jsx";
import ConnectedGoals from "./Goals.jsx";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;
    if (loading === true) {
      return <h3>loading</h3>;
    }
    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

const ConnectedApp = connect(state => ({ loading: state.loading }))(App);

export default ConnectedApp;
