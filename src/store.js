import { configureStore, createSlice } from "@reduxjs/toolkit";
import users from "./store/userState";

let stocks = createSlice({
  name: "stocks",
  initialState: [10, 11, 12],
});

//  CART
let cart = createSlice({
  name: "cartData",
  initialState: [
    { id: 0, title: "White and Black", count: 2 },
    { id: 2, title: "Grey Yordan", count: 1 },
  ],
  reducers: {
    moreShoes(state, shoeId) {
      state.map((shoe, i) => {
        if (shoe.id == shoeId.payload) shoe.count += 1;
      });
    },
    lessShoes(state, shoeId) {
      state.map((shoe, i) => {
        if (shoe.id == shoeId.payload) shoe.count -= 1;
      });
    },
    addCart(state, addedShoe) {
      state.push(addedShoe.payload);
      console.log(state);
    },
  },
});

export let { moreShoes, addCart, lessShoes } = cart.actions;

export default configureStore({
  reducer: {
    users: users.reducer,
    stocks: stocks.reducer,
    cart: cart.reducer,
  },
});
