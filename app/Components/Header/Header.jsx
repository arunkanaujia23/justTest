import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="text-gray-600 body-font mb-20">
  <div className="container mx-auto flex flex-col md:flex-row   flex-wrap p-5  items-center justify-between">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <Link href={`/`} className="ml-3 text-xl">Arun Kanaujia</Link>
    </a>
    <nav className=" ">
      <Link href={`/`} className="mr-5 hover:text-gray-900">Home</Link>
      <Link href={'/product'} className=" hover:text-gray-900">Product</Link>
     
    </nav>
  
  </div>
</header>


  )
}

export default Header