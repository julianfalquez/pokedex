import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAppDispatch } from "../state/hooks";
import { auth } from "..";
import { setUser } from "../state/features/user-slice";

export const AppIndex = () => {
  const [user] = useAuthState(auth as any);
  const dispatch = useAppDispatch();
  useEffect(() => {
    user &&
      dispatch(
        setUser({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        })
      );
  }, [user,dispatch]);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
