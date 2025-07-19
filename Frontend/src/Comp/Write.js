import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./Nav";
import Footer from "./Footer";

const Write = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="bg-cover bg-center overflow-x-hidden"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2015/09/04/21/29/yosemite-922757_1280.jpg')`,
        boxShadow: "inset 0px -50px 36px -28px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Nav />
      <section className=" text-white px-6 md:px-20 py-16 overflow-x-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-yellow-400 text-4xl font-bold font-times mb-6"
            data-aos="fade-up"
          >
            Write for Us
          </h2>
          <p
            className="text-base md:text-lg text-gray-900 px-10 font-poppins leading-relaxed text-justify backdrop-blur-sm rounded shadow-lg"
            data-aos="zoom-in"
          >
            Do you have a passion for the outdoors, gear reviews, or adventure
            stories? Share your voice with thousands of outdoor enthusiasts! We
            welcome guest posts, personal hiking tales, gear experiences, and
            insightful travel tips.
          </p>
          <div
            className="bg-[#132936] p-6 md:p-10 rounded-lg shadow-lg max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-yellow-300 mb-4">
              Submission Guidelines:
            </h3>
            <ul className="list-disc list-inside text-gray-300 text-left text-sm md:text-base space-y-2">
              <li>Original content only (not published elsewhere)</li>
              <li>Include at least one high-quality image (if possible)</li>
              <li>Minimum 600 words per article</li>
              <li>Include your name and short author bio</li>
              <li>
                Topics: hiking, camping, gear, travel, nature, photography
              </li>
            </ul>
          </div>
          <p className="mt-10 text-gray-400 text-sm" data-aos="fade-up">
            📧 Send your article to:{" "}
            <span className="text-yellow-400 font-medium">
              submissions@mntn.com
            </span>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Write;
