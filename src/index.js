import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#454647de",
    },
    primary: {
      main: "#171d26de",
      dark: "#353535",
    },
    secondary: {
      main: "#edf2ff",
    },
  },

  typography: {
    h5: {
      fontSize: "1.5rem",
      "@media (max-width:600px)": {
        fontSize: "1.3rem",
      },
    },
    button: {
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
