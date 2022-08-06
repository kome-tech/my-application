import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import App from "./App";
import { Box } from "@mui/material";

import { Provider } from "react-redux"
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Box sx={{ m: 2 }}>
        <App />
      </Box>
    </Provider>
  </React.StrictMode>
);
