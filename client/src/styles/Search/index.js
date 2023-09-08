import { styled, Box, TextField, IconButton } from "@mui/material";
import { Colors } from "../../theme/theme";

export const SearchContainer = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  background: Colors.primary,
  zIndex: 99999,
  top: 0,
  left: 0,
  opacity: "0.8",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const SearchTextField = styled(TextField)(({ theme }) => ({
  ".MuiInputLabel-root": {
    color: Colors.secondary,
  },
  ".MuiInput-root": {
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    color: Colors.secondary,
  },
  ".MuiInput-root:before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  },
  padding: "0 0 0 40px",
}));

export const CloseSearchIcon = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "40px",
  right: "40px",
}));
