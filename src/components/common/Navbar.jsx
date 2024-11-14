import React, { useState } from 'react'
import Image from 'next/image'

function Navbar() {
  // State to control the visibility of the sidebar
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) // This toggles the state between true and false
  }

  return (
    <div className='z-20 fixed w-full navbar bg-white'>
      <nav className="flex md:justify-around justify-between md:px-8 md:py-4 p-4 items-center">
        <div className="flex space-x-2">
          <Image className='md:flex hidden' src="/T_logo.png" alt="logo" width={40} height={40} />
          <span className="md:text-xl font-bold text-gray-800">THRISHA KANNAN</span>
        </div>

        {/* Hamburger button (only visible on mobile) */}
        <button onClick={toggleMenu} className="md:hidden">
          {!isMenuOpen && (
            <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke="black" strokeWidth="2">
                <line x1="5" y1="7" x2="25" y2="7"></line>
                <line x1="5" y1="15" x2="25" y2="15"></line>
                <line x1="5" y1="23" x2="25" y2="23"></line>
              </g>
            </svg>
          )}
        </button>

        {/* Sidebar menu (only visible on mobile) */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
        >
          {/* Close button */}
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke="black" strokeWidth="2">
                <line x1="5" y1="5" x2="25" y2="25"></line>
                <line x1="25" y1="5" x2="5" y2="25"></line>
              </g>
            </svg>
          </button>

          <ul className="flex flex-col items-start space-y-6 text-gray-800 font-serif font-bold md:text-xl p-8">
            <li>
              <a href="#home" className="relative group py-1">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#services" className="relative group py-1">
                Services
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#skills" className="relative group py-1">
                Skills
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="relative group py-1">
                Portfolio
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <button className="bg-orange-600 md:px-4 md:py-2 p-2 rounded relative z-10 text-white hover:bg-black">
              <span className="z-20">Contact Now</span>
            </button>
          </ul>
        </div>

        {/* Desktop Menu (always visible on desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-gray-800 font-serif font-bold">Home</a>
          <a href="#services" className="text-gray-800 font-serif font-bold">Services</a>
          <a href="#skills" className="text-gray-800 font-serif font-bold">Skills</a>
          <a href="#portfolio" className="text-gray-800 font-serif font-bold">Portfolio</a>
          <button className="bg-orange-600 px-4 py-2 rounded text-white hover:bg-black">
            Contact Now
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
