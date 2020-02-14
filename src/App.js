import React from "react";
import { connect } from "react-redux";

import { User } from "./components/User";
import { Main } from "./components/Main";

class App extends React.Component {
  // constructor() {
  //   super();
  // }
  changeUserName(newName) {}

  render() {
    return (
      <div className="container">
        <Main changeUserName={this.changeUserName.bind(this)} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToPorps = dispatch => {
  return {
    setName: name => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPorps
)(App);
