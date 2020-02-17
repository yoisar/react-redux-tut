import React from "react";
import { connect } from "react-redux";

import { User } from "./../components/User";
import { Main } from "./../components/Main";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Main
          changeUserName={() => this.props.setName("App-Lili")}
          changeUserAge={() => this.props.setAge(41)}
        />
        <User username={this.props.user.name} userage={this.props.user.age} />
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
    },
    setAge: age => {
      dispatch({
        type: "SET_AGE",
        payload: age
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPorps
)(App);
