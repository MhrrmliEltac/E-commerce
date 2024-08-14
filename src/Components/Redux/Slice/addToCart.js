import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addToCartProduct: [],
  value: 0,
};

const addToCartProductSlice = createSlice({
  name: "addToCartProduct",
  initialState,
  reducers: {
    addToCartProducts: (state, action) => {
      const product = state.addToCartProduct.find(
        (product) => product.id === action.payload.id
      );

      if (product) {
        product.quantity += 1;
        product.totalPrice =
          Math.round((product.totalPrice + action.payload.price) * 100) / 100;
      } else {
        state.addToCartProduct.push({
          ...action.payload,
          quantity: 1,
          totalPrice: Math.round(action.payload.price * 100) / 100,
        });
      }
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    deleteProduct: (state, action) => {
      const productToRemove = state.addToCartProduct.find(
        (product) => product.id === action.payload
      );
      if (productToRemove) {
        state.value -= productToRemove.quantity;
        state.addToCartProduct = state.addToCartProduct.filter(
          (product) => product.id !== action.payload
        );
      }
    },
  },
});

export const { increment, decrement, addToCartProducts, deleteProduct } =
  addToCartProductSlice.actions;
export default addToCartProductSlice.reducer;
