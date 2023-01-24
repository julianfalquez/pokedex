import PokedexIndex from "./pages/Pokedex/index";
import { ThemeProvider } from "@mui/material";
import theme from './appTheme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <PokedexIndex></PokedexIndex>
    </ThemeProvider>
  );
}

export default App;
