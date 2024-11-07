import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col bg-black px-40 py-[104px] font-inter w-full text-white'>
      <div className='flex justify-between'>
        <div className='w-fit'>
          Logo + description
        </div>
        <div className='flex justify-between w-fit'>
          <span>
            <h3>Services</h3>
            <ul className='flex flex-col'>
              <li>Bonus Rendering List</li>
              <li>Bonus Rendering List</li>
              <li>Bonus Rendering List</li>
              <li>Bonus Rendering List</li>
              <li>Bonus Rendering List</li>
            </ul>
          </span>
          <span>
            <h3>Assistance to the buyer</h3>
            <ul className='flex flex-col'>
              <li>rendering List</li>
              <li>rendering List</li>
              <li>rendering List</li>
            </ul>
          </span>
        </div>
      </div>
      <div className='flex'>Icons</div>
    </div>
  )
}

export default Footer
