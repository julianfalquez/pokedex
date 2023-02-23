import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../index";
import { Navigate } from "react-router-dom";

export const UnAuthorizedRoute = (props) => {
  const [user] = useAuthState(auth);
  console.log(user)
  return <div>{!user ? props.children : <Navigate to={"/"} replace />}</div>;
};

export const AuthorizedRoute = (props) => {
  const [user] = useAuthState(auth);
  console.log(user)
  return <div>{user ? props.children : <Navigate to={"/"} replace />}</div>;
};
