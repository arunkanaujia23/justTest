import Link from 'next/link'

import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductList =  ({data}) => {
  // const response = await fetch('https://fakestoreapi.com/products')
  // const data = await response.json()

  // const sortAscending = (data, key) => {
  //   return [...data].sort((a, b) => (a[key] > b[key] ? 1 : -1));
  // };
  
  // // Function to sort data in descending order
  // const sortDescending = (data, key) => {
  //   return [...data].sort((a, b) => (a[key] < b[key] ? 1 : -1));
  // };
  // console.log(data)
  return (
    <div className='container mx-auto'>
      {/* <div className='m-auto px-10 flex gap-4'>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Acceding Order
        </button>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Descending  Order
        </button>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 p-10" >
        {
          data?.map((item, index) => {
            return (
             <ProductCard key={index} item={item}/>
            )
          })
        }


      </div>
    </div>

  )
}

export default ProductList


