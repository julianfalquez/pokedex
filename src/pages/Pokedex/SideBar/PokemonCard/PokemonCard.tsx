import React from "react";
import { pokemonInterface } from "../../../../interfaces/pokemon";
import { firstLetterUpperCase } from "../../../../utils/stringUtils";
import "./pokemonCardStyles.scss";
import { Link } from "react-router-dom";

interface PokemonCard {
  pokemon: pokemonInterface;
  onClick: (pokemon: pokemonInterface) => void;
}

export const PokemonCard: React.FC<PokemonCard> = ({ pokemon, onClick }) => {
  return (
    <Link style={{ textDecoration: "none", color:'black' }} to={`/pokedex/${pokemon.name}`}>
      <li className="pokemonCardContainer" onClick={() => onClick(pokemon)}>
        {firstLetterUpperCase(pokemon.name)}
      </li>
    </Link>
  );
};
