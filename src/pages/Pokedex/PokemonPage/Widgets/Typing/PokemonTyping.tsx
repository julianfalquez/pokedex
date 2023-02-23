import { Typography } from "@mui/material";
import { typingMap } from "../../../../../utils/typingMap";
import { typingInfo } from "../../../../../utils/typingUtils";
import { useEffect, useState } from "react";
import "./pokemonTypingStyles.scss";

export const PokemonTyping = ({
  pokemonTyping,
}: {
  pokemonTyping: [{ slot: number; type: { name: string; url: string } }];
}) => {
  const [ownTyping, setOwnTyping] = useState<string[] | null>(null);
  const [weak, setWeak] = useState(null);
  const [resistant, setResistant] = useState(null);
  const [inmune, setInmune] = useState<any[] | null>(null);

  useEffect(() => {
    const types = pokemonTyping.map((typing) => typing.type.name);
    setOwnTyping(types);
    typingInfo(types).then(({ weakTo, resistantTo, inmuneTo }) => {
      setWeak(weakTo);
      setResistant(resistantTo);
      setInmune(inmuneTo);
    });
  }, [pokemonTyping]);

  const mapTypeImages = (types: any[]) => {
    if (types.length === 0) return [];
    else
      return types.map((type, index) => (
        <div
        key={index}
          style={{
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "row",
            alignItems: "center",
            margin: "4px"
          }}
        >
          <img
            src={typingMap.get(type.type || type)["url"]}
            key={index + type.type || type}
            alt="types"
            width="100px"
          />
          {type.times > 1 ? <div className="half-circle"><Typography sx={{fontSize:'15px'}}>X{type.times}</Typography></div> : null}
        </div>
      ));
  };

  //TODO: X4, y calcular danos bien

  return (
    <>
      <Typography variant="h3">Types:</Typography>
      <div className="typeContainer">{mapTypeImages(ownTyping ?? [])}</div>
      <Typography variant="h3">Weak To:</Typography>
      <div className="typeContainer">{mapTypeImages(weak ?? [])}</div>
      <Typography variant="h3">Resistant to:</Typography>
      <div className="typeContainer">{mapTypeImages(resistant ?? [])}</div>
      {inmune?.length === 0 ? null : (
        <>
          <Typography variant="h3">Inmune To:</Typography>
          <div className="typeContainer">{mapTypeImages(inmune ?? [])}</div>
        </>
      )}
    </>
  );
};

// display: flex;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
//     align-items: center;
