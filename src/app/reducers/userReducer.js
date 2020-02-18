const userReducer = (
  state = {
    name: "YOIS",
    age: 43
  },
  action
) => {
  //actions defeinitions
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
export default userReducer;
