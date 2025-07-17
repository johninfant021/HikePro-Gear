import React, { useEffect } from "react";
import Nav from "./Nav";
import Aos from "aos";
import "aos/dist/aos.css";

const Equipment = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);
  const equipment = [
    {
      id: 1,
      head: "Backpacks",
      img: "https://cdn.pixabay.com/photo/2016/11/22/19/25/man-1850181_1280.jpg",
      about: "Durable and spacious backpacks for long hiking trips.",
    },
    {
      id: 2,
      head: "Hiking Boots",
      img: "https://cdn.pixabay.com/photo/2016/04/06/16/52/hiking-1312227_1280.jpg",
      about: "Comfortable boots with high ankle support for rough terrain.",
    },
    {
      id: 3,
      head: "Trekking Poles",
      img: "https://cdn.pixabay.com/photo/2020/12/09/00/08/human-5815851_1280.jpg",
      about:
        "Lightweight poles to stabilize your hikes and reduce joint stress.",
    },
    {
      id: 4,
      head: "Tents",
      img: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_1280.jpg",
      about: "Weatherproof and easy-to-carry tents for overnight stays.",
    },
    {
      id: 5,
      head: "Navigation Gear",
      img: "https://cdn.pixabay.com/photo/2016/11/22/21/37/compass-1850673_1280.jpg",
      about: "Essential tools like compasses and GPS devices for safe travels.",
    },
    {
      id: 6,
      head: "Water Bottles",
      img: "https://cdn.pixabay.com/photo/2017/10/06/04/42/water-bottle-2821977_1280.jpg",
      about: "Sturdy, insulated bottles to keep your water cold or hot.",
    },
  ];

  return (
    <div
      className=" rounded-lg bg-cover bg-center bg-opacity-50"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2015/09/04/21/29/yosemite-922757_1280.jpg')`,
        boxShadow: "inset 0px -50px 36px -28px rgba(0, 0, 0, 0.35)",
      }}
    >
      <Nav />
      <section
        id="id1"
        className=" px-6 py-16 md:px-20 flex flex-col items-center justify-center"
      >
        <h2 className="md:text-4xl text-4xl font-bold mb-6 font-poppins">
          Our Equipment
        </h2>
        <p className="text-gray-900 text-lg font-semibold text-center md:px-[20vw] mb-8">
          Explore top-tier hiking gear handpicked by experienced mountaineers.
          Durability, performance, and comfort — all in one place.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {equipment.map((item, index) => (
            <div key={index} className="bg-[#132936] p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold font-times text-yellow-400 mb-2">
                {item.head}
              </h3>
              <img
                src={item.img}
                alt="Equipment"
                className="w-52 h-52 object-cover rounded mx-auto mb-4"
                data-aos="zoom-in"
              />
              <p className="text-sm text-gray-300">{item.about}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Equipment;
