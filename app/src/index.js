import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";

// State Management
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>,
     <Router>
      <App />
      </Router>,
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
