import React from "react";
import '../index.css';

function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex justify-between content-center bg-darkGreen-600 bg-opacity-80 px-3 py-6 md:px-10 xl:px-64">
      <p className="text-white font-semibold text-2xl ml-5"><a href="/">bear</a></p>
      <ul className="flex items-center justify-end">
        <li className="mr-6"><a className="text-gray-300 hover:text-white" href="/">home</a></li>
        <li className="mr-6"><a className="text-gray-300 hover:text-white" href="/projects">projects</a></li>
        <li className="mr-6"><a className="text-gray-300 hover:text-white" href="/about">about</a></li>
      </ul>
    </div>
  );
}

export default Navbar;