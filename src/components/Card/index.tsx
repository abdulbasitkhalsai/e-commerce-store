import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className='bg-white px-40 py-14 font-inter'>
    <div>
      <ul className='flex gap-8 py-8 text-[#8B8B8B] font-medium text-[18px] leading-[32px]'>
        <li className='hover:underline underline-offset-4 hover:decoration-black hover:text-black'>New Arrival</li>
        <li className='hover:underline underline-offset-4 hover:decoration-black hover:text-black'>Best Seller</li>
        <li className='hover:underline underline-offset-4 hover:decoration-black hover:text-black'>Featured Products</li>
      </ul>
    </div>
    <div className='flex justify-between flex-wrap gap-4 '>
    <div className='flex flex-col px-6 py-4 items-center border rounded-lg space-y-4 bg-[#F6F6F6]'>
      <span className='self-end'><Image src={"/images/Favorites.png"} width={32} alt='Favorites' height={32}></Image></span>
      <span><Image src={"/images/Card-Iphone 14 pro 1.png"} alt='iPhone 14 Pro' width={"160"} height={"160"} className=''></Image></span>
      <span className='max-w-[236px] p-2 text-center font-medium text-[16px]'>Apple iPhone 14 Pro Max 128GB Deep Purple</span>
      <span className='font-semibold text-2xl'>$900</span>
      <span><button className='bg-black text-white py-3 px-16 rounded-lg'>Buy Now</button></span>
    </div>


    <div className='flex flex-col px-6 py-4 items-center border rounded-lg space-y-4 bg-[#F6F6F6]'>
      <span className='self-end'><Image src={"/images/Favorites.png"} width={32} alt='Favorites' height={32}></Image></span>
      <span><Image src={"/images/Card-Camera.png"} alt='iPhone 14 Pro' width={"160"} height={"160"} className=''></Image></span>
      <span className='max-w-[236px] text-center p-2 font-medium text-[16px]'>Blackmagic Pocket Cinema Camera 6k</span>
      <span className='font-semibold text-2xl'>$2535</span>
      <span><button className='bg-black text-white py-3 px-16 rounded-lg'>Buy Now</button></span>
    </div>

    <div className='flex flex-col px-6 py-4 items-center border rounded-lg space-y-4 bg-[#F6F6F6]'>
      <span className='self-end'><Image src={"/images/Favorites.png"} width={32} alt='Favorites' height={32}></Image></span>
      <span><Image src={"/images/Card-SWatch.png"} alt='iPhone 14 Pro' width={"160"} height={"160"} className=''></Image></span>
      <span className='max-w-[236px] text-center p-2 font-medium text-[16px]'>Apple Watch Series 9 GPS 41mm Starlight Aluminium</span>
      <span className='font-semibold text-2xl'>$399</span>
      <span><button className='bg-black text-white py-3 px-16 rounded-lg'>Buy Now</button></span>
    </div>


    <div className='flex flex-col px-6 py-4 items-center border rounded-lg space-y-4 bg-[#F6F6F6]'>
      <span className='self-end'><Image src={"/images/Favorites.png"} width={32} alt='Favorites' height={32}></Image></span>
      <span><Image src={"/images/Card-HeadPhone.png"} alt='iPhone 14 Pro' width={"160"} height={"160"} className=''></Image></span>
      <span className='max-w-[236px] text-center p-2 font-medium text-[16px]'>AirPods Max Silver
      Starlight Aluminium</span>
      <span className='font-semibold text-2xl'>$549</span>
      <span><button className='bg-black text-white py-3 px-16 rounded-lg'>Buy Now</button></span>
    </div>


    <div className='flex flex-col px-6 py-4 items-center border rounded-lg space-y-4 bg-[#F6F6F6]'>
      <span className='self-end'><Image src={"/images/Favorites.png"} width={32} alt='Favorites' height={32}></Image></span>
      <span><Image src={"/images/Card-Watch.png"} alt='iPhone 14 Pro' width={"160"} height={"160"} className=''></Image></span>
      <span className='max-w-[236px] text-center p-2 font-medium text-[16px]'>Samsung Galaxy Watch6 Classic 47mm Black</span>
      <span className='font-semibold text-2xl'>$369</span>
      <span><button className='bg-black text-white py-3 px-16 rounded-lg'>Buy Now</button></span>
    </div>


    <div className='flex flex-col px-6 py-4 items-center border rounded-lg space-y-4 bg-[#F6F6F6]'>
      <span className='self-end'><Image src={"/images/Favorites.png"} width={32} alt='Favorites' height={32}></Image></span>
      <span><Image src={"/images/Card-Phone.png"} alt='iPhone 14 Pro' width={"160"} height={"160"} className=''></Image></span>
      <span className='max-w-[236px] text-center p-2 font-medium text-[16px]'>Galaxy Z Fold5 Unlocked | 256GB | Phantom Black</span>
      <span className='font-semibold text-2xl'>$1799</span>
      <span><button className='bg-black text-white py-3 px-16 rounded-lg'>Buy Now</button></span>
    </div>


    <div className='flex flex-col px-6 py-4 items-center border rounded-lg space-y-4 bg-[#F6F6F6]'>
      <span className='self-end'><Image src={"/images/Favorites.png"} width={32} alt='Favorites' height={32}></Image></span>
      <span><Image src={"/images/Card-Ear-Buds.png"} alt='iPhone 14 Pro' width={"160"} height={"160"} className=''></Image></span>
      <span className='max-w-[236px] text-center p-2 font-medium text-[16px]'>Galaxy Buds FE
      Graphite</span>
      <span className='font-semibold text-2xl'>$99.99</span>
      <span><button className='bg-black text-white py-3 px-16 rounded-lg'>Buy Now</button></span>
    </div>


    <div className='flex flex-col px-6 py-4 items-center border rounded-lg space-y-4 bg-[#F6F6F6]'>
      <span className='self-end'><Image src={"/images/Favorites.png"} width={32} alt='Favorites' height={32}></Image></span>
      <span><Image src={"/images/Card-SWatch.png"} alt='iPhone 14 Pro' width={"160"} height={"160"} className=''></Image></span>
      <span className='max-w-[236px] text-center p-2 font-medium text-[16px]'>Apple Watch Series 9 GPS 41mm Starlight Aluminium</span>
      <span className='font-semibold text-2xl'>$399</span>
      <span><button className='bg-black text-white py-3 px-16 rounded-lg'>Buy Now</button></span>
    </div>


    </div>
    </div>
  )
}

export default Card
