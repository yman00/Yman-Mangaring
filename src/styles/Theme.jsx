import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    bg: { 
        primary: "#121212",
    },
    txt: { 
        primary: "#d2824a",
        secondary: "#fff" 
    },
  },
});

// export const lightTheme = createTheme({
//   palette: {
//     mode: "light",
//     primary: { main: "#1976d2" },
//   },
// });

// export const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: { main: "#90caf9" },
//   },
// });

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);