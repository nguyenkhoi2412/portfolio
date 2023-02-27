import React from "react";
import ReactDOM from "react-dom";
// import "@assets/locales/i18n";
import store from "@app/store";
import { Provider } from "react-redux";
import { ThemeProvider } from '@mui/system';
import { muiTheme } from '@assets/muiTheme'
import App from "@app";
// import * as serviceWorker from "./serviceWorker";

const app = (
  <React.Fragment>
    {/* Redux store */}
    <Provider store={store}>
      <ThemeProvider
        theme={muiTheme}
      >
        <App />
      </ThemeProvider>
    </Provider>
  </React.Fragment>
);

ReactDOM.render(app, document.getElementById("root"));

// serviceWorker.unregister();