import ProductCard from '@/app/Components/ProductCard/ProductCard';
import React from 'react'

const IdPage = async ({params}) => {

  const response = await fetch(`https://fakestoreapi.com/products/${params?.id}`)
  const data = await response.json();

  return (
    <div className='container mx-auto '>
      <ProductCard item={data}/>
      
    </div>
  )
}

export default IdPage