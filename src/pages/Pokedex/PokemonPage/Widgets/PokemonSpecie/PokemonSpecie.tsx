import { Typography } from "@mui/material";
import { firstLetterUpperCase } from "../../../../../utils/stringUtils";
import { useEffect, useState } from "react";
import { pokemonInterface } from "../../../../../interfaces/pokemon";

export const PokemonSpecie = ({
  pokemonSpecie,
  sprites,
}: {
  pokemonSpecie: pokemonInterface;
  sprites: string[];
}) => {
  const [componentIsLoaded, setComponentIsLoaded] = useState(false);
  const filterSprites=sprites.filter(n => n)
  useEffect(() => {
    setComponentIsLoaded(false);
  }, [pokemonSpecie]);

  const onLoad = (index: number) => {
    if (index === filterSprites.length - 1) {
      setComponentIsLoaded(true);
    }
  };
  return (
    <>
      <Typography variant="h3">Name</Typography>
      <p>{firstLetterUpperCase(pokemonSpecie.name)}</p>
      <Typography variant="h3">Sprite</Typography>
      {filterSprites.filter(n => n).map((sprite, index) => (
        <img
          src={sprite}
          onLoad={() => onLoad(index)}
          key={sprite}
          style={{ visibility: componentIsLoaded ? "visible" : "hidden" }}
          alt="Pokemon Sprite"
        />
      ))}
    </>
  );
};
