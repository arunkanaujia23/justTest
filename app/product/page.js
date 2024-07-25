"use client"
import React, { useEffect, useState } from "react";
import ProductList from "../Components/ProductList/ProductList";

const ProductPage =  () => {
    const [data, setData] = useState()
    useEffect(() => {
        const fetchApi = async() => {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const value = await response.json();
            // return value
            setData(value);
        }
        fetchApi();
    }, []);
 
const ShortAscending = () => {
    setData(data?.slice().sort((a, b) => b.price - a.price)) 
  
}
const ShortDescending = () => {
    setData(data?.slice().sort((a, b) => a.price - b.price))
  
}

  return (
    <>
      <div className="container mx-auto">
        <div className="m-auto px-10 flex gap-4">
          <button onClick={ShortAscending} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Acceding Order
          </button>
          <button onClick={ShortDescending} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Descending Order
          </button>
        </div>
      </div>
      <ProductList data={data} />
    </>
  );
};

export default ProductPage;
