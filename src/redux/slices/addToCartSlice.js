import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  //reducers
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      } 
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
        const removeItem = state.cart.filter(
          (item) => item.id !== action.payload
        );
        state.cart = removeItem;
      } else {
        item.quantity--;
      }
    },

    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },

    setCartFromStorage: (state, action) => {
      state.cart = action.payload;
    },
  },
});

// console.log(cartSlice.actions);    //action creater
export const { addToCart, incrementQuantity, decrementQuantity, removeItem, setCartFromStorage } =
  cartSlice.actions;

export default cartSlice.reducer;
