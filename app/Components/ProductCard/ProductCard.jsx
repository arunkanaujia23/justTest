import Link from 'next/link'
import React from 'react'

const ProductCard = ({ item }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col max-w-[500px]" >
      {/* <a href="#" /> */}
      <div className="relative">
        <Link href={`/product/${item?.category}/${item?.id}`} >

          <img className="w-full h-[400px] object-contain" src={item?.image} alt={item?.title} />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
          </div>
        </Link>

      </div>
      <div className="px-6 py-4 mb-2 h-full">
        <div className='flex justify-between items-center'>
          <div>
            <Link href={`/product/${item?.category}/${item?.id}`} className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out    truncate w-64">{item?.title}</Link>
          </div>
          <div className=" text-end  rounded bg-slate-500  text-white px-2.5 py-0.5 text-xs font-semibold w-fit">{item?.category}</div>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 ">
          {item?.description}
        </p>

        <p className='font-bold my-3 text-center text-2xl'>$ {item?.price}</p>
       
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p className="text-gray-600 font-bold text-sm ml-1">
          {item?.rating?.rate}
            <span className="ms-2 text-gray-500 font-normal">({item?.rating?.count} reviews)</span>
          </p>
        </div>

      </div>

    </div>
  )
}

export default ProductCard