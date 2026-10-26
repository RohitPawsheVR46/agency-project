import React, { useRef, useState } from 'react'

const ServicesCard = (services) => {
    const [position, setposition] = useState({ x: 0, y: 0 })
    const [visible, setvisible] = useState(false)
    const divRef = useRef(null)

    function mousehandler(e){
        const bounds = divRef.current.getBoundingClientRect()
        setposition({x: e.clientX - bounds.left , y: e.clientY - bounds.top})
    }

    return (
        <div className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 ' onMouseEnter={()=>{
           setvisible(true)
        }}
        onMouseLeave={()=>{
            setvisible(false)
        }}
        ref={divRef}
        onMouseMove={mousehandler}>
            {/* glowing div */}
            <div className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0' }`} style={{top: position.y -150, left:position.x -150}} />
         

            <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>
                <div className='bg-gray-100 dark:bg-gray-700 rounded-full '>
                    <img src={services.icon} alt="" className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' />
                </div>
                <div className='flex-1'>
                    <h3 className='font-bold dark:text-white'>{services.title}</h3>
                    <p className='text-sm mt-2 dark:text-white'>{services.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard
