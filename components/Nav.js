import React, { useState } from 'react'
import {FaSearch, FaBars, FaWindowClose} from "react-icons/fa"

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className='max-w-7xl mx-auto flex justify-between items-center p-5 relative'>
        <img 
            src="logo.png"
            className='w-24 h-full'
        />
        <div className='hidden lg:flex space-x-8 uppercase tracking-wider text-sm font-semibold'>
            <a href="/" className='hover:text-[#ED017F]'>Retail</a>
            <a href="/" className='hover:text-[#ED017F]'>SME</a>
            <a href="/" className='hover:text-[#ED017F]'>Corporate</a>
            <a href="/" className='hover:text-[#ED017F]'>About us</a>
            <a href="/" className='hover:text-[#ED017F]'>Covid 19</a>
            <a href="/" className='hover:text-[#ED017F]'>Campgains</a>
        </div>

        <div className='hidden lg:flex items-center space-x-8'>
            <FaSearch className='lg:block w-5 h-5 cursor-pointer hover:text-[#ED017F]' />
            <button className='py-2 px-6 bg-[#ED017F] rounded-md uppercase tracking-wider text-sm font-semibold text-white transition duration-300 hover:bg-[#ED017F]/90'>Service</button>
        </div>

        <div className='lg:hidden'>
            <FaBars className='w-5 h-5 transition duration-300 ease-in hover:text-[#ED017F]' onClick={() => setIsMenuOpen(true)}/>
            {isMenuOpen && (
                <div className='absolute top-0 left-0 w-full z-10 bg-white'>
                    <div className='p-5 flex flex-col space-y-4'>
                        <div className='flex items-center justify-between'>
                            <img 
                                src="logo.png"
                                className='w-24 h-full'
                            />
                            <FaWindowClose className='w-6 h-6 transition duration-300 ease-in hover:text-[#ED017F]' onClick={() => setIsMenuOpen(false)}/>
                        </div>
                        <div className='flex flex-col space-y-3 uppercase tracking-wider text-sm font-semibold'>
                            <a href="/" className='hover:text-[#ED017F]' onClick={() => setIsMenuOpen(false)}>Retail</a>
                            <a href="/" className='hover:text-[#ED017F]' onClick={() => setIsMenuOpen(false)}>SME</a>
                            <a href="/" className='hover:text-[#ED017F]' onClick={() => setIsMenuOpen(false)}>Corporate</a>
                            <a href="/" className='hover:text-[#ED017F]' onClick={() => setIsMenuOpen(false)}>About us</a>
                            <a href="/" className='hover:text-[#ED017F]' onClick={() => setIsMenuOpen(false)}>Covid 19</a>
                            <a href="/" className='hover:text-[#ED017F]' onClick={() => setIsMenuOpen(false)}>Campgains</a>
                            <button className='py-2 bg-[#ED017F] rounded-md uppercase tracking-wider text-sm font-semibold text-white transition duration-300 hover:bg-[#ED017F]/90'>Service</button>
                        </div>

                    </div>
                </div>
            )}
        </div>

    </nav>
  )
}

export default Nav