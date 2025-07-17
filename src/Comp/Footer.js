import React from 'react'

const Footer = () => {
  return (
          <footer className="bg-[#0B1D26] text-white px-8 py-10 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-1/3">
            <h1 className="text-2xl font-bold font-times uppercase mb-3">
              MNTN
            </h1>
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
                <a href="#id1">About MNTN</a>
              </li>
              <li>
                <a href="#id1">Contributors & Writers</a>
              </li>
              <li>
                <a href="#id1">Write For Us</a>
              </li>
              <li>
                <a href="#id1">Contact Us</a>
              </li>
              <li>
                <a href="#id1">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-yellow-400 font-semibold mb-4">More on MNTN</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#id1">The Team</a>
              </li>
              <li>
                <a href="#id1">Jobs</a>
              </li>
              <li>
                <a href="#id1">Press</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default Footer