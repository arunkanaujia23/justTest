import Link from 'next/link'
import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col" >
    {/* <a href="#" /> */}
    <div className="relative">
      <Link href={`/product/${item?.category}/${item?.id}`} >

        <img className="w-full h-[400px] object-contain" src={item?.image} alt={item?.title} />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
        </div>
      </Link>

    </div>
    <div className="px-6 py-4 mb-2 h-full">
      <a href="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out  mb-2  line-clamp-1">{item?.title}</a>
      <p className="text-gray-500 text-sm line-clamp-2 ">
        {item?.description}
      </p>
      <div class=" my-5 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold w-fit">{item?.category}</div>
      <p className='font-bold'>Rs {item?.price}</p>
      <div className='flex justify-between mt-5 font-medium'>
        <div>Rating: {item?.rating?.rate}</div>
        <div>{item?.rating?.count}</div>
      </div>
    </div>

  </div>
  )
}

export default ProductCard