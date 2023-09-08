import React, { useContext } from "react";
import { IconButton, Slide } from "@mui/material";
import { UIContext } from "../../context";
import {
  CloseSearchIcon,
  SearchContainer,
  SearchTextField,
} from "../../styles/Search";
import { Search, Close } from "@mui/icons-material";

const FullSearchBox = () => {
  const { showSearchBox, setShowSearchBox } = useContext(UIContext);

  const handleCloseShow = () => {
    setShowSearchBox(false);
  };
  return (
    <Slide in={showSearchBox} direction="down" timeout={500}>
      <SearchContainer>
        <SearchTextField
          variant="standard"
          autoComplete="off"
          fullWidth
          color="secondary"
          placeholder="Search..."
        />
        <IconButton sx={{ marginLeft: "20px", marginRight: "40px" }}>
          <Search
            sx={{ fontSize: { md: "1.5rem", lg: "2rem" }, color: "white" }}
          />
        </IconButton>
        <CloseSearchIcon onClick={handleCloseShow}>
          <Close
            sx={{ fontSize: { md: "2rem", lg: "2.5rem" }, color: "white" }}
          />
        </CloseSearchIcon>
      </SearchContainer>
    </Slide>
  );
};

export default FullSearchBox;
