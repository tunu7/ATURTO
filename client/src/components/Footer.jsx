import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white mx-8 py-3 md:mx-28 px-6 md:px-28 rounded">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <p className="text-center md:text-left">© 2024 Aturto MMA. All rights reserved.</p>
      <div className="flex justify-center md:justify-end space-x-4 mt-2 md:mt-0">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
      </div>
    </div>
  </footer>
);

export default Footer;
