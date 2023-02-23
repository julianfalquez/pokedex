import { Typography } from "@mui/material";
import { firstLetterUpperCase } from "../../../../../utils/stringUtils";

interface statBar {
  title: string;
  number: number;
}

export const StatBar = ({ title, number }: statBar) => {
  return (
    <>
      <Typography variant="h4">{firstLetterUpperCase(title)}</Typography>
      <div className="barContainer">
        <div className="progressBar">
          <div
            className="innerProgressBar"
            style={{ width: `${(number * 100) / 200}%` }}
          ></div>
        </div>
        {number}
      </div>
    </>
  );
};
