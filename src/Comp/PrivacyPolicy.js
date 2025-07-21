import React, { useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Aos from "aos";
import "aos/dist/aos.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);
  return (
    <div>
      <Nav />
      <div
        className="rounded-lg bg-cover bg-center bg-opacity-50"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2015/09/04/21/29/yosemite-922757_1280.jpg')`,
          boxShadow: "inset 0px -50px 36px -28px rgba(0, 0, 0, 0.35)",
        }}
      >
        <section
          id="id1"
          className="px-6 py-10 md:px-20 flex flex-col items-center justify-center"
        >
          <div className="md:grid md:grid-cols-2 gap-10 items-center justify-center">
            <div>
              <h2 className="md:text-4xl text-4xl font-bold mb-3 font-times text-yellow-400">
                Privacy Policy
              </h2>
              <p className="text-justify text-gray-900 text-lg font-semibold text-center  mb-1">
                At <strong>HikePro Gear</strong>, we are committed to protecting
                your privacy and ensuring the security of your personal
                information. This Privacy Policy explains how we collect, use,
                and safeguard your data when you visit our website.
              </p>
            </div>
            <img
              src="https://cdn.pixabay.com/photo/2024/03/09/09/56/ai-generated-8622359_1280.jpg"
              alt="Policy"
              className="rounded shadow-xl"
              data-aos="zoom-in"
            />
          </div>

          <div
            className="md:grid md:grid-cols-2 md:w-[90vw] w-[100vw] p-10 m-10 mb-0 gap-5 backdrop-blur-sm rounded"
            data-aos="fade-in"
          >
            <div className="my-10 md:my-0">
              <h2 className="text-3xl text-yellow-400 font-times text-center font-semibold mt-6 mb-2">
                Information We Collect
              </h2>
              <ul className="list-disc list-inside mb-4 font-poppins leading-loose">
                <li>
                  Personal details (name, email) when you sign up or contact us.
                </li>
                <li>
                  Non-personal data like IP address, browser type, and device
                  info.
                </li>
              </ul>
            </div>
            <div className="my-10 md:my-0">
              <h2 className="text-3xl text-yellow-400 font-times text-center font-semibold mt-6 mb-2">
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside mb-4 font-poppins leading-loose">
                <li>To respond to inquiries and support requests.</li>
                <li>To improve our website and user experience.</li>
                <li>To send you important updates (only with your consent).</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-3xl text-yellow-400 font-times font-semibold mt-6 mb-2">
            Changes to This Policy
          </h2>
          <p className="mb-4 md:px-16 px-10 font-poppins leading-loose text-white">
            We may update this policy from time to time. Any changes will be
            posted here with a revised "Last Updated" date.
          </p>

          <p className="text-sm italic text-gray-900 font-poppins mt-8">
            Last Updated: July 20, 2025
          </p>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
