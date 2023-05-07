import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter} from 'react-router-dom'

ReactDOMClient.createRoot(document.getElementById("root")).render(<BrowserRouter><App /></BrowserRouter>);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
// console.log(<App />)