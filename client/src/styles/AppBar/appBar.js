import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import { Colors } from "../../theme/theme";
import "@fontsource/montez";

//CONTAINER
export const AppBarContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2px 8px",
  marginTop: 4,
});

//HEADER
export const AppBarHeader = styled(Typography)({
  padding: "4px",
  fontFamily: "'Montez', 'cursive'",
  fontSize: "4em",
  color: Colors.secondary,
  cursor: "pointer",
  ":hover": {
    textShadow:
      "2px 2px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(0, 0, 0, 0.25)",
    transition: "all 0.8s ease",
  },
});

export const MyList = styled(List)(({ type }) => ({
  width: "100%",
  display: type === "row" ? "flex" : "block",
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionListItemButton = styled(ListItemButton)({
  display: "flex",
  justifyContent: "center",
  width: "6vw",
});

export const ActionListItemIcon = styled(ListItemIcon)({
  display: "flex",
  justifyContent: "center",
});

export const ActionIconContainerMobile = styled(Box)({
  display: "flex",
  justifyContent: "center",
  background: Colors.shaft,
  color: "white",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
});

export const ActionIconContainerDesktop = styled(Box)({ flexGrow: 0 });

export const TopAppBar = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

export const CloseDrawerButton = styled(IconButton)({
  position: "absolute",
  left: "200px",
  top: 10,
  zIndex: 1999,
});
