import { Typography } from "@mui/material";
import { WidgetContainer } from "../WidgetContainer";
import { typingMap } from "../../../../../utils/typingMap";
import { typingInfo } from "../../../../../utils/typingUtils";
import { useEffect, useState } from "react";

export const PokemonTyping = ({
  pokemonTyping,
}: {
  pokemonTyping: [{ slot: number; type: { name: string; url: string } }];
}) => {
  const [ownTyping, setOwnTyping] = useState<string[] | null>(null);
  const [weak, setWeak] = useState(null);
  const [resistant, setResistant] = useState(null);
  const [inmune, setInmune] = useState(null);

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
        <>
          <img
            src={typingMap.get(type)["url"]}
            key={index + type}
            alt="types"
            width="100px"
          />
        </>
      ));
  };

  return (
    <WidgetContainer>
      <>
        <Typography variant="h2">Typing</Typography>
        <Typography variant="h3">Types:</Typography>
        {mapTypeImages(ownTyping ?? [])}
        <Typography variant="h3">Weak To:</Typography>
        {mapTypeImages(weak ?? [])}
        <Typography variant="h3">Resistant to:</Typography>
        {mapTypeImages(resistant ?? [])}
        <Typography variant="h3">Inmune To:</Typography>
        {mapTypeImages(inmune ?? [])}
      </>
    </WidgetContainer>
  );
};
