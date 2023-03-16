import React from 'react'
import FooterItems from './FooterItems'

function Footer() {
  return (
    <div className='max-w-7xl mx-auto px-5 py-12'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-20 lg:gap-x-36 gap-y-8'>
            <div className='space-y-3'>
                <h4 className='text-[#363940] font-bold tracking-wide'>About the company</h4>
                <p className='text-sm text-black/60 leading-6'>Learn To Love Growth And Change And You Will Be A Success. Microsoft Patch</p>
                <div className='flex items-center space-x-3'>
                    <img src="facebook.png" className='w-4 h-4'/>
                    <img src="youtube.png" className='w-4 h-4'/>
                    <img src="linkedin.png" className='w-4 h-4'/>
                    <img src="instagram.png" className='w-4 h-4'/>
                </div>
            </div>
            <FooterItems title="Products" item1="CSR Activites" item2="Green Banking" item3="News" item4="Ongoing Campgain" item5="Updates"/>
            <FooterItems title="Products" item1="CSR Activites" item2="Green Banking" item3="News" item4="Ongoing Campgain" item5="Updates"/>
            <FooterItems title="Products" item1="CSR Activites" item2="Green Banking" item3="News" item4="Ongoing Campgain" item5="Updates"/>
        </div>
    </div>
  )
}

export default Footer