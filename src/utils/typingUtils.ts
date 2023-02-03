import { typingMap } from "./typingMap";
import { getData } from "./httpsRequests";

export const typingInfo = (types: string[]): Promise<any> => {
  return Promise.all(
    types.map((type) =>
      getData({
        url:
          process.env.REACT_APP_POKEMON_API +
          `/type/${typingMap.get(type)["key"]}`,
      })
    )
  ).then((values) => {
    const weakTo = calculateWeaknesses(values);
    const resistantTo = calculateResistant(values);
    const inmuneTo = calculateInmunites(values);
    return {
      weakTo,
      resistantTo,
      inmuneTo,
    };
  });
};

const calculateWeaknesses = (values: any): string[] => {
  const doubleDamageFrom = values
    .map((type: any) => {
      return type.damage_relations.double_damage_from.map((typeName: any) => {
        return typeName.name;
      });
    })
    .flat(1);
  return doubleDamageFrom;
};

const calculateResistant = (values: any): string[] => {
  const halfDamageFrom = values
    .map((type: any) => {
      return type.damage_relations.half_damage_from.map((typeName: any) => {
        return typeName.name;
      });
    })
    .flat(1);
  return halfDamageFrom;
};

const calculateInmunites = (values: any): string[] => {
  return values
    .map((type: any) => {
      return type.damage_relations.no_damage_from.map((typeName: any) => {
        return typeName.name;
      });
    })
    .flat(1);
};
