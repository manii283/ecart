export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const delItem = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

export const addCartQuantity = (item) => {
  return {
    type: "ADD_QUNTITY",
    payload: item,
  };
};

export const removeCartQuantity = (item) => {
  return {
    type: "REMOVE_QUANTITY",
    payload: item,
  };
};

