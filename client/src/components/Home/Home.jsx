import React from "react";
import Banner from "../Banner/Banner";
import Promotions from "../Promotions/Promotions";
import Products from "../Product/Products";
import { useSelector } from "react-redux";
import { shuffle } from "underscore";

const Home = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <>
      <Banner />
      <Promotions />
      {products !== null && <Products products={shuffle(products)} />}
    </>
  );
};

export default Home;
