import React from 'react'
import assets from '../../assets/assets'

export default function Hero() {
  return (
    // tailwind diya mobile device responsive
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700'>
        <div className='mt-10 inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
            <img className='w-20' src={assets.group_profile} alt="" />
            <p className='text-xs font-medium'>Trusted by 10k+ people </p>
        </div>
        {/* introductions */}
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>Turning imagination into <span className='bg-gradient-to-r from-[#5044E5]
         to-[#4d8cea] bg-clip-text text-transparent'>Digital Agency</span> </h1>
         <p className='text-sm sm:text-lg font-medium
          text-gray-500 max-w-4/5 sm:max-w-lg pb-3'>Creating meaningful connctions
           and turning big ideas into interactive digital
            experience.</p>
            <div className='relative'>
                <img src={assets.hero_img} className='w-full max-w-6xl'  alt="" />
                <img src={assets.bgImage1} className='absolute -top-40 -right' alt="" />
            </div>
    </div>
  )
}
