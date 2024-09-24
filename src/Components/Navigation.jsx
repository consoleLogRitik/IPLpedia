import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" z-50 relative bg-black bg-opacity-90 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-lime-500 ml-4">IPLpedia</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>

        {/* Links - Collapsed on small screens */}
        <div className={`md:flex flex-col md:flex-row md:items-center md:gap-6 gap-4 absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="block text-md font-semibold py-2 px-4 hover:bg-lime-500 rounded-md">Home</Link>
          <Link to="/teams" className="block text-md font-semibold py-2 px-4 hover:bg-lime-500 rounded-md">Teams</Link>
          <Link to="/season-stats" className="block text-md font-semibold py-2 px-4 hover:bg-lime-500 rounded-md">Season Stats</Link>
          <Link to="/compare" className="block text-md font-semibold py-2 px-4 hover:bg-lime-500 rounded-md">Compare</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
