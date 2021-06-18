import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import bankReducer from "./bankReducer";
import { reducer as toastrReducer } from "react-redux-toastr";
const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    toastr: toastrReducer,
    bankReducer,
    globalReducer,
  });

export default rootReducer;
