import React from "react";
import AppBarDesktop from "./AppBarDesktop";
import AppBarMobile from "./AppBarMobile";

const AppBar = ({ matches }) => {
  return (
    <>
      {matches ? (
        <AppBarMobile matches={matches} />
      ) : (
        <AppBarDesktop matches={matches} />
      )}
    </>
  );
};

export default AppBar;
