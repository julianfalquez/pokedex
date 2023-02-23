import React from "react";
import useFetch from "../../../../../hooks/useFetch";

export const PokedexEntry = ({ specie }: { specie: any }) => {
  const { response: pokemonSpecie } = useFetch({
    url: specie.url ?? "",
    dependencies: [specie],
  });

  return (
    <div>
      {pokemonSpecie
        ? pokemonSpecie?.flavor_text_entries
            .find((pokeDexEntry: any) => pokeDexEntry.language.name === "en")
            .flavor_text.replace("", " ")
        : null}
    </div>
  );
};
