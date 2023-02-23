import { ThemeProvider } from "@mui/material";
import theme from "./appTheme";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavBar />
        <Outlet />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
