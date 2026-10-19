import React from 'react'
import Images from '../assets/assets'

const hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center py-40 dark:bg-black text-center gap-8 overflow-hidden'>

      <div className='inline-flex border border-gray-400 rounded-4xl gap-1 p-2 items-center justify-center '>
        <img src={Images.group_profile} alt="" className='w-23'/>
        <p className='dark:text-white '>Trusted by 10K+ people</p>
      </div>

      <h1 className='text-4xl  max-w-5xl font-medium sm:text-5xl md:text-6xl xl:text-[84px] xl:leading-[95px] dark:text-white'>Turning Imagination into <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea]  bg-clip-text text-transparent'>digital</span> impact.</h1>

      <p className='dark:text-white/75 text-xl font-medium text-gray-600 maax-w-4/5 sm:max-w-lg '>Creating meaningful connections and turning big ideas into interactive digital experiences.</p>

      <div className='relative '>
        <img src={Images.hero_img} alt="" className='w-full max-w-6xl'/>
        <img src={Images.bgImage1} alt="" className='absolute -top-40 -right-40 -z-1 dark:hidden sm:-top-100 sm:-right-70'/>
      </div>

    </div>

  )
}

export default hero
