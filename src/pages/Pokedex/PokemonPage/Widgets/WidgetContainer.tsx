import { Typography } from "@mui/material";
import { Props } from "../../../../interfaces/pokemon";
import "./widgetStyles.scss";

export const WidgetContainer: React.FC<Props> = ({ children }) => {
  return <div className="widgetContiner">{children}</div>;
};
