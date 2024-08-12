import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice/productSlice";
import favouriteSlice from "./Slice/favouriteSlice";
import addToCart from "./Slice/addToCart";

export const store = configureStore({
  reducer: {
    product: productSlice,
    favoriteProduct: favouriteSlice,
    addToCartProduct: addToCart,
    counter: addToCart,
  },
});
