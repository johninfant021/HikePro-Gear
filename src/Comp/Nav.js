import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlLogout } from "react-icons/sl";
import { SlLogin } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  return (
    <>
      <header className="backdrop-blur-sm  flex justify-between items-center px-5 py-3 sticky top-0 z-50">
        <div className="logo">
          <Link
            to="/"
            className="text-2xl font-bold font-times uppercase text-white"
          >
            mntn
          </Link>
        </div>

        <nav className="flex items-center">
          {/* Desktop Links */}
          <div className="hidden md:flex gap-5 text-white font-poppins text-md">
            <Link
              to="/equipment"
              className="hover:text-yellow-400 cursor-pointer"
            >
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
        <div className="hidden md:flex justify-center hover:text-yellow-400 items-center gap-2 text-white font-times text-lg">
          {localStorage.getItem("token") ? (
            <div className="flex items-center gap-2">
              <SlLogout />
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  alert("Logged out successfully!");
                  navigate("/"); 
                }}
                className="text-white hover:text-yellow-400"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <SlLogin/>
              <Link to="/sign" className="text-white hover:text-yellow-400">
                Log In
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 p-5 bg-transparent text-white md:hidden">
          <Link to="/sign">Account</Link>
          <Link to="/equipment">Equipment</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          {localStorage.getItem("token") && (
            <div className="flex items-center gap-2">
              <SlLogout />
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  alert("Logged out successfully!");
                  navigate("/");
                }}
                className="text-white hover:text-yellow-400"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Nav;
