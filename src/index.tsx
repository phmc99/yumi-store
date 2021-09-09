import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css"
import { ConfigProvider } from "antd";
import ptBr from "antd/lib/locale/pt_BR"
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Provider from "./providers"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={ptBr}>
        <Provider>
          <App />
        </Provider>
      </ConfigProvider>  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
