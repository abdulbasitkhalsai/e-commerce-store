const socialLinks  = [
  {
    altIcon: "X",
    srcIcon: "/images/Twitter.png",
    hrefIcon: "https://twitter.com/?lang=en"
  },
  {
    altIcon: "Facebook",
    srcIcon: "/images/Facebook.png",
    hrefIcon: "https://www.facebook.com"
  },
  {
    altIcon: "Tiktok",
    srcIcon: "/images/Tiktok.png",
    hrefIcon: "https://www.tiktok.com/"
  },
  {
    altIcon: "Instagram",
    srcIcon: "/images/Instagram.png",
    hrefIcon: "https://www.instagram.com/"
  }
];
const services : ILink[] = [
  {
    title: "Bonus program",
    link: "/bonus-program"
  },
  {
    title: "Gift cards",
    link: "/Gift cards"
  },
  {
    title: "Credit and payment",
    link: "/Credit and payment"
  },
  {
    title: "Service contracts",
    link: "/Service contracts,"
  },
  {
    title: "Non-cash account",
    link: "/Non-cash account"
  },
  {
    title: "Payment",
    link: "/Payment"
  }
]

const assistanceItem : ILink[] = [
  {
    title: "Find an order",
    link: "/FAQ"
  },
  {
    title: "Terms of delivery",
    link: "/Contact us"
  },
  {
    title: "Exchange and return of goods",
    link: "/Terms and conditions"
  },
  {
    title: "Guarantee",
    link: "/Privacy policy"
  },
  {
    title: "Frequently asked questions",
    link: "/Privacy policy"
  },
  {
    title: "Terms of use of the site",
    link: "/About us"
  }
]


import { ILink } from '@/constant'
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
