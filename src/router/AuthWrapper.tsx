import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../index";
import { Navigate } from "react-router-dom";

export const UnAuthorizedRoute = (props: any) => {
  const [user] = useAuthState(auth as any);
  return <div>{!user ? props.children : <Navigate to={"/"} replace />}</div>;
};

export const AuthorizedRoute = (props: any) => {
  const [user] = useAuthState(auth as any);
  return <div>{user ? props.children : <Navigate to={"/"} replace />}</div>;
};
