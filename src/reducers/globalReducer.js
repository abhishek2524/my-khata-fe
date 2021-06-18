import { createSlice } from "@reduxjs/toolkit";
const initState = {
  isLoading: false,
  isConfirm: false,
  show: false,
};
const globalReducer = createSlice({
  name: "bank",
  initialState: initState,
  reducers: {
    setLoader(state, action) {
      state.isLoading = true;
    },
    stopLoader(state) {
      state.isLoading = false;
    },
    setInit(state) {
      return { ...state, initState };
    },
    setConfirmModal(state) {
      state.isConfirm = true;
    },
    closeConfirmModal(state) {
      state.isConfirm = false;
    },
    showModal(state, action) {
      state.show = true;
    },
    closeModal(state, action) {
      state.show = false;
    },
  },
});

export const {
  setLoader,
  stopLoader,
  setInit,
  setConfirmModal,
  closeConfirmModal,
  showModal,
  closeModal,
} = globalReducer.actions;
export default globalReducer.reducer;
