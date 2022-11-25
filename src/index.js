/* 
Created by Mushfiqur Rahman Abir.
Date: 8/14/2022
Project: Ghosty-web
Hosted on: https:ghostydevs.vercel.app
 */

// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContextProvider } from "./context/ThemeContext";

// main driver code
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
