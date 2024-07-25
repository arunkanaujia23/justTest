'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductList =  ({value}) => {
  const [data, setData] = useState(value)
  const [resetData, setResetData] = useState(value)

  const ShortAscending = () => {
        setData(data?.slice().sort((a, b) => b.price - a.price)) 
      
    }
    const ShortDescending = () => {
        setData(data?.slice().sort((a, b) => a.price - b.price))
      
    }
    const handleReset = () => {
      setData(resetData)
      
    }
  return (
    <div className='container mx-auto'>
      <div className='m-auto px-10 flex flex-wrap items-center justify-center gap-4'>
        <button onClick={ShortAscending} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Acceding Order
        </button>
        <button onClick={ShortDescending} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Descending  Order
        </button>
        <button onClick={handleReset} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Reset
        </button>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 p-10" >
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


