export const addNewItem = function (text) {
  return {
    type: "ADD_ITEM",
    payload: { text },
  };
};

export const deleteItem = function (id) {
  return {
    type: "DELETE_ITEM",
    payload: { id },
  };
};
