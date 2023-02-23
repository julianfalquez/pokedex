import { Typography } from "@mui/material";
import { Props, widgetInterface } from "../../../../interfaces/pokemon";
import "./widgetStyles.scss";
import React from "react";

export const WidgetContainer: React.FC<Props & widgetInterface> = ({
  children,
  title,
  size,
}) => {
  return (
    <div className={`widgetContiner ${size}`}>
      <Typography variant="h2">{title}</Typography>
      {children}
    </div>
  );
};
