import React, { useContext, useState } from "react";
import Action from "./Action";
import { IconButton } from "@mui/material";
import {
  AppBarContainer,
  AppBarHeader,
  TopAppBar,
} from "../../styles/AppBar/appBar";
import { Menu, Search } from "@mui/icons-material";
import { UIContext } from "../../context.js";

const AppBarMobile = ({ matches }) => {
  const { openDrawer, setOpenDrawer, showSearchBox, setShowSearchBox } =
    useContext(UIContext);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleShowSearch = () => {
    setShowSearchBox(true);
  };
  return (
    <AppBarContainer>
      <TopAppBar>
        <IconButton onClick={handleDrawerOpen}>
          <Menu />
        </IconButton>
        <AppBarHeader>Hello</AppBarHeader>
        <IconButton onClick={handleShowSearch}>
          <Search />
        </IconButton>
      </TopAppBar>
      <Action matches={matches} />
    </AppBarContainer>
  );
};

export default AppBarMobile;
