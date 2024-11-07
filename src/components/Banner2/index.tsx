import Image from 'next/image'
import React from 'react'

const Banner2 = () => {
  return (
    <section>
      <Image className='w-screen' src={"/images/Banner-2.png"} alt='Banner' width={1440} height={448}></Image>
    </section>
  )
}

export default Banner2
