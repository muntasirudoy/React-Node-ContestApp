export const addUser = (value) => {
  return {
    type: "ADD_USER",
    payload: value,
  };
};

export const removeUser = (value) => {
  return {
    type: "REMOVE_USER",
    payload: value,
  };
};
