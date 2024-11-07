import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#000000] w-full flex px-[160px] font-inter'>
      <div className='flex flex-col justify-center gap-6'>
        <span className='w-[714px] h-[32px] font-semibold text-[#909090]'>Pro.Beyond.</span>
        <span className='w-[714px] h-[72px] text-[#FFFFFF]'>
        <span className='text-[96px] leading-[72px] font-light tracking--1'>IPhone 14 </span> <span className='text-7xl font-semibold'>Pro</span>
        </span>
        <span className='text-[#909090] font-medium text-[18px] leading-6'>Created to Change everything for the better. For everyone</span>
        <span><button className='px-14 py-4 border text-[#FFFFFF] border-white rounded-md'>Shop Now</button></span>
      </div>
      <div><Image src={"/images/Hero.png"} alt='IPhone' width={406} height={632} priority></Image></div>
    </div>

  )
}

export default Hero
