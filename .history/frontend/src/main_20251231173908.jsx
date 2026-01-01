/**
 * ============================================================
 * Application Entry Point
 * ============================================================
 *
 * Responsibilities:
 * - Initialize React
 * - Mount the root App component
 * - Enforce best practices via StrictMode
 *
 * This file must remain minimal.
 * No UI, no styles, no logic beyond bootstrapping.
 * ============================================================
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/**
 * Create the React root and attach it to the DOM.
 * The HTML file will contain a single <div id="root"></div>.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
