export interface pokemonInterface {
  name: string;
  url: string;
}

export interface Props {
  className?: string;
  children?:React.ReactElement;
}

export interface widgetInterface{
  title:string
  size: 's'|'m'|'l'
}