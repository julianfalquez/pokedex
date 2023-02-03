import React from "react";
import { Pokemon, Props } from "../../../interfaces/pokemon";
import { PokemonSpecie } from "./Widgets/PokemonSpecie/PokemonSpecie";
import useFetch from "../../../hooks/useFetch";
import { PokemonTyping } from "./Widgets/Typing/PokemonTyping";


interface sideBardProps {
  selectedPokemon: Pokemon | null;
}

export const PokemonPage: React.FC<Props & sideBardProps> = ({
  className,
  selectedPokemon,
}) => {
  const {
    isLoading: isLoadingPokemon,
    response: pokemonInfo,
    error: errorPokemon,
  } = useFetch({
    url: selectedPokemon?.url ?? "",
    dependencies: [selectedPokemon],
  });

  return (
    <div className={className}>
      {isLoadingPokemon ?? <p>Cargando</p>}
      {pokemonInfo ? (
        <>
          <PokemonSpecie
            pokemonSpecie={pokemonInfo.species}
            sprites={pokemonInfo.sprites}
          />
          <PokemonTyping
            pokemonTyping={pokemonInfo.types}
          />
        </>
      ) : (
        <p>Seleccione un Pokemon!</p>
      )}
    </div>
  );
};
