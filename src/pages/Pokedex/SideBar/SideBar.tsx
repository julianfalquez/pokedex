import { PokemonCard } from "./PokemonCard/PokemonCard";
import useFetch from "../../../hooks/useFetch";
import { Pokemon } from "../../../interfaces/pokemon";
import { Props } from "../../../interfaces/pokemon";

interface sideBardProps {
  handlePokemonClick: (pokemon: Pokemon) => void;
}

export const SideBar: React.FC<Props & sideBardProps> = ({
  className,
  handlePokemonClick,
}) => {
  const { isLoading, response, error } = useFetch({
    url: process.env.REACT_APP_POKEMON_API + "/pokemon",
    dependencies: [],
  });
  return (
    <div className={className}>
      {error && <p>Error loading UwU</p>}
      {isLoading && <p>Loading</p>}
      <ul style={{ padding: 0 }}>
        {response
          ? response.results.map((pokemon: Pokemon, index: number) => (
              <PokemonCard
                key={index}
                pokemon={pokemon}
                onClick={() => handlePokemonClick(pokemon)}
              />
            ))
          : null}
      </ul>
    </div>
  );
};
