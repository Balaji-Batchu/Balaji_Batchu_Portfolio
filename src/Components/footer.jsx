import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-yellow-400 font-semibold text-lg">© 2023 Balaji Batchu</p>
          </div>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="https://www.linkedin.com/in/balajibatchu/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              LinkedIn
            </a>
            <a href="https://github.com/Balaji-Batchu/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
