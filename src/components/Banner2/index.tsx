import Image from 'next/image'
import React from 'react'

const Banner2 = () => {
  return (
    <section className='relative w-full h-[448px] gap-10'>
      <Image className='w-full object-cover' src={"/images/Banner-2.png"} alt='Banner' width={1440} height={448}></Image>
      <div className='flex flex-col absolute inset-0 items-center justify-center text-center text-white space-y-4'>
        <span className='flex flex-col text-white'>
            <span className='text-[72px] leading-[72px] p-2'>
            <span className='font-thin' >Big Summer </span><span className='font-medium'>Sale</span>
            </span>
            <span className='text-[16px] leading-8'>Commodo fames vitae vitae leo mauris in. Eu consequat.</span>
        </span>
        <button className='border border-white px-14 py-4'>Shop Now</button>
      </div>
    </section>
  )
}

export default Banner2
