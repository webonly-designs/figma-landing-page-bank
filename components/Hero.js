import React from 'react'
import {FaCarSide, FaHouseDamage, FaPhoneAlt} from "react-icons/fa"

function Hero() {
  return (
    <div className='max-w-7xl mx-auto p-5 relative lg:h-[600px] mt-4'>
        <img src="hero.png" className='hidden lg:block w-full h-full lg:w-[900px] absolute -bottom-10 -right-10 ' />
        <div className='hidden lg:flex items-center absolute top-0 left-[45%] py-4 px-6 rounded-full bg-white space-x-4 shadow-md z-20'>
            <FaCarSide className='w-6 h-6 text-[#ED017F]'/>
            <p className='font-bold tracking-wide text-black/80'>Car Loans</p>
        </div>
        <div className='hidden lg:flex items-center absolute top-32 left-[80%] py-4 px-6 rounded-full bg-white space-x-4 shadow-md z-20'>
            <FaHouseDamage className='w-6 h-6 text-[#ED017F]'/>
            <p className='font-bold tracking-wide text-black/80'>Home Loans</p>
        </div>
        <div className='lg:w-1/2 w-full h-full lg:flex lg:flex-col lg:justify-between space-y-7 lg:space-y-10'>
            <div className='flex-1 flex flex-col justify-center space-y-7 lg:space-y-10'>
                <h1 className='text-5xl lg:text-6xl font-extrabold'>Chase Your <br /> Dream with us</h1>
                <p className='text-black/60'>The harder you work for something, the greater <br /> you’ll feel when you achieve it.</p>
                <div className='flex items-center space-x-4'>
                    <button className='py-3 px-6 bg-[#ED017F] rounded-md uppercase tracking-wider text-sm text-white transition duration-300 hover:bg-[#ED017F]/90'>Apply Online</button>
                    <button className='hidden lg:block py-3 px-6 border border-[#ED017F] rounded-md uppercase tracking-wider text-sm font-semibold text-[#ED017F] transition duration-300 hover:bg-[#ED017F]/90 hover:border-white hover:text-white'>Loan Calulator</button>
                </div>
            </div>
            <div className='lg:mb-12 flex items-center space-x-4'>
                <div className='flex items-center space-x-3'>
                    <FaPhoneAlt className='w-4 h-4 text-[#ed017f]'/>
                    <p className='font-semibold tracking-wide'>16519</p>
                </div>
                <p className='text-black/20'>|</p>
                <div className='flex items-center space-x-3 cursor-pointer'>
                    <img src="facebook.png" className='w-4 h-4'/>
                    <img src="youtube.png" className='w-4 h-4'/>
                    <img src="linkedin.png" className='w-4 h-4'/>
                    <img src="instagram.png" className='w-4 h-4'/>
                </div>
            </div>
        </div>
        <img
            src="hero.png"
            className='lg:hidden w-full h-full'
        />
    </div>
  )
}

export default Hero