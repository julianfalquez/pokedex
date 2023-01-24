import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {

  interface Palette {
    neutral: Palette['primary'];

  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

}

const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 16,
  },
  palette: {
    primary: {
      main: "#FF0000",
      darker: "#CC0000",
    },
    secondary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#333333",
      contrastText: "#fff",
    },
  },
});

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

export default theme