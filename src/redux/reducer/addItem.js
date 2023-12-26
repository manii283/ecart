const addItem = [];

const addItems = (state = addItem, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];
      break;

    case "DELITEM":
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));
      break;

    // case "ADD_QUNTITY":
    //   return Object.assign([], state.map(item => {
    //     if(item.id === action.id){
    //       item.quantity += action.payload.up;
    //     }
    //     return item;
    //   }
    //   ));
    //   break;

    // case "REMOVE_QUANTITY":
    //   return Object.assign([], state.map(item => {
    //     if(item.id === action.id){
    //       item.quantity -= action.payload.down;
    //     }
    //     return item;
    //   }
    //   ));
    //   break;

    default:
      return state;
      break;
  }
};

export default addItems;
