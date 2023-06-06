import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BuyMeACoffeeProvider } from "./context/BuyMeACoffeeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BuyMeACoffeeProvider>
      <App />
    </BuyMeACoffeeProvider>
  </React.StrictMode>
);
