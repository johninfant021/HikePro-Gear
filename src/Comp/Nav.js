import React from 'react'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Nav = () => {
      const [isOpen, setIsOpen] = useState(false);
      const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
            <header className=" flex justify-between items-center px-5 py-3">
              <div className="logo">
                <Link to="/" className="text-2xl font-bold font-times uppercase text-white">
                  mntn
                </Link>
              </div>
    
              <nav className="flex items-center">
                {/* Desktop Links */}
                <div className="hidden md:flex gap-5 text-white font-poppins text-md">
                  <Link to="/equipment" className="hover:text-yellow-400 cursor-pointer">
                    Equipment
                  </Link>
                  <a href="#id2" className="hover:text-yellow-400 cursor-pointer">
                    About Us
                  </a>
                  <a href="#id3" className="hover:text-yellow-400 cursor-pointer">
                    Blog
                  </a>
                </div>
    
                {/* Hamburger Icon for Mobile */}
                <button
                  className="text-white md:hidden p-2"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  <GiHamburgerMenu size={24} />
                </button>
              </nav>
              <div className="hidden md:flex gap-5 text-white font-thin">
                <h2>Account</h2>
              </div>
            </header>
    
            {/* Mobile Menu */}
            {isOpen && (
              <div className="flex flex-col gap-4 p-5 bg-transparent text-white md:hidden">
                <Link to="/equipment">Equipment</Link>
                <a href="#id2">About Us</a>
                <a href="#id3">Blog</a>
              </div>
            )}
            </>
  )
}

export default Nav