import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import AppModal from "./components/AppModal";
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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:jobId" element={<AppModal />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
