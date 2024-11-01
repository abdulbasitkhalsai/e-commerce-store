import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#000000] w-full flex px-[160px] font-inter text-white'>
      <div className='flex flex-col justify-center'>
        <span className='w-[714px] h-[32px] font-semibold' >Pro.Beyond.</span>
        <span className='w-[714px] h-[72px]'>
        <span className='text-7xl font-thin'>IPhone 14 </span> <span className='text-7xl font-semibold'>Pro</span>
        </span>
        <span>Created to Change everything for the better. For everyone</span>
        <span><button className='p-[24px]'>Shop Now</button></span>
      </div>
      <div><Image src={"/images/Hero.png"} alt='IPhone' width={406} height={632}></Image></div>
    </div>
  )
}

export default Hero
