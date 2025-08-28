import React from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Header = () => {
  return (
    <div className='absolute z-10 flex w-[100%] px-6 items-center justify-between bg-gradient-to-b from-black'>
      <div className="relative w-56">
        <img
          className="w-56"
          src="https://imgs.search.brave.com/0YDP4ULqf3KisE_EF3EGtdNrFQYc42-LgzdzBKzVXRc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzAy/L05ldGZsaXgtbG9n/by01MDB4MjgxLmpw/Zw"
          alt="logo"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      </div>

      <div className='flex items-center'>
            <IoIosArrowDropdownCircle color='white' size="24px"/>
            <h1 className='text-lg font-medium text-white'>Ajit Singh Yadav</h1>
            <div className='ml-4'>
                <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
                <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
            </div>
      </div>
    
    </div>
  )
}

export default Header
