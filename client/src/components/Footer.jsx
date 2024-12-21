import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white w-full px-4 md:px-6 py-3">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <p className="text-center md:text-left">© 2024 Aturto MMA. All rights reserved.</p>
      <div className="flex justify-center md:justify-end space-x-6 mt-4 md:mt-0">
        {/* Facebook Link with Icon */}
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400"
        >
          <i className="fab fa-facebook-f text-xl"></i>
        </a>
        {/* Instagram Link with Icon */}
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400"
        >
          <i className="fab fa-instagram text-xl"></i>
        </a>
        {/* Twitter Link with Icon */}
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400"
        >
          <i className="fab fa-twitter text-xl"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
