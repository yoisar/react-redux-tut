import React from "react";

export const Main = props => {
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
            onClick={() => props.changeUserName("Main-Lili")}
          >
            Change the Username
          </button>
          <button
            className="btn btn-primary"
            onClick={() => props.changeUserAge(100)}
          >
            Change Age
          </button>
        </div>
      </div>
    </div>
  );
};
