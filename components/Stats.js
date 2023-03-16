import React from 'react'
import StatsItem from './StatsItem'

function Stats() {
  return (
    <div className='max-w-7xl mx-auto py-12 lg:py-24 px-5'>
        <h2 className='text-center text-3xl text-black/80 font-bold mb-4 tracking-wide'>Our best results for the year</h2>
        <p className='max-w-2xl mx-auto text-center text-black/40'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-x-24  lg:gap-x-48 gap-y-8 lg:gap-y-12 pt-8 lg:pt-16'>
            <div className='space-y-2'>
              <p className='text-3xl font-bold text-[#ed017f]'>57.6 bn</p>
              <p className='text-xs uppercase tracking-wider text-black/60'>Loan Portfolio</p>
            </div>
            <StatsItem stat="0.95%" text="CLASSIFIED LOAN PORTFOLIO"/>
            <StatsItem stat="388.5%" text="CLASSIFIED LOAN Coverage"/>
            <StatsItem stat="50.4 bn" text="Deposit"/>
            <StatsItem stat="6.1 bn" text="Shareholders equity"/>
            <StatsItem stat="18.51%" text="Capital Adequacy Ratio"/>
            <StatsItem stat="8.5 bn" text="Market Capitalization"/>
            <StatsItem stat="AAA" text="Credit Rating"/>
        </div>
    </div>
  )
}

export default Stats