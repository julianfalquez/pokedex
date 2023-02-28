import React from "react";
import { auth } from "../../index";
import { Avatar, Typography } from "@mui/material";
import { useAppSelector } from "../../state/hooks";

export const UserProfile = () => {
  const { photoURL, displayName, email } = useAppSelector(
    (state) => state.user
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10vh",
      }}
    >
      <Avatar
        sx={{ width: 100, height: 100 }}
        alt="Remy Sharp"
        src={photoURL}
      />
      <Typography
        style={{
          marginTop: "20px",
        }}
      >
        {displayName}
      </Typography>
      <Typography
        style={{
          marginTop: "20px",
        }}
      >
        {email}
      </Typography>
    </div>
  );
};
