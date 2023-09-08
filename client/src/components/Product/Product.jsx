import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  ProductBox,
  ProductImage,
  ImageBox,
  IconBox,
} from "../../styles/Product";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../theme/theme";

const Product = ({ name, price, image }) => {
  const BaseUrl = "http://localhost:5000";
  const [isFav, setIsFav] = useState(false);

  return (
    <ProductBox>
      <ImageBox>
        <ProductImage
          onClick={() => {}}
          sx={{ backgroundImage: `url(${BaseUrl}/uploads/${image})` }}
        />
        <IconBox
          onClick={() => {
            setIsFav(!isFav);
          }}
        >
          <FavoriteIcon
            sx={{
              fontSize: "25px",
              color: isFav ? Colors.secondary : Colors.dove_gray,
            }}
          />
        </IconBox>
      </ImageBox>
      <Typography mt={2} variant="h6" fontWeight={500}>
        {name}
      </Typography>
      <Typography mt={1} variant="h6" fontWeight={500} fontSize={"15px"}>
        $ {price}
      </Typography>
    </ProductBox>
  );
};

export default Product;
