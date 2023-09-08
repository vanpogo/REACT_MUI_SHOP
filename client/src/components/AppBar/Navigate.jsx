import React, { useContext } from "react";
import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/AppBar/appBar";
import { Search } from "@mui/icons-material";
import { UIContext } from "../../context";

const Navigate = () => {
  const { showSearchBox, setShowSearchBox } = useContext(UIContext);

  return (
    <MyList type="row">
      <ListItem sx={{ fontSize: { md: "14px", lg: "16px" }, width: "20%" }}>
        Home
      </ListItem>
      <ListItem sx={{ fontSize: { md: "14px", lg: "16px" }, width: "20%" }}>
        Categories
      </ListItem>
      <ListItem sx={{ fontSize: { md: "14px", lg: "16px" }, width: "20%" }}>
        Products
      </ListItem>
      <ListItem sx={{ fontSize: { md: "14px", lg: "16px" }, width: "25%" }}>
        Contact Us
      </ListItem>
      <ListItemButton
        sx={{ display: "flex", justifyContent: "center" }}
        onClick={() => {
          setShowSearchBox(true);
        }}
      >
        <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
          <Search />
        </ListItemIcon>
      </ListItemButton>
    </MyList>
  );
};

export default Navigate;
