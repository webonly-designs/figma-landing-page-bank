import React from 'react'

function FooterItems({title, item1, item2, item3, item4, item5}) {
  return (
    <div className='space-y-3'>
         <h4 className='text-[#363940] font-bold tracking-wide'>{title}</h4>
         <div className='space-y-2 text-sm text-black/60'>
            <p>{item1}</p>
            <p>{item2}</p>
            <p>{item3}</p>
            <p>{item4}</p>
            <p>{item5}</p>
         </div>
    </div>
  )
}

export default FooterItems