import { configureStore, createSlice } from "@reduxjs/toolkit";
import rates from "./store/rateGroup";
import { useEffect } from "react";

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

// COMMENTS
let commentShow = createSlice({
  name: "commentShow",
  initialState: false,
  reducers: {
    setCommentShowTrue(state) {
      return (state = true);
    },
  },
});
export let { setCommentShowTrue } = commentShow.actions;

let commentGroup = createSlice({
  name: "commentGroup",
  // initialState: [Array.from({ length: 9 }, () => [])],
  initialState: [Array.from({ length: 9 }, () => [])],
  reducers: {
    addComment(state, addedComment) {
      let stateA = [...state];

      stateA[0][addedComment.payload[0]].push(addedComment.payload[1]);
      console.log(stateA);
    },
  },
});
export let { addComment } = commentGroup.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
    rates: rates.reducer,
    commentShow: commentShow.reducer,
    commentGroup: commentGroup.reducer,
  },
});
