
import React from "react";
import ProductList from "../Components/ProductList/ProductList";

const ProductPage = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const value = await response.json();

  return (
    <>
      <ProductList value={value} />
    </>
  );
};

export default ProductPage;
