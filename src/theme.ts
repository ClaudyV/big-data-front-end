import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}

const customPalette = {
  primary: {
    main: "#651FFF",
    dark: "#4615B2",
    light: "#834BFF",
  },
  secondary: {
    main: "#B388FF",
    dark: "#7D5FB2",
    light: "#C29FFF",
  },
  tertiary: {
    main: "#FFA500",
    dark: "#FF8C00",
    light: "#FFB347",
  },
};

const theme = createTheme({
  palette: customPalette,
});

export default theme;
