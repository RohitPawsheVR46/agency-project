import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Trustedby from './components/Trustedby'

const App = () => {
  const [theme,setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div>
      <Navbar theme={theme} setTheme ={setTheme}/>
      <Hero/>
      <Trustedby></Trustedby>
    </div>
  )
}

export default App
