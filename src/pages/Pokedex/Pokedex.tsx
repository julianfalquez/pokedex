import { SideBar } from "./SideBar/SideBar";
import { PokemonDashboard } from "./PokemonPage/PokemonDashboard";
import { Container } from "@mui/system";
import "./pokedexStyles.scss";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../../state/hooks";
import { fetchPokemonList } from "../../state/features/pokemon-slice";

function Pokedex() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPokemonList());
  }, []);
  
  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        sx={{ display: "flex", flexDirection: "row", padding: 0 }}
      >
        <SideBar className="sideBar" />
        <Outlet />
      </Container>
    </>
  );
}

export default Pokedex;
