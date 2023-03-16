import React from 'react'
import {FaArrowCircleRight} from "react-icons/fa"

function ServicesItem({image, title}) {
  return (
    <div className='space-y-3'>
        <img src={image} className="w-full h-[96] object-cover" />
        <div className='flex items-center justify-between space-x-2'>
            <p className='font-semibold tracking-wide'>{title}</p>
            <FaArrowCircleRight className='w-5 h-5 text-[#ed017f] flex-shrink-0' />
        </div>
    </div>
  )
}

export default ServicesItem