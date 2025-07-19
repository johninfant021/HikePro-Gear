import React from 'react'
import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Nav = () => {
      const [isOpen, setIsOpen] = useState(false);
      const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
            <header className=" flex justify-between items-center px-5 py-3 sticky top-0 z-50">
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
                  <Link to="/about" className="hover:text-yellow-400 cursor-pointer">
                    About Us
                  </Link>
                  <Link to="/blog" className="hover:text-yellow-400 cursor-pointer">
                    Blog
                  </Link>
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
              <div className="hidden md:flex justify-center items-center gap-2 text-white font-times hover:text-yellow-400 text-lg">
                <VscAccount/>
                <Link to="/sign">Account</Link>
              </div>
            </header>
    
            {/* Mobile Menu */}
            {isOpen && (
              <div className="flex flex-col gap-4 p-5 bg-transparent text-white md:hidden">
                <Link to="/sign">Account</Link>
                <Link to="/equipment">Equipment</Link>
                <Link to="/about">About Us</Link>
                <Link to="/blog">Blog</Link>
              </div>
            )}
            </>
  )
}

export default Nav