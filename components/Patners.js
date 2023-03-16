import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Patners() {
  return (
    <div className='bg-[#FEF9FC]'>
        <div className='max-w-7xl mx-auto px-5 py-12 lg:py-24'>
            <h3 className='text-center uppercase text-2xl tracking-widest text-black/80'>Business Patners</h3>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-36 gap-y-8 pt-8 lg:pt-16'> 
                <img src="westin.png" className='w-[185px] h-full' />
                <img src="summit.png" className='w-[185px] h-full' /> 
                <img src="holcim.png" className='w-[185px] h-full' /> 
                <img src="etv.png" className='w-[185px] h-full' /> 
            </div>
        </div>
    </div>
  )
}

export default Patners