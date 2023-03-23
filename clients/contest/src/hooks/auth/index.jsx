import { createContext, useEffect, useReducer } from "react";
import api from "../../service/api";

const CurrentUserStore = createContext();

// cart reducer start
const initvalue = {
  currentUser: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "ADD_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "REMOVE_TOKEN":
      return {
        ...state,
        token: "",
      };
    default:
      return state;
  }
};
// cart reducer end

///////////////////////////////////////////////////////////////////////////////////////
const CurrentUserProvide = (props) => {
  const [userState, userDispatch] = useReducer(reducer, initvalue);
  const value = { userState, userDispatch };

  return (
    <CurrentUserStore.Provider value={value}>
      {props.children}
    </CurrentUserStore.Provider>
  );
};

export { CurrentUserStore, CurrentUserProvide };
