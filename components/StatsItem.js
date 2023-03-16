import React from 'react'

function StatsItem({stat, text}) {
  return (
    <div className='space-y-2'>
        <p className='text-3xl font-bold'>{stat}</p>
        <p className='text-xs uppercase tracking-wider text-black/60'>{text}</p>
    </div>
  )
}

export default StatsItem