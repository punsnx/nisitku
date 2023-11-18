import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";

import "./index.css";

function renderApp() {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
}

// Call the function to render the application
renderApp();
