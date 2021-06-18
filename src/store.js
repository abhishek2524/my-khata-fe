import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import rootReducer from "./reducers";

export const history = createBrowserHistory();

const store = configureStore({
  reducer: rootReducer(history),
});

export default store;
