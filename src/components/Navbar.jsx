import React, { useEffect, useState } from 'react'
import Images from '../assets/assets'
import Themetogglebtn from './Themetogglebtn'

const Navbar = ({ theme, setTheme }) => {
  const [openSidebar, setOpenSidebar] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      const defaultBrowserMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches

      setTheme(defaultBrowserMode ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme' ,theme)
  }, [theme])

  return (
    <div className='flex justify-between items-center sm:pt-5 sm:px-40 sticky z-20 py-4 top-0 bg-white/70 dark:bg-black backdrop-blur-xl'>

      <img src={theme === 'dark' ? Images.logo_dark : Images.logo} alt=""
        className='w-32 sm:w-40 z-20 ' />

      <div className={` text-gray-700 sm:gap-6 flex max-sm:flex-col max-sm:h-screen max-sm:bg-primary  ${!openSidebar ? 'max-sm:w-0 max-sm:overflow-hidden max-sm:p-0' : 'max-sm:w-55 max-sm:pl-10 '} transition-all sm:items-center max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:gap-5 max-sm:pt-20 sm:text-black max-sm:text-white
      dark:text-white
      `}>

        <img src={Images.close_icon} alt="" className='w-8 absolute top-4 right-4 sm:hidden' onClick={() => {
          setOpenSidebar(false)
        }
        } />

        <a href="/" className='sm:hover:border-b'>Home</a>
        <a href="#Services" className='sm:hover:border-b'>Services</a>
        <a href="/" className='sm:hover:border-b'>Our Work</a>
        <a href="/" className='sm:hover:border-b'>Contact Us</a>
      </div>

      <div className='sm:flex sm:gap-4 sm:items-center sm:justify-center max-sm:flex gap-4'>
        <Themetogglebtn theme={theme} setTheme={setTheme} />

        <img src={Images.menu_icon} alt="" className='w-8 sm:hidden' onClick={() => {
          setOpenSidebar(true)
        }} />

        <a href="" className='flex items-center justify-center bg-primary rounded-3xl px-6 py-2 active:scale-95 gap-2 max-sm:hidden transition-all dark:text-white'>
          Connect
          <img src={Images.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Navbar
