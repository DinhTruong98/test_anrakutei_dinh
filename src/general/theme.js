import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
  typography: {
    fontSize: 12,
  },
  spacing: 8,
  palette: {
    primary: { main: "#2bcb4a" },
    secondary: { main: "#3477C8" },
    background: { main: "#11131b" },
    cardground: { main: "#373c4e" },
    text: { primary: "#fff" },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      textTransform: "none",
    },
  },
});
