import React from 'react'
import { FaHome } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='bg-blue-400 h-screen px-5'>
        <div className='px-5 py-10 flex items-center justify-center border-b-2 border-gray-300'>
            <h1 className='text-2xl font-bold leading-5 text-white'>Admin</h1>
        </div>
        <div className='flex items-center gap-2 py-5 border-b-2 border-gray-300'>
            <FaHome color='white'/>
            <p className='text-white leading-5 text-sm cursor-pointer'>Dashboard</p>
        </div>
    </div>
  )
}

export default Sidebar