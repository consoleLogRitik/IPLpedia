import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black bg-opacity-90 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        
        {/* Logo and Branding */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold text-lime-500 mb-2">IPLpedia</h1>
          <p className="text-gray-400">Your ultimate IPL resource</p>
        </div>
        <div className="container mx-auto mt-4 text-center text-gray-400 text-sm">
        <p>© 2024 IPLpedia. All rights reserved.</p>
      </div>
        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-gray-400">Contact Us:</p>
          <p className="text-gray-400">email@ritikchoubey12101@gmail.com</p>
        </div>
      </div>

     
    </footer>
  );
}

export default Footer;
