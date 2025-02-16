import Link from 'next/link';
import React from 'react'

const Home = async() => {
    const response = await fetch(`https://fakestoreapi.com/products/categories`);
    const data = await response.json();

  return (
    <div className='container mx-auto h-[500px] flex items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center'>
            {
                data?.map((data, index) => {
                    return (
                        <Link href={`/product/${data}`} key={index} className='p-4 border border-gray-200 rounded text-center'>
                            <h2>{data}</h2>
                        </Link >
                    )
 
                })
            }
            <div></div>
        </div>
    </div>
  )
}

export default Home