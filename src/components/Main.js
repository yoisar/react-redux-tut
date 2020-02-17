import React from "react";
export class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h1>The Main Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button
              className="btn btn-primary"
              onClick={() => this.props.changeUserName("Main-Lili")}
            >
              Change the Username
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.props.changeUserAge(100)}
            >
              Change Age
            </button>
          </div>
        </div>
      </div>
    );
  }
}
