import { ThemeProvider } from "@mui/material";
import theme from "./appTheme";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { AppIndex } from "./pages/AppIndex";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppIndex />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
