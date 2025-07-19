import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import Nav from "./Nav";

const blogs = [
  {
    id: 1,
    title: "Top 10 Hiking Trails You Must Explore",
    image:
      "https://th.bing.com/th/id/OIP.BUNT-KfNl8mNR5L2gX7FQwHaE8?w=351&h=192&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    description:
      "Discover the most breathtaking hiking trails across the world — from the Alps to the Rockies. Perfect for beginners and experts alike.",
    src: "https://travel.india.com/guide/destination/experience-thrilling-adventures-with-coimbatores-top-10-trekking-hotspots-7079883/",
  },
  {
    id: 2,
    title: "How to Pack Your Backpack Like a Pro",
    image:
      "https://th.bing.com/th/id/OIP.CFzUm1X-moqakPbrV6zBRAHaEO?w=305&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Master the art of efficient packing with our pro tips. Learn to carry less, travel smarter, and stay prepared.",
    src: "https://nomadsnation.com/how-to-pack-a-backpack/",
  },
  {
    id: 3,
    title: "Eco-Friendly Camping Essentials",
    image:
      "https://th.bing.com/th/id/OIP.Z8aBbTFMqGHKglS4aZVnZwHaLG?w=129&h=194&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    description:
      "Explore sustainable gear options that leave no trace behind. Be a responsible adventurer and protect the wild.",
    src: "https://www.exploremindfully.com/eco-friendly-camping-gear/",
  },
];

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
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
      <section className="py-20 px-4 md:px-16">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold font-times text-yellow-400 mb-6"
            data-aos="fade-up"
          >
            Latest Blog Posts
          </h2>
          <p
            className="text-center md:text-lg text-gray-900 font-poppins leading-relaxed md:mx-10"
            data-aos="fade-up"
          >
            Stay updated with our travel tips, gear guides, and outdoor
            inspiration from the MNTN team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#132936] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500"
              data-aos="zoom-in"
            >
              <a href={blog.src}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              </a>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-300 text-sm">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
