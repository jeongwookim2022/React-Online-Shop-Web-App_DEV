import { createSlice } from "@reduxjs/toolkit";

let rates = createSlice({
  name: "rates",
  initialState: [],
  reducers: {
    addRates(state, addedRate) {
      if (addedRate.payload != undefined) {
        state.push(parseInt(addedRate.payload));
      }
    },
  },
});
// RATE
export let { addRates } = rates.actions;
export default rates;
