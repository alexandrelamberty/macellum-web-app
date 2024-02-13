import "@/index.css";

import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "@/app";
import { Toaster } from "@/components/ui/toaster.tsx";
import { store } from "@/store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Toaster />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
