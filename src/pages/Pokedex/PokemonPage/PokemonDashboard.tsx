import React from "react";
import { Props } from "../../../interfaces/pokemon";
import { PokemonSpecie } from "./Widgets/PokemonSpecie/PokemonSpecie";
import useFetch from "../../../hooks/useFetch";
import { PokemonTyping } from "./Widgets/Typing/PokemonTyping";
import { WidgetContainer } from "./Widgets/WidgetContainer";
import { PokemonStats } from "./Widgets/PokemonStats/PokemonStats";
import { useParams } from "react-router-dom";
import { PokedexEntry } from "./Widgets/PokedexEntry/PokedexEntry";

export const PokemonDashboard: React.FC<Props> = ({ className }) => {
  const { pokemonName } = useParams();
  const pokemonURL=process.env.REACT_APP_POKEMON_API +`/pokemon/${pokemonName}`
  const {
    isLoading: isLoadingPokemon,
    response: pokemonInfo,
    error: errorPokemon,
  } = useFetch({
    url: pokemonURL ?? "",
    dependencies: [pokemonName],
  });
  return (
    <div className={className}>
      {isLoadingPokemon ?? <p>Cargando</p>}
      {pokemonInfo ? (
        <>
          <WidgetContainer title="Pokemon Specie" size="s">
            <PokemonSpecie
              pokemonSpecie={pokemonInfo.species}
              sprites={[
                pokemonInfo.sprites.front_default,
                pokemonInfo.sprites.back_default,
              ]}
            />
          </WidgetContainer>
          <WidgetContainer title="Pokemon Typing" size="m">
            <PokemonTyping pokemonTyping={pokemonInfo.types} />
          </WidgetContainer>
          <WidgetContainer title="Pokemon Stats" size="l">
            <PokemonStats stats={pokemonInfo.stats} />
          </WidgetContainer>
          <WidgetContainer title="Pokedex Entry" size="m">
            <PokedexEntry specie={pokemonInfo.species} />
          </WidgetContainer>
        </>
      ) : (
        <p>Seleccione un Pokemon!</p>
      )}
    </div>
  );
};
