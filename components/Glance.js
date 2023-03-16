import React from 'react'
import {FaArrowRight} from "react-icons/fa"

function Glance() {
  return (
    <div className='lg:flex lg:items-center lg:space-x-24 space-y-12 pb-12 lg:py-0'>
        <div className='w-full lg:w-[45%]'>
            <img src="Picture.png" className='w-full h-full object-contain'/>
        </div>
        <div className='flex-1 lg:max-w-md px-5 lg:px-0'>
            <h2 className='text-3xl font-bold tracking-widest text-black/80 mb-3'>IPDC AT A GLANCE</h2>
            <p className='text-sm text-black/40 leading-7'>IPDC Finance Limited (previously known as "Industrial Promotion and Development 
                Company of Bangladesh Limited") is the first private sector financial institution of the country established in 1981 by a 
                distinguished group of shareholders namely International Finance Corporation (IFC), USA, German 
                Investment and Development Company (DEG), Germany, The Aga Khan Fund for Economic Development 
                (AKFED), Switzerland, Commonwealth Development Corporation (CDC), UK and the Government of Bangladesh
            </p>
            <div className='flex items-center space-x-2 text-[#ed017f] pt-8'>
                <p className='font-semibold'>Read More</p>
                <FaArrowRight className="w-4 h-4"/>
            </div>
        </div>
    </div>
  )
}

export default Glance