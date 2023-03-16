import React from 'react'
import ServicesItem from './ServicesItem'

function Services() {
  return (
    <div className='bg-[#FEF9FC] py-12 lg:py-24'>
        <div className='max-w-7xl mx-auto px-5'>
            <h2 className='text-center text-3xl text-black/80 font-bold mb-4 tracking-wide'>Our Services</h2>
            <p className='max-w-2xl mx-auto text-center text-black/40'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
            <div className='grid grid-cols-2 lg:grid-cols-4 pt-8 lg:pt-16 gap-y-8 gap-x-8'>
                <ServicesItem image="serviceOne.png" title="IPDC SAVING SCHEMES"/>
                <ServicesItem image="serviceTwo.png" title="IPDC SAVING SCHEMES"/>
                <ServicesItem image="serviceThree.png" title="IPDC SAVING SCHEMES"/>
                <ServicesItem image="serviceFour.png" title="IPDC SAVING SCHEMES"/>
            </div>
        </div>
    </div>
  )
}

export default Services