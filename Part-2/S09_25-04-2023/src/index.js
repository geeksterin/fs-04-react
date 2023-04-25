import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CustomProvider from "./Components/Context-API-3/Context";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import myStore from "./Redux/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <CustomProvider>
        <App />
      </CustomProvider>
    </BrowserRouter>
  </Provider>
);
