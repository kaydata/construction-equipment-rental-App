import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-6 bg-gray-800 text-white'>
        <div className='flex-grow'>
            <Link href="/" className="text-2xl font-bold">Mjengo Hire</Link>
        </div>
        <div className="flex-grow text-center">
            <Link href="/EquipmentListing" className="px-4">View Listings</Link>
            <Link href="/postListings" className="px-4">Post your Listing</Link>
            <Link href="blog" className="px-4">Blog</Link>
        </div>
        <div className="flex-grow text-right">
            <Link href="" className="px-4 py-2 ml-2 bg-green-500 rounded hover:bg-green-700 transition-colors duration-300">Sign In </Link>
            <Link href="" className="px-4 py-2 ml-2 bg-red-500 rounded hover:bg-red-700 transition-colors duration-300">Logout</Link>
        </div>

    </nav>
  )
}

export default Navbar