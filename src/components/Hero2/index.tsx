import Image from 'next/image'
import React from 'react'

const Hero2 = () => {
  return (
    <div className='flex'>
      <div className='w-1/2'>
        <div className='w-full h-[328px] pr-12 pl-[334px] flex justify-start items-center drop-shadow relative'>
            <Image className='w-[360px] h-[343px] object-contain absolute left-0' 
            src={"/images/Hero-PlayStation.png"} width={360} height={343} alt='PlayStation 5'></Image>
            <div className='flex flex-col items-center pl-4'>
            <span className='text-[#000000]'>Playstation 5</span>
            <span className='text-[#909090]'>Incredibly powerful CPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</span>
            </div>
        </div>
        <div className='flex h-[272px]'>
            <div className='flex w-1/2 pl-[156px] pr-12 bg-[#EDEDED] items-center relative'>
                <Image className='w-[104px] h-full object-contain absolute left-0' width={104} height={272} alt='Airpod' src={"/images/Hero-Airpod.png"}></Image>
                <div className='flex flex-col'>
                    <span>Apple</span>
                    <span>Airpods</span>
                    <span>Max</span>
                    <span>Computational audio, Listen, it's powerful</span>
                </div>
            </div>
            <div  className='flex w-1/2 pr-[48px] bg-[#353535] pl-[156px] relative items-center'>
                <Image src={"/images/Hero-Airbud.png"} width={136} height={190} alt='Air Bud' className='absolute left-0'></Image>
                <div className='flex flex-col text-white'>
                    <span>Apple Vision <span>Pro</span></span>
                    <span className='text-[#909090]'>An immersive way to experience entertainment</span>
                </div>
            </div>
        </div>
      </div>
      
      <div className='bg-[#EDEDED] items-center flex w-1/2 pt-11 pb-11 pl-14 pr-[264px] relative'>
        <div className='flex flex-col text-center'>
            <span>Macbook</span>
            <span>Air</span>
            <span>The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display</span>
            <span><button>Shop Now</button></span>
        </div>

        <Image
  className="absolute right-0 top-1/2 transform -translate-y-1/2"
  src={"/images/Hero-Screen.png"}
  alt="IPhone"
  height={100}
  width={250}
/>
{/* Second Image, positioned slightly left of the first */}
<Image
  className="absolute right-[260px] top-1/2 transform -translate-y-1/2"
  src={"/images/Hero2-Body.png"}
  alt="IPhone-Body"
  height={100}
  width={450}
/>

        {/* <Image className='absolute right-0' src={"/images/Hero-Screen.png"} alt='IPhone' height={100} width={250}></Image>
        <Image className='absolute' src={"/images/Hero2-Body.png"} alt='IPhone-Body' height={100} width={450}></Image> */}
        </div>
      
    </div>
  )
}

export default Hero2
