import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./Nav";
import Footer from "./Footer";

const contributors = [
  {
    name: "John Carter",
    role: "Lead Writer",
    img: "https://th.bing.com/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?w=162&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    desc: "John explores trails and shares captivating outdoor stories from around the world.",
  },
  {
    name: "Emily Grace",
    role: "Gear Reviewer",
    img: "https://th.bing.com/th?q=Stock+Images+Profile+Female&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    desc: "Emily tests hiking gear and writes detailed reviews on performance & comfort.",
  },
  {
    name: "Derek Lin",
    role: "Photographer",
    img: "https://th.bing.com/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?w=181&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    desc: "Derek captures stunning outdoor visuals to inspire every nature enthusiast.",
  },
];

const Contributor = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Nav />
      <div
        className="bg-cover bg-center overflow-x-hidden"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2015/09/04/21/29/yosemite-922757_1280.jpg')`,
          boxShadow: "inset 0px -50px 36px -28px rgba(0, 0, 0, 0.5)",
        }}
      >
        <section className=" text-white py-16 px-6 md:px-20">
          <h2
            className="text-center text-yellow-400 text-4xl font-times font-bold mb-12"
            data-aos="fade-up"
          >
            Contributors & Writers
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {contributors.map((contributor, index) => (
              <div
                key={index}
                className="bg-[#132936] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                data-aos="zoom-in"
              >
                <img
                  src={contributor.img}
                  alt={contributor.name}
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-yellow-400"
                />
                <h3 className="text-xl font-bold text-yellow-300 mb-1">
                  {contributor.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3 italic">
                  {contributor.role}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {contributor.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Contributor;
