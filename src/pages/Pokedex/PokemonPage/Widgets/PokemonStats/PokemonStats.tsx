import React from "react";
import "./pokemonStatsStyles.scss";
import { StatBar } from "./StatBar";

interface pokemonStats {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
}

export const PokemonStats = ({ stats }: { stats: pokemonStats[] }) => {
  return (
    <div>
      {stats.map((stat,index)=><StatBar number={stat.base_stat} key={index} title={stat.stat.name}/>)}
    </div>
  );
};
