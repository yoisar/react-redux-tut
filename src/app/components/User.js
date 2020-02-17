import React from "react";

export const Uer = props => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>The User Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <p>
            User Name: {props.username}, Age: {props.userage}
          </p>
        </div>
      </div>
    </div>
  );
};
