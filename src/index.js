import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/js/core.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./assets/plugins/summernote/dist/summernote.css";

import { store, persistor } from "./redux/store";

import "./assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css";

//import "./assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
