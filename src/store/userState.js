import { createSlice } from "@reduxjs/toolkit";

let users = createSlice({
  name: "users",
  initialState: { name: "Kim", age: 20 },
  reducers: {
    changeName(state) {
      // return { name: "Park", age: 20 };
      // OR
      state.name = "Park";
    },
    increaseAge(state, num) {
      state.age += num.payload;
    },
  },
});

export let { changeName, increaseAge } = users.actions; // action: setState funcs above

export default users;
