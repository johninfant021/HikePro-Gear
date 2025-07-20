import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const Handlesubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://hikepro-gear-1.onrender.com/api/auth/message",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message}),
      }
    );

    const data = await res.json();
    alert(data.message);
    setName("");
    setEmail("");
    setMessage("");   
  };
  return (
    <div
      className="rounded-lg bg-cover bg-center bg-opacity-50"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2015/09/04/21/29/yosemite-922757_1280.jpg')`,
        boxShadow: "inset 0px -50px 36px -28px rgba(0, 0, 0, 0.35)",
      }}
    >
      <Nav />
      <div className="md:grid md:grid-cols-2 gap-2 md:px-10">
        <section
          id="id1"
          className="px-6 py-10 md:px-20 flex flex-col items-center justify-center"
        >
          <h2 className="md:text-4xl text-4xl font-bold mb-3 font-times text-yellow-400">
            Contact Us
          </h2>

          <p className="text-justify text-gray-900 text-lg md:text-xl rounded shadow-lg leading-loose text-center backdrop-blur-lg px-16">
            Have questions about hiking gear, trips, or partnerships? We'd love
            to hear from you.
          </p>
        </section>
        <section
          className=" flex justify-center items-center font-poppins leading-loose my-10"
          data-aos="slide-down"
        >
          <form
            onSubmit={Handlesubmit}
            className=" w-[90vw] sm:w-[80vw] md:w-[50vw] backdrop-blur-md bg-white/70 p-4 md:p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <label
                  htmlFor="name"
                  className="w-full sm:w-1/3 text-sm sm:text-lg md:text-xl mb-2 sm:mb-0"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter Name Here"
                  className="w-full sm:w-2/3 border rounded py-3 px-4 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <label
                  htmlFor="email"
                  className="w-full sm:w-1/3 text-sm sm:text-lg md:text-xl mb-2 sm:mb-0"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter Email Here"
                  className="w-full sm:w-2/3 border rounded py-3 px-4 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <label
                  htmlFor="password"
                  className="w-full sm:w-1/3 text-sm sm:text-lg md:text-xl mb-2 sm:mb-0"
                >
                  Message
                </label>
                <textarea
                  rows="3"
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  autoComplete="off"
                  required
                  placeholder="Enter Message Here"
                  className="w-full sm:w-2/3 border rounded py-3 px-4 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="rounded bg-gray-700 text-white px-6 py-3 mt-3 hover:bg-gray-800 transition duration-300 shadow-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
