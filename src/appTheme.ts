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

theme.typography.h4 = {
  fontSize: '0.8 rem',
  '@media (min-width:600px)': {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  color:'#f0f0f'
};

theme.typography.h3 = {
  fontSize: '1 rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
  color:'#f0f0f'
};
theme.typography.h2 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
};
theme.typography.h1 = {
  fontSize: '1.8rem',
  '@media (min-width:600px)': {
    fontSize: '2.1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.6rem',
  },
};

export default theme