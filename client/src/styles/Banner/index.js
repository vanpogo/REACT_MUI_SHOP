import { Box, styled } from "@mui/material";
import { Colors } from "../../theme/theme";

export const BannerContainer = styled(Box)(({ theme }) => ({
  background: Colors.dove_gray,
  display: "flex",
  width: "100%",
  height: "420px",
  justifyContent: "space-between",
  [theme.breakpoints.down("xl")]: {
    height: "400px",
  },
  [theme.breakpoints.down("lg")]: {
    height: "400px",
  },

  [theme.breakpoints.down("md")]: {
    height: "320px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
    height: "550px",
    display: "flex",
    justifyContent: "center",
  },
}));

export const BannerImage = styled(Box)(({ theme }) => ({
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "60%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "70%",
  },
}));
