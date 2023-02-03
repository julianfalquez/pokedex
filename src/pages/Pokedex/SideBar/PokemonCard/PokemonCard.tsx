import React from "react";
import { Pokemon } from "../../../../interfaces/pokemon";
import "./pokemonCardStyles.scss";
import { firstLetterUpperCase } from "../../../../utils/stringUtils";

interface PokemonCard {
  pokemon: Pokemon;
  onClick: (pokemon: Pokemon) => void;
}

export const PokemonCard: React.FC<PokemonCard> = ({ pokemon, onClick }) => {
  return (
    <li className="pokemonCard" onClick={() => onClick(pokemon)}>
      <a>{firstLetterUpperCase(pokemon.name)}</a>
    </li>
  );
};
