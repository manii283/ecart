const addItem = [];

const addItems = (state = addItem, action) => {
  switch (action.type) {
    case "ADDITEM": {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem == 1) {
        return state.map((item) =>
          item.id === existingItem.id
            ? {
                ...item,
                quantity: item.quantity + action.payload.quantity,
                totalPrice: item.totalPrice + action.payload.price,
              }
            : item
        );
      } else {
        return [
          ...state,
          { ...action.payload, quantity: 1, totalPrice: action.payload.price },
        ];
      }
    }

    case "DELITEM":
      return state.filter((x) => x.id !== action.payload.id);

    case "ADD_QUNTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + item.price,
            }
          : item
      );

    case "REMOVE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id && item.quantity > 0
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.totalPrice - item.price,
            }
          : item
      );

    default:
      return state;
  }
};

export default addItems;
