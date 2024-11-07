import { DiscItems } from '@/constant';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const DiscProd = () => {
  return (
    <div className=' px-40 py-20 justify-between font-inter'>
      <div className='py-8'>Discounts upto -50%</div>
      <div className='flex justify-between flex-wrap w-full'>
        {DiscItems.map((item, index) => (
            <div key={index} className='flex flex-col items-center text-center bg-[#F6F6F6] gap-4 px-4 py-6 rounded-[9px]'>
                <Image className='self-end' src={item.icon} width={32} height={32} alt={item.altIcon}></Image>
                <Image src={item.image} width={160} height={160} alt={item.altImage}></Image>
                <span className='w-[236px] h-12 text-center p- font-medium text-[16px] leading-6'>{item.description}</span>
                <span className='font-semibold text-2xl'>${item.price}</span>
                <Link className='bg-black text-white text-sm leading-6 py-3 px-16 rounded-lg' href={"/"}>{item.button}</Link>   
            </div>
            )) }

      </div>
    </div>
  )
}

export default DiscProd
