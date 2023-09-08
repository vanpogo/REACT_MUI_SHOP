import { styled, Box, Typography } from "@mui/material";
import { Colors } from "../../theme/theme";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  background: Colors.secondary,
  width: "100%",
  padding: 10,
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  color: Colors.white,
  fontSize: "2.5rem",
  fontFamily: "'Montez', 'cursive'",
  [theme.breakpoints.up("xl")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));
