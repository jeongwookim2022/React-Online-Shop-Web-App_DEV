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
      let duplicated = false;
      state.forEach((shoe, i) => {
        if (shoe.id == addedShoe.payload.id) {
          duplicated = true;
        }
      });

      if (duplicated == false) {
        state.push(addedShoe.payload);
      } else {
        alert("You already have the same Product in your cart.");
      }
    },
    removeCart(state, willRemoveShoe) {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id == willRemoveShoe.payload) {
          state.splice(i, 1);
        }
      }
    },
  },
});

export let { moreShoes, addCart, lessShoes, removeCart } = cart.actions;
export let dd = cart.actions;

export default configureStore({
  reducer: {
    users: users.reducer,
    stocks: stocks.reducer,
    cart: cart.reducer,
  },
});
