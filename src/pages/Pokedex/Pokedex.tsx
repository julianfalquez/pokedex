import { Typography } from "@mui/material";
import { SideBar } from "./SideBar/SideBar";
import { PokemonPage } from "./PokemonPage/PokemonPage";
import { Container } from "@mui/system";
import "./pokedexStyles.scss";
import { useState } from "react";
import { Pokemon } from "../../interfaces/pokemon";

function Pokedex() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const handlePokemonClick = async (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <>
      <Typography variant="h1" sx={{ color: "neutral.main" }}>
        soy una poxedex
      </Typography>
      <Container
        maxWidth={false}
        sx={{ display: "flex", flexDirection: "row", padding: 0 }}
      >
        <SideBar className="sideBar" handlePokemonClick={handlePokemonClick} />
        <PokemonPage selectedPokemon={selectedPokemon} />
      </Container>
    </>
  );
}

export default Pokedex;
