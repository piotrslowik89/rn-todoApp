const initialState = [
  { id: "1", text: "Lorem" },
  { id: "2", text: "Ipsum" },
  { id: "3", text: "Dolor" },
];

const todoList = function (state = initialState, action) {
  switch (action.type) {

    case "ADD_ITEM":
      var addItemState = [...state];

      addItemState.push({
        id: Math.random() + "",
        text: action.payload.text,
      });
      return addItemState;

    case "DELETE_ITEM":
      var deleteItemState = [...state];
      var deleteIndex = 0;

      deleteItemState.forEach((item, itemIndex) => {
        if (item.id !== action.payload.id) {
          return;
        }

        deleteIndex = item.Index;
        
        return false;
      });

      deleteItemState.splice(deleteIndex, 1);

      return deleteItemState;
    default:
      return state;
  }
};

export default todoList;