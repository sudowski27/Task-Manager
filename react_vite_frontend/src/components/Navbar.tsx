import React from 'react'
import assets from '../assets/assets'

const Navbar = ({theme, setTheme}) => {
  return (
    <div className='flex justify-between items-center px-4 
    sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20
    backdrop-blur-x1 font-medium bg-white/50 
    dark:bg-gray-900/70'>

        <img src={theme === 'dark' ? assets.react: assets.react}/>
    </div>
  )
}

export default Navbar
