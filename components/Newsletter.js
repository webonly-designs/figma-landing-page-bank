import React from 'react'

function Newsletter() {
  return (
    <div className='bg-[#FEF9FC] py-12 lg:py-24'>
        <div className='max-w-xl mx-auto px-5'> 
            <h2 className='text-center text-3xl text-black/80 font-bold mb-4 tracking-wide'>Newsletter</h2>
            <p className='max-w-2xl mx-auto text-center text-black/40'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
            <div className='flex items-center mt-8 space-x-2'>
                <input
                    type="text"
                    placeholder='Your Email'
                    className='flex-1 border text-xs uppercase tracking-wide text-black py-4 px-2 rounded-md' 
                />
                <button className='px-4 py-3 bg-[#ed017f] rounded-md uppercase text-sm tracking-wide text-white hover:bg-[#ed017f]/90'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter