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
      const validItem = state.mobiles.some((mobile) => mobile.id === itemId);

      if (validItem) {
        const existingItem = state.mobiles.find(
          (mobile) => mobile.id === itemId
        );

        const existingItemIndexInCart = state.cartItems.findIndex(existingItem);
        if (existingItemIndexInCart > -1) {
          state.cartItems[existingItemIndexInCart].quantity++;
        } else {
          state.cartItems.push({ ...existingItem, quantity: 1 });
        }
      }
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const validItem = state.mobiles.some((mobile) => mobile.id === itemId);
      if (validItem) {
        const existingItem = state.mobiles.find(
          (mobile) => mobile.id === itemId
        );

        const existingItemIndexInCart = state.cartItems.findIndex(existingItem);
        const existingItemInCart = state.cartItems[existingItemIndexInCart];
        if (existingItemIndexInCart > -1) {
          //    {(existingItemInCart.quantity  > 1) ? existingItemInCart.quantity-- : state.cartItems.filter((item)=> item.id !== itemId) }
          if (existingItemInCart.quantity > 1) {
            existingItemInCart.quantity--;
          } else {
            state.cartItems.filter((item) => item.id !== itemId);
          }
        }
      }
    },

    clearCart(state, action) {
      state.cartItems = [];
    },
  },
});

export const { cartActions } = cartSlice.actions;

export default cartSlice;
