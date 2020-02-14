import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { Provider } from "redux";
import { render } from "react-dom";

import App from "./App";

//1.1: Reducer with initial state
const mathReducer = (
  state = {
    result: 1,
    lastValues: []
  },
  action
) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };

      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    default:
      break;
  }
  return state;
};

const userReducer = (
  state = {
    name: "YOIS",
    age: 43
  },
  action
) => {
  //
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };

      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};
// const myLogger = store => next => action => {
//   console.log("Logged Action :", action);
//   next(action);
// };
// //1: Store responsible for change the states
const store = createStore(
  combineReducers({ math: mathReducer, user: userReducer }),
  {},
  // myLogger,
  applyMiddleware(createLogger())
);
//4: Inform that store change
store.subscribe(() => {
  console.log("Sotre updated!", store.state);
});

//2: Dispathcers
store.dispatch({
  type: "ADD",
  payload: 100
});
store.dispatch({
  type: "ADD",
  payload: 22
});
store.dispatch({
  type: "SUBTRACT",
  payload: 80
});

store.dispatch({
  type: "SET_AGE",
  payload: 44
});

const root = "root";
render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById(root)
);
