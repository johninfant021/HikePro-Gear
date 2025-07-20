import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0B1D26] text-white px-8 py-10 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="md:w-1/3">
          <h1 className="text-2xl font-bold font-times uppercase mb-3">MNTN</h1>
          <p className="text-sm text-gray-300 mb-6">
            Get out there & discover your next slope, mountain & destination!
          </p>
          <p className="text-xs text-gray-400">
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </p>
        </div>
        <div>
          <h2 className="text-yellow-400 font-semibold mb-4">
            More on The Blog
          </h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/about">About MNTN</Link>
            </li>
            <li>
              <Link to="/cont">Contributors & Writers</Link>
            </li>
            <li>
              <Link to="/write">Write For Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
