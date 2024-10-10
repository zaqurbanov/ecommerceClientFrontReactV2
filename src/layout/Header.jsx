import React, { useEffect, useState } from 'react'
import NavbarRight from '../components/NavbarRight'
import Navbar from './Navbar'
import ResponsiveNavbar from '../components/ResponsiveNavbar'


const Header = () => {
  const [isMobile,setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className={`bg-black text-white py-3 fixed transition-all duration-150 top-0 w-full z-50  ${isScrolled ?"bg-slate-50 text-blue-950 shadow-2xl py-0":"" }`}>

    <div className='  container mx-auto flex gap-2 justify-between items-center '>
       <Navbar/>
       <ResponsiveNavbar isMobile={isMobile} setIsMobile={setIsMobile} />
      <h1 className='text-2xl font-bold max-md:ml-4'>Logo</h1>
    <NavbarRight setIsMobile={setIsMobile}/>

    </div>
    

    </div>
  )
}

export default Header
