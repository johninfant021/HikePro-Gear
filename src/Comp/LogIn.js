import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Aos from "aos";
// import axios from "axios";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://hikepro-gear-1.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login successful");
        navigate("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="rounded-lg bg-cover bg-center bg-opacity-50 h-[100vh]"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2015/09/04/21/29/yosemite-922757_1280.jpg')`,
        boxShadow: "inset 0px -50px 36px -28px rgba(0, 0, 0, 0.35)",
      }}
    >
      <Nav />

      <section
        className="h-[90vh] flex justify-center items-center font-poppins leading-loose"
        data-aos="slide-down"
      >
        <form
          onSubmit={handleLogin}
          className="w-[90vw] sm:w-[80vw] md:w-[50vw] backdrop-blur-md bg-white/70 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl"
        >
          <h2 className="md:text-4xl text-2xl text-center font-bold font-times text-yellow-400 mb-10 hover:text-yellow-800 leading-loose">
            Login Credentials
          </h2>

          <div className="flex flex-col gap-6">
            {/* Email Input */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <label
                htmlFor="mail"
                className="w-full sm:w-1/3 text-sm sm:text-lg md:text-xl mb-2 sm:mb-0"
              >
                Email
              </label>
              <input
                type="email"
                id="mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter Email Here"
                className="w-full sm:w-2/3 border rounded py-3 px-4 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <label
                htmlFor="password"
                className="w-full sm:w-1/3 text-sm sm:text-lg md:text-xl mb-2 sm:mb-0"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                required
                placeholder="Enter Password Here"
                className="w-full sm:w-2/3 border rounded py-3 px-4 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="rounded bg-gray-700 text-white px-6 py-3 mt-3 hover:bg-gray-800 transition duration-300 shadow-lg"
              >
                Log In
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-2">
              <Link to="/sign" className="text-blue-700 hover:underline">
                Don't have an account? Sign up
              </Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LogIn;
