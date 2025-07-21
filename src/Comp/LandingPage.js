import React, { useEffect } from "react";

import { FaInstagram, FaTwitter } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

import Nav from "./Nav";
import Footer from "./Footer";

const LandingPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);
  return (
    <div>
      <Nav/>
      <div
        className="md:h-[100vh] rounded-lg  h-[60vh] bg-cover bg-center bg-opacity-50"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2015/09/04/21/29/yosemite-922757_1280.jpg')`,
          boxShadow: "inset 0px -50px 36px -28px rgba(0, 0, 0, 0.35)",
        }}
      >

        <section className="md:relative md:h-[90vh] md:flex flex-col items-center justify-center">
          {/* Social Icons Left */}
          <div
            data-aos="fade-right"
            className="md:absolute md:top-1/2 md:left-6 md:-translate-y-1/2 text-white text-xs flex md:flex-col justify-center gap-5 m-5 items-center md:space-y-3"
          >
            <span className="md:rotate-90 md:mb-4 md:tracking-wider text-lg font-thin">
              Follow us
            </span>
            <FaInstagram className="text-lg hover:text-yellow-400 cursor-pointer" />
            <FaTwitter className="text-lg hover:text-yellow-400 cursor-pointer" />
          </div>

          {/* Main Content */}
          <div className="text-center px-4" data-aos="fade-up">
            <p className="text-yellow-800 md:text-sm text-lg uppercase tracking-widest">
              A Hiking Guide
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
              Be Prepared For The <br /> Mountains And Beyond!
            </h1>
            <p className="mt-6 text-sm text-gray-200">scroll down ↓</p>
          </div>

          {/* Page Navigation Right */}
          <div
            data-aos="fade-left"
            className="absolute right-6 top-1/2 hidden md:flex md:flex-col -translate-y-1/2 flex flex-col items-center text-white text-xs space-y-2"
          >
            <span className="font-semibold mb-2">Start</span>
            <div className="h-[1px] w-5 bg-white mb-2" />
            <a href="#id1" className="opacity-60">
              01
            </a>
            <a href="#id2" className="opacity-60">
              02
            </a>
            <a href="#id3" className="opacity-60">
              03
            </a>
          </div>
        </section>
        <div className="absolute bottom-0 left-0 w-full md:h-32 h-5 bg-gradient-to-t from-[#0B1D26] to-transparent z-0" />
      </div>
      <div className="bg-[#0B1D26]">
        <section
          id="id1"
          className="grid md:grid-cols-2 items-center gap-10 px-6 py-20 border-1"
        >
          <div>
            <h2 className="text-9xl text-gray-500 font-bold absolute">01</h2>
            <div className="relative md:py-8 md:px-4 md:m-10 m-16">
              <p
                className="text-sm text-yellow-400 uppercase mb-2 font-bold leading-loose tracking-widest"
                data-aos="fade-in"
              >
                Get Started
              </p>
              <h3 className="md:text-5xl text-2xl font-bold mb-4 text-white font-times">
                What level of hiker are you?
              </h3>
              <p className="text-white font-poppins leading-loose mb-4 text-justify">
                Determining what level of hiker you are can be an important tool
                when planning future hikes. This hiking level guide will help
                you plan hikes according to your skill level to ensure a safe
                and enjoyable experience.
              </p>
              <a
                href="#id1"
                className="text-yellow-400 hover:underline transition-colors duration-300"
              >
                read more →
              </a>
            </div>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2022/09/21/16/49/hike-7470767_1280.jpg"
            alt="Hiking level"
            className="rounded-lg"
            data-aos="zoom-in"
          />
        </section>
        <section
          id="id2"
          className="grid md:grid-cols-2 items-center gap-10 px-8 py-20 border-1"
        >
          <img
            src="https://cdn.pixabay.com/photo/2021/02/05/01/22/man-5983064_1280.jpg"
            alt="Hiking level"
            className="rounded-lg"
            data-aos="zoom-in"
          />
          <div>
            <h2 className="text-9xl text-gray-500 font-bold absolute">02</h2>
            <div className="relative md:py-8 md:px-4 md:m-10 m-16">
              <p
                className="text-sm text-yellow-400 uppercase mb-2 font-bold leading-loose tracking-widest"
                data-aos="fade-in"
              >
                Hiking Essentials
              </p>
              <h3 className="md:text-5xl text-2xl font-bold mb-4 text-white font-times">
                Picking the right Hiking Gear!
              </h3>
              <p className="text-white font-poppins leading-loose mb-4 text-justify">
                The key to being prepared is packing the right gear. You don’t
                really need every piece of hiking gear, but having the
                essentials will make your trip easier and safer.
              </p>
              <a
                href="#id2"
                className="text-yellow-400 hover:underline transition-colors duration-300"
              >
                read more →
              </a>
            </div>
          </div>
        </section>
        <section
          id="id3"
          className="grid md:grid-cols-2 items-center gap-10 px-8 py-20 border-1"
        >
          <div>
            <h2 className="text-9xl text-gray-500 font-bold absolute">03</h2>
            <div className="relative md:py-8 md:px-4 md:m-10 m-16">
              <p
                className="text-sm text-yellow-400 uppercase mb-2 font-bold leading-loose tracking-widest"
                data-aos="fade-in"
              >
                Where you go is the key
              </p>
              <h3 className="md:text-5xl text-2xl font-bold mb-4 text-white font-times">
                Understand Your Map & Timing
              </h3>
              <p className="text-white font-poppins leading-loose mb-4 text-justify">
                It’s not just about the trail, but also the right time to hike.
                Understanding how to read maps and plan your timing can prevent
                getting lost and ensure a successful hike.
              </p>
              <a
                href="#id3"
                className="text-yellow-400 hover:underline transition-colors duration-300"
              >
                read more →
              </a>
            </div>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2022/09/21/16/49/arch-7470764_1280.jpg"
            alt="Hiking level"
            className="rounded-lg"
            data-aos="zoom-in"
          />
        </section>
      </div>
<Footer/>
    </div>
  );
};

export default LandingPage;
