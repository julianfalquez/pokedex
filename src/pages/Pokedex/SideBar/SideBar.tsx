import { PokemonCard } from "./PokemonCard/PokemonCard";
import { pokemonInterface } from "../../../interfaces/pokemon";
import { Props } from "../../../interfaces/pokemon";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { setSelectedPokemon } from "../../../state/features/pokemon-slice";
import pokemonLoadingGIF from '../../../assets/giphy.gif'

export const SideBar: React.FC<Props> = ({ className }) => {
  const [searchPokemon, setSearchPokemon] = useState([]);
  const dispatch = useAppDispatch();
  const { pokemonList, pokemonListIsLoading } = useAppSelector(
    (state) => state.pokemon
  );
  useEffect(() => {
    setSearchPokemon(pokemonList);
  }, [pokemonList]);
  const handleSearchChange = (event: any) => {
    setSearchPokemon(
      pokemonList.filter((pokemon: any) =>
        pokemon.name.toUpperCase().includes(event.target.value.toUpperCase())
      )
    );
  };
  return (
    <div className={className}>
      <TextField
        sx={{ direction: "ltr" }}
        id="filled-basic"
        label="Search"
        variant="filled"
        onChange={handleSearchChange}
      />
      <div className="pokemonList">
        {pokemonListIsLoading === "pending" && <img src={pokemonLoadingGIF} height='150px'/>}
        <ul style={{ padding: 0 }}>
          {(searchPokemon ?? []).map(
            (pokemon: pokemonInterface, index: number) => (
              <PokemonCard
                key={index}
                pokemon={pokemon}
                onClick={() => dispatch(setSelectedPokemon(pokemon))}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
};
