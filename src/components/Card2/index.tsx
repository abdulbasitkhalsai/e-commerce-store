import Image from 'next/image'
import React from 'react'

interface ICard2Prop {
    title: string;
    description: string;
    image: string;
}
const Card2 = (card2Prop : ICard2Prop) => {
  return (
        <div className='flex flex-col font-inter relative gap-6 pt-[376px] px-8 pb-14'>
            <span className='h-[360px] absolute top-3 right-3'><Image src={card2Prop.image} width={"360"} height={"360"} alt='Popular Products'></Image></span>
            <span className='text-[33px] leading-[48px] text-wrap font-light'>{card2Prop.title}</span>
            <span className='w-[296px] h-[72px] font-medium text-[14px] text-wrap leading-6 text-[#909090]'>{card2Prop.description}</span>
            <span><button className='border rounded-md px-14 py-4'>Shop Now</button></span>
        </div>
  )
}

export default Card2
