import { Divider, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import React, { useContext } from "react";
import { Colors } from "../../theme/theme";
import { UIContext } from "../../context.js";
import { Close } from "@mui/icons-material";
import { CloseDrawerButton } from "../../styles/AppBar/appBar.js";

const AppDrawer = () => {
  const { openDrawer, setOpenDrawer } = useContext(UIContext);

  return (
    <>
      {openDrawer && (
        <CloseDrawerButton onClick={() => setOpenDrawer(!openDrawer)}>
          <Close sx={{ color: "white", fontSize: "30px" }} />
        </CloseDrawerButton>
      )}
      <Drawer open={openDrawer}>
        <List>
          <ListItemButton>
            <ListItem>Home</ListItem>
          </ListItemButton>
          <Divider sx={{ background: Colors.secondary }} variant="middle" />
          <ListItemButton>
            <ListItem>Categories</ListItem>
          </ListItemButton>
          <Divider sx={{ background: Colors.secondary }} variant="middle" />
          <ListItemButton>
            <ListItem>Products</ListItem>
          </ListItemButton>
          <Divider sx={{ background: Colors.secondary }} variant="middle" />
          <ListItemButton>
            <ListItem>About Us</ListItem>
          </ListItemButton>
          <Divider sx={{ background: Colors.secondary }} variant="middle" />
          <ListItemButton>
            <ListItem>Contact Us</ListItem>
          </ListItemButton>
          <Divider sx={{ background: Colors.secondary }} variant="middle" />
        </List>
      </Drawer>
    </>
  );
};

export default AppDrawer;
