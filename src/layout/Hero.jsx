import React from 'react'
import BgImg from '../assets/design-bnr.webp'
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative w-full h-screen bg-cover bg-center ">
            <img src={BgImg} alt="" className=' absolute -z-10 w-full h-full top-0  left-0 object-cover object-center' />
            
          <div className="h-screen inset-0  mx-auto w-2/4 max-md:w-11/12 flex flex-col justify-center  items-center text-center max-md:text-left text-white p-4">
            <div className="flex flex-nowrap max-sm:flex-wrap items-center gap-2 max-md:gap-0 bg-[#12103e] max-md:p-2 p-3 rounded-3xl">
              <span className="bg-gradient-to-r from-[#0098ff] px-3 py-1 max-md:px-2 max-md:py-0.5 rounded-full text-sm max-md:text-[10px]">Featured</span>
              <span className="  rounded-full text-sm whitespace-nowrap max-md:text-[10px]">New featured collection  <a href='' className='text-[#1c82f3] whitespace-nowrap'>\ Gaming. Collector </a></span>
            </div>
            <h1 className="text-5xl font-bold mt-5 ">Best Pro Gaming Accessories</h1>
            <p className="text-lg mt-4">Gaming accessories include gear such as headsets, extra controllers, charging stations, memory devices, carrying cases and much more.</p>
            <div className="flex gap-4 mt-6">
              <NavLink to={'/product'} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">Show products</NavLink>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition">Show Collections</button>
            </div>
          </div>
        </div>
      );
    }


export default Hero
