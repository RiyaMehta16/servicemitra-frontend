import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AllRoutes from "./AllRoutes.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <AllRoutes />
  </BrowserRouter>
);
