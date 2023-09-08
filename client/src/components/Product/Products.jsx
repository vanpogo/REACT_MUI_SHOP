import React from "react";
import {
  ProductsContainer,
  ProductsList,
  ProductsTitle,
} from "../../styles/Product";
import Product from "./Product";
import { Grid } from "@mui/material";

const Products = ({ products }) => {
  return (
    <ProductsContainer>
      <ProductsTitle mt={3} variant="h5" align="center">
        Our Products
      </ProductsTitle>
      <ProductsList sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {products.length > 1 &&
            products.map(({ _id, name, price, image }) => (
              <Grid key={_id} item xs={12} sm={6} md={6} lg={4} xl={4}>
                <Product id={_id} image={image} name={name} price={price} />
              </Grid>
            ))}
        </Grid>
      </ProductsList>
    </ProductsContainer>
  );
};

export default Products;
