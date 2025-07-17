import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./Nav";
import Footer from "./Footer";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2015/09/04/21/29/yosemite-922757_1280.jpg')`,
        boxShadow: "inset 0px -50px 36px -28px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Nav />

      <section className="min-h-screen text-white px-4 md:px-16 py-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold font-times text-yellow-400 mb-6"
            data-aos="fade-down"
          >
            About Us
          </h2>
          <p
            className="text-base md:text-lg text-gray-900 px-10 font-poppins leading-relaxed text-justify backdrop-blur-sm rounded shadow-lg"
            data-aos="fade-up"
          >
            At <span className="text-yellow-300 font-semibold">MNTN</span>, we’re passionate about the outdoors. Our mission is to equip adventurers with high-quality gear that empowers them to conquer any trail, mountain, or journey. Whether you’re a weekend hiker or a seasoned trekker, we’ve got your back — literally.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div
            className="bg-[#132936] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-semibold text-yellow-300 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-300">
              To become the most trusted and innovative outdoor gear provider globally, helping people explore nature with confidence.
            </p>
          </div>

          <div
            className="bg-[#132936] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold text-yellow-300 mb-3">
              Our Commitment
            </h3>
            <p className="text-gray-300">
              Every product we offer is field-tested, eco-friendly, and built to withstand the harshest environments.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-20"
          data-aos="zoom-in-up"
        >
          <h4 className="text-yellow-400 text-2xl md:text-3xl font-semibold mb-4">
            Join the Journey
          </h4>
          <p className="text-gray-300 text-sm md:text-base">
            Follow us on social media and become part of the MNTN community today!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
