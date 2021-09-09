import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Providers from "./providers/index";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
