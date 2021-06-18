import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store, { history } from "./store";
import { ConnectedRouter } from "connected-react-router";
import routes from "./routes";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

ReactDOM.render(
  // <BrowserRouter>
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
  </Provider>,
  // </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
