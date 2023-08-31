import { Box, Container, Grid } from "@mui/material";
import "./App.css";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";

import AppBox from "./components/AppBox";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet, useNavigate } from "react-router-dom";
export const theme = createTheme({
  palette: {
    // mode: "dark",
    background: {
      default: "#454647de",
    },
    primary: {
      main: "#171d26de",
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PrimarySearchAppBar />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
