import React from 'react'
import Images from '../assets/assets'
const Themetogglebtn = ({ theme, setTheme }) => {
    return (
        <>
            {theme === 'dark' ? (
            <img src={Images.sun_icon} alt="" className='size-8.5 border border-gray-600 rounded-full p-1.5 '
            onClick={()=>{
                setTheme('light')
            }} />
            ) :(
            <img src={Images.moon_icon} alt="" className='size-8.5 border border-gray-600 rounded-full p-1.5 ' 
            onClick={()=>{
                setTheme('dark')
            }}/>

            )}
        </>
    )
}

export default Themetogglebtn
