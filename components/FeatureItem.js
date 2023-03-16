import React from 'react'


function FeatureItem({image, title, text}) {
  return (
    <div className='space-y-3'>
        <img src={image} className="w-8 h-8"/>
        <h4 className='text-lg font-semibold tracking-wide text-[#363940]'>{title}</h4>
        <p className='text-black/40 text-sm leading-7'>{text}</p>
    </div>
  )
}

export default FeatureItem