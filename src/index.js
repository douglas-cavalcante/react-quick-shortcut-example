import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Routes from "./routes";
import { Router } from "react-router-dom";
import history from "./services/history";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Routes>
        <App />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
