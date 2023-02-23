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
  ).then((typesInfo) => {
    const weakTo = calculateDamageRelations(getWeaknessesArray(typesInfo));
    const resistantTo = calculateDamageRelations(getResistantArray(typesInfo));
    const inmuneTo = calculateInmunites(typesInfo);

    return {
      weakTo,
      resistantTo,
      inmuneTo,
    };
  });
};

const getWeaknessesArray = (typesInfo: any): any[] => {
  return typesInfo
    .map((type: any) => {
      return type.damage_relations.double_damage_from.map((typeName: any) => {
        return { type: typeName.name, times: 1 };
      });
    })
    .flat(1);
};

const getResistantArray = (typesInfo: any): string[] => {
  return typesInfo
    .map((type: any) => {
      return type.damage_relations.half_damage_from.map((typeName: any) => {
        return { type: typeName.name, times: 1 };
      });
    })
    .flat(1);
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

const calculateDamageRelations = (arrayToFilter: any[]) => {
  return arrayToFilter.filter((value, index, self) => {
    const prueba = self.findIndex((t) => t.type === value.type);
    if (index !== prueba) self[prueba].times = 2;
    return index === prueba;
  });
};
