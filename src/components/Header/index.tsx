import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between  text-black text-opacity-30 w-full items-center h-[88px] px-[160px] py-[16]'>
      <div>
        <Link href={"/"}><Image src={"/images/H-logo.png"} alt="Logo" width={65.4} height={22.87} ></Image></Link>
      </div>
      <div className='flex'><input type="search" className='bg-[#F5F5F5] p-4 rounded-lg w-[372px] h-14' placeholder='Search'/></div>
      <div className='flex justify-between gap-14' >
        <span className='relative hover:scale-110 transition-transform ease-in-out hover:text-black hover:underline underline-offset-8 hover:decoration-amber-400 duration-300 hover:decoration-2 '>Home</span>
        <span className='relative hover:scale-110 transition-transform ease-in-out hover:text-black hover:underline underline-offset-8 hover:decoration-amber-400 duration-300 hover:decoration-2 '>About</span>
        <span className='relative hover:scale-110 transition-transform ease-in-out hover:text-black hover:underline underline-offset-8 hover:decoration-amber-400 duration-300 hover:decoration-2 '>Contact Us</span>
        <span className='relative hover:scale-110 transition-transform ease-in-out hover:text-black hover:underline underline-offset-8 hover:decoration-amber-400 duration-300 hover:decoration-2'>Blog</span>
      </div>
{/* <div className='flex justify-between gap-14'>
  <span className='hover:scale-110 transition-transform ease-in-out '>Home</span>
  <span className='hover:scale-110 transition-transform ease-in-out '>About</span>
  <span className='hover:scale-110 transition-transform ease-in-out '>Contact Us</span>
  <span className='hover:scale-110 transition-transform duration-300 ease-in-out hover:text-black hover:underline underline-offset-8 hover:decoration-amber-400 hover:decoration-2'>Blog</span>
</div> */}




      <div className='flex gap-6'>
        <span className="relative p-2 hover:scale-125 hover:ring-4 hover:ring-amber-400 rounded-full transition-transform duration-300 ease-in-out"><Image src={"/images/Favorites.png"} alt="Favorites" width={32} height={32} ></Image></span>
        <span className="relative p-2 hover:scale-125 hover:ring-4 hover:ring-amber-400 rounded-full transition-transform duration-300 ease-in-out"><Image src={"/images/Cart.png"} alt="Cart" width={32} height={32}></Image></span>
        <span className="relative p-2 hover:scale-125 hover:ring-4 hover:ring-amber-400 rounded-full transition-transform duration-700 ease-in-out"><Image src={"/images/User.png"} alt="User" width={32} height={32}></Image></span>
      </div>
    </div>
  )
}

export default Header
