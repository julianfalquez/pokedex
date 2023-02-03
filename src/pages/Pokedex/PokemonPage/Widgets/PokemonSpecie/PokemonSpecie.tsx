import { Typography } from "@mui/material";
import { firstLetterUpperCase } from "../../../../../utils/stringUtils";
import { WidgetContainer } from "../WidgetContainer";


export const PokemonSpecie = ({
  pokemonSpecie,
  sprites,
}: {
  pokemonSpecie: { name: string; url: string };
  sprites: any;
}) => {
  return (
    <WidgetContainer>
      <>
        <Typography variant="h2">Pokemon Specie</Typography>
        <Typography variant="h3">Name</Typography>
        <p>{firstLetterUpperCase(pokemonSpecie.name)}</p>
        <Typography variant="h3">Sprite</Typography>
        <img src={sprites.front_default} alt="front-sprite" />
        <img src={sprites.back_default} alt="back-sprite" />
      </>
    </WidgetContainer>
  );
};
