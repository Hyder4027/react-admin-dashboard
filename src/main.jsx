import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import ThemeProvider from "./context/ThemeContext";

import UserProvider from "./context/UserContext";
import store from "./redux/store";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
