import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "@assets/locales/i18n";
import storeProvider from "@reduxproviders/_storeProvider";
import { Provider } from "react-redux";
import App from "@app";
// import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const app = (
  <>
    {/* Redux store */}
    <Provider store={storeProvider}>
      <App />
    </Provider>
  </>
);

root.render(app);

// serviceWorker.unregister();
