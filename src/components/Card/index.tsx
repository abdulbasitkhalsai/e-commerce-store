import { NewArrival, ProdTab } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <div className='bg-white px-40 py-14 font-inter'>
    <div>
      <ul className='flex gap-8 py-8 text-[#8B8B8B] font-medium text-[18px] leading-[32px]'>
        {ProdTab.map((item, index) => (<li key={index} className='hover:underline hover:scale-110 transition-transform ease-in-out  duration-300 underline-offset-8 hover:decoration-amber-400 hover:text-black hover:decoration-2'><Link href={item.link}>{item.title}</Link></li>))}
      </ul>
    </div>
    <ul className='flex justify-between flex-wrap gap-4 list-none '>
      {NewArrival.map((item, index) =>(<li key={index}>
          <Link href={"/"}>
          <div className='flex flex-col px-6 py-4 items-center border rounded-lg space-y-4 bg-[#F6F6F6]'>
            <span className='self-end'><Image src={item.icon} alt={item.altIcon} height={32} width={32}></Image></span>
            <span><Image src={item.image} alt={item.altImage} width={160} height={160}></Image></span>
            <span className='max-w-[236px] p-2 text-center font-medium text-[16px]'>{item.description}</span>
            <span className='font-semibold text-2xl'>${item.price}</span>
            <span><button className='bg-black text-white py-3 px-16 rounded-lg'>{item.button}</button></span>
          </div>
          </Link>
      </li>))}
    </ul>
    </div>
  )
}

export default Card
