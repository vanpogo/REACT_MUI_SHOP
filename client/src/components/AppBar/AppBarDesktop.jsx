import React from "react";
import { Box } from "@mui/material";
import { AppBarContainer, AppBarHeader } from "../../styles/AppBar/appBar";
import Action from "./Action";
import Navigate from "./Navigate";
import { useNavigate } from "react-router-dom";

const AppBarDesktop = ({ matches }) => {
  const navigate = useNavigate();
  return (
    <AppBarContainer>
      <Box flex={1}>
        <AppBarHeader
          sx={{ fontSize: { md: "3em", lg: "4em" } }}
          onClick={() => navigate("/")}
        >
          Hello
        </AppBarHeader>
      </Box>

      <Box flex={5} sx={{ display: "flex", justifyContent: "center" }}>
        <Navigate />
      </Box>

      <Box flex={1}>
        <Action matches={matches} />
      </Box>
    </AppBarContainer>
  );
};

export default AppBarDesktop;
