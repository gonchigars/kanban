const initialState = {
  items: [
    { id: 1, name: "Item 1", container: "A" },
    { id: 2, name: "Item 2", container: "A" },
    { id: 3, name: "Item 3", container: "B" },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.item.id
            ? { ...item, container: action.payload.target }
            : item
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
