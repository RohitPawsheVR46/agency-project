import React from 'react'
import Images from '../assets/assets'
import { company_logos } from '../assets/assets'
const Trustedby = () => {
  return (
    <div className='dark:bg-black'>
      <h1 className='font-semibold text-center pb-7 dark:text-white leading-2.5 lg:text-2xl'>Trusted By Leading Companies</h1>
      <div className='flex items-center justify-center gap-7 flex-wrap m-4 '>
         {company_logos.map((logo,index)=>{
        return <img  key={index} src={logo} alt="" className='w-23 dark:drop-shadow-xl'/>
      })}
      </div>     
    </div>
  )
}

export default Trustedby
