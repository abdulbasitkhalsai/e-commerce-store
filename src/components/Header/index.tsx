import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { hIcons, navItems } from '@/constant'

const Header = () => {
  return (
    <div className='flex justify-between text-black text-opacity-30 w-full items-center h-[88px] px-[160px] py-[16]'>
      <div>
        <Link href={"/"}><Image src={"/images/H-Logo.png"} alt="Logo" width={65.4} height={22.87} ></Image></Link>
      </div>
      <div className='flex'><input type="search" className='bg-[#F5F5F5] p-4 rounded-lg w-[372px] h-14' placeholder='Search'/></div>
      <div className='flex justify-between gap-14 list-none' >
        {navItems.map((item, index) => (<li key={index} className='relative hover:scale-110 transition-transform ease-in-out hover:text-black hover:underline underline-offset-8 hover:decoration-amber-400 duration-300 hover:decoration-2 '><Link href={item.link}>{item.title}</Link></li>))}
      </div>
      <div className='flex gap-6 list-none'>
        {hIcons.map((item, index) =>(<li key={index} className='relative px-2 py-[2px] hover:scale-125 rounded-full transition-transform duration-300 ease-in-out group '>
          <Link href={"/"}><Image src={item.link} alt='{item.title}' width={32} height={32} /></Link>
          <span className='absolute bottom-0 left-0 w-0 h-[2.5px] bg-amber-400 transition-all duration-300 ease-in-out group-hover:w-full '></span>
        </li>))}
      </div>
    </div>
  )
}

export default Header
