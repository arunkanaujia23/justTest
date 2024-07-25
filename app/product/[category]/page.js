import ProductCard from "@/app/Components/ProductCard/ProductCard";
import ProductList from "@/app/Components/ProductList/ProductList";
import React from "react";

const CategoryPage = async ({ params }) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${params?.category}`
  );
  const data = await response.json();
  console.log(params);
  
  return <ProductList data={data} />;
};

export default CategoryPage;
