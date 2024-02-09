import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { ProductProvider } from "./context/ProductContext.jsx";
import { BasketProvider } from "./context/BasketContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      <ProductProvider>
        <App />
        <ToastContainer autoClose={1500} />
      </ProductProvider>
    </BasketProvider>
  </React.StrictMode>
);
