import Image from 'next/image'
import React from 'react'

const Category = () => {
  return (
    <div className='w-full px-40 py-20 bg-[#FAFAFA]'>
        <div className='flex justify-between'>
            <h2>Browse by Category</h2>
            <span className='flex gap-4'><Image src={"/images/Icon.png"} alt='Arrow' width={12.66} height={23.31}></Image>
            <Image src={"/images/Icon1.png"} alt='Arrow' width={12.66} height={23.31}></Image></span>
        </div>
        <div className='flex gap-8'>
            <div><span></span></div>
            <span className='flex flex-col px-[52px] py-6 bg-[#EDEDED] justify-between w-40 h-32 items-center'><Image src={"/images/Icon-Phones.png"} alt='Phone Icon' width={48} height={48}></Image>Phone</span>
            <span className='flex flex-col px-[52px] py-6 bg-[#EDEDED] justify-between w-40 h-32'><Image src={"/images/Icon-Phones.png"} alt='Phone Icon' width={48} height={48}></Image>Smart Watches</span>
            <span className='flex flex-col px-[52px] py-6 bg-[#EDEDED]'><Image src={"/images/Icon-Phones.png"} alt='Phone Icon' width={48} height={48}></Image>Camera</span>
            <span className='flex flex-col px-[52px] py-6 bg-[#EDEDED]'><Image src={"/images/Icon-Phones.png"} alt='Phone Icon' width={48} height={48}></Image>Headphones</span>
            <span className='flex flex-col px-[52px] py-6 bg-[#EDEDED]'><Image src={"/images/Icon-Phones.png"} alt='Phone Icon' width={48} height={48}></Image>Computers</span>
            <span className='flex flex-col px-[52px] py-6 bg-[#EDEDED]'><Image src={"/images/Icon-Phones.png"} alt='Phone Icon' width={48} height={48}></Image>Gaming</span>
        </div>
    </div>
  )
}

export default Category
