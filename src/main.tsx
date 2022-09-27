import "./style/index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

if (import.meta.env.DEV) {
  const { worker } = await import("./msw/index");
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
