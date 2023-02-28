import React from "react";
import pikachuGif from "../../assets/pikachu-running.gif";
import { Typography } from "@mui/material";

export const HomePage = () => (
  <div
    style={{
      marginTop: '20vh',
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <img src={pikachuGif} height="200px" />
    <Typography style={{ marginTop: '20px' }}>Welcome to my Pokedex!</Typography>
  </div>
);
