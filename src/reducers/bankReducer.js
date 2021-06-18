import { createSlice } from "@reduxjs/toolkit";

const initState = {
  data: [],
  fetchData: false,
};
const bankReducer = createSlice({
  name: "bankData",
  initialState: initState,
  reducers: {
    setIsFetch(state, action) {
      state.fetchData = true;
    },
    clearIsFetch(state, action) {
      state.fetchData = false;
    },
  },
});
export const { setIsFetch, clearIsFetch } = bankReducer.actions;

export default bankReducer.reducer;
