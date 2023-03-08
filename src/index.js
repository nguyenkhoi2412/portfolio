import React from "react";
import ReactDOM from "react-dom";
import "@assets/locales/i18n";
import store from "@app/store";
import { Provider } from "react-redux";
import { ConfigProvider, theme } from 'antd';
import { configBaseTheme } from '@assets/configs/baseTheme'
import { BrowserRouter } from 'react-router-dom';
import App from "@app";
// import * as serviceWorker from "./serviceWorker";

const app = (
  <React.Fragment>
    {/* Redux store */}
    <Provider store={store}>
      <ConfigProvider
        theme={configBaseTheme}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  </React.Fragment>
);

ReactDOM.render(app, document.getElementById("root"));

// serviceWorker.unregister();