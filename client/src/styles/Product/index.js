import { styled, Typography, Box } from "@mui/material";
import { Colors } from "../../theme/theme";
export const ProductsContainer = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  width: "100%",
}));
export const ProductsTitle = styled(Typography)(({ theme }) => ({
  fontsize: "2.5rem",
  fontWeight: "500",
}));

export const ProductsList = styled(Box)(() => ({
  marginTop: "20px",
  width: "75%",
}));

export const ImageBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  backgroundColor: Colors.light_gray,
  position: "relative",
}));

export const ProductImage = styled(Box)(({ src }) => ({
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "240px",
  cursor: "pointer",
}));

export const ProductBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const IconBox = styled(Box)(() => ({
  background: "white",
  height: "40px",
  width: "40px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  right: "10px",
  top: "10px",
  cursor: "pointer",
}));
