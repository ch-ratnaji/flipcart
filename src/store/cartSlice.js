import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    mobiles: [],
    cartItems: [],
  },

  reducers: {
    mobilesList(state, action) {
      state.mobiles = action.payload;
    },

    addItem(state, action) {
      const itemId = action.payload;

      const existingItemIndexInCart = state.cartItems.findIndex(
        (item) => item.id === itemId
      );
      if (existingItemIndexInCart > -1) {
        state.cartItems[existingItemIndexInCart].quantity++;
      } else {
        const existingItem = state.mobiles.find(
          (mobile) => mobile.id === itemId
        );
        state.cartItems.push({ ...existingItem, quantity: 1 });
      }
    },

    removeItem(state, action) {
      const itemId = action.payload;

      const existingItemIndexInCart = state.cartItems.findIndex(
        (mobile) => mobile.id === itemId
      );
      const existingItemInCart = state.cartItems[existingItemIndexInCart];
      if (existingItemIndexInCart > -1) {
        //    {(existingItemInCart.quantity  > 1) ? existingItemInCart.quantity-- : state.cartItems.filter((item)=> item.id !== itemId) }
        if (existingItemInCart.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== itemId
          );
        } else {
          existingItemInCart.quantity--;
        }
      }
    },

    clearCart(state, action) {
      state.cartItems = [];
    },

    deleteItem(state, action) {
      const itemId = action.payload;

      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
