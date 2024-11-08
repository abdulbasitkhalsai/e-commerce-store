import { assistanceItem, services, socialLinks } from '@/constant';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col bg-black px-40 py-[104px] font-inter text-white'>
      <div className='flex justify-between'>
        <div className='w-96 h-[48px] gap-6 flex flex-col'>
          <Link href={"/"}><Image src={"/images/F-Logo.png"} alt='Logo' width={65.4} height={22.87}></Image></Link>
          <span className=' text-wrap'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</span>
        </div>
        <div className='flex justify-between w-fit'>
          <span className=''>
            <h3 className='font-semibold text-[16] leading-4 pb-4'>Services</h3>
            <ul className='flex flex-col gap-2'>
              {services.map((item, index) => (<li key={index} className='w-[295px] h-8'><Link href={item.link} className='text-sm leading-6'>{item.title}</Link>{}</li>))}
            </ul>
          </span>
          <span>
            <h3  className='font-semibold text-[16] leading-4 pb-4'>Assistance to the buyer</h3>
            <ul className='flex flex-col'>
              {assistanceItem.map((item, index) => (<li key={index} className='w-[295px] h-8'><Link href={item.link} className='text-sm leading-6'>{item.title}</Link>{}</li>))}
            </ul>
          </span>
        </div>
      </div>
      <ul className='flex max-w-[173px] justify-between gap-2'>
        {socialLinks.map((item, index) => (<li key={index} className='flex'><Link href={item.hrefIcon} target='_blank' rel='noopener noreferrer'><Image src={item.srcIcon} alt={item.altIcon} width={16} height={16}></Image></Link></li>))}
      </ul>
    </div>
  )
}

export default Footer
