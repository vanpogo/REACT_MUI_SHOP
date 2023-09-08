import React from "react";
import { ShoppingCart, Favorite, Person } from "@mui/icons-material";
import { Divider } from "@mui/material";
import {
  ActionListItemButton,
  MyList,
  ActionListItemIcon,
  ActionIconContainerMobile,
  ActionIconContainerDesktop,
} from "../../styles/AppBar/appBar";
import { Colors } from "../../theme/theme";

const Action = ({ matches }) => {
  const Component = matches
    ? ActionIconContainerMobile
    : ActionIconContainerDesktop;

  return (
    <Component>
      <MyList type="row">
        <ActionListItemButton>
          <ActionListItemIcon>
            <ShoppingCart
              sx={
                matches
                  ? { color: Colors.secondary }
                  : { color: Colors.dim_grey }
              }
            />
          </ActionListItemIcon>
        </ActionListItemButton>
        <Divider
          orientation="vertical"
          flexItem
          sx={
            matches
              ? { background: Colors.secondary }
              : { background: Colors.dim_grey }
          }
        />

        <ActionListItemButton>
          <ActionListItemIcon>
            <Favorite
              sx={
                matches
                  ? { color: Colors.secondary }
                  : { color: Colors.dim_grey }
              }
            />
          </ActionListItemIcon>
        </ActionListItemButton>
        <Divider
          orientation="vertical"
          flexItem
          sx={
            matches
              ? { background: Colors.secondary }
              : { background: Colors.dim_grey }
          }
        />

        <ActionListItemButton>
          <ActionListItemIcon>
            <Person
              sx={
                matches
                  ? { color: Colors.secondary }
                  : { color: Colors.dim_grey }
              }
            />
          </ActionListItemIcon>
        </ActionListItemButton>
        <Divider
          orientation="vertical"
          flexItem
          sx={
            matches
              ? { background: Colors.secondary }
              : { background: Colors.dim_grey }
          }
        />
      </MyList>
    </Component>
  );
};

export default Action;
