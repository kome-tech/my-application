import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import App from "./App";
import { Box } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Box sx={{ m: 2 }}>
      <App />
    </Box>
  </React.StrictMode>
);
