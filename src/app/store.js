import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import user from "./reducers/userReducer";
import math from "./reducers/mathReducer";

const combinedReducers = { math, user };
// //1: Store responsible for change the states
const store = createStore(
  combineReducers(combinedReducers),
  {},
  // myLogger,
  applyMiddleware(createLogger())
); 

// const myLogger = store => next => action => {
//   console.log("Logged Action :", action);
//   next(action);
// };

//4: Inform that store change
store.subscribe(() => {
  const newLocal_1 = store.getState();
  console.log("Sotre updated!", newLocal_1);
});

//
/* store.dispatch({
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
}); */
