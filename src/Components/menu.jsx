// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { IoIosHome } from 'react-icons/io';
// import { CgProfile } from 'react-icons/cg';
// import { BsCodeSlash } from 'react-icons/bs';
// import { IoMdMail } from 'react-icons/io';
// import { FaLinkedin } from 'react-icons/fa';
// import { AiOutlineGithub } from 'react-icons/ai';

// const MenuButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         className="flex items-center justify-center w-24 h-10 text-gray-400 rounded-lg hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         onClick={toggleMenu}
//       >
//         <span className="sr-only">Open menu</span>
//         <svg
//           className="w-6 h-6"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M4 6H20M4 12H20M4 18H20"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 w-26 mt-2 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             <Link
//               to="/"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               onClick={toggleMenu}
//             >
//               <IoIosHome className="mr-3 text-yellow-400" size={20} />
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               onClick={toggleMenu}
//             >
//               <CgProfile className="mr-3 text-gray-400" size={20} />
//               About
//             </Link>
//             <Link
//               to="/code"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               onClick={toggleMenu}
//             >
//               <BsCodeSlash className="mr-3 text-gray-400" size={20} />
//               Code
//             </Link>
//             <Link
//               to="/contact"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               onClick={toggleMenu}
//             >
//               <IoMdMail className="mr-3 text-gray-400" size={20} />
//               Contact
//             </Link>
//           </div>
//           <div className="py-1">
//             <a
//               href="https://www.linkedin.com/in/balajibatchu/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               onClick={toggleMenu}
//             >
//               <FaLinkedin className="mr-3 text-gray-400" size={20} />
//               LinkedIn
//             </a>
//             <a
//               href="https://www.github.com/Balaji-Batchu/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               onClick={toggleMenu}
//             >
//               <AiOutlineGithub className="mr-3 text-gray-400" size={20} />
//               GitHub
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MenuButton;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { BsCodeSlash } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center z-100 justify-center w-10 h-10 text-gray-400 rounded-lg hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onClick={toggleMenu}
      >
        <span className="sr-only z-100">Open menu</span>
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-start z-50 bg-gray-900 bg-opacity-50">
          <div className="w-36 flex flex-col items-center self-center mt-2 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg focus:outline-none">
            <div className="py-1">
              <Link
                to="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                <IoIosHome className="mr-3 text-yellow-400" size={20} />
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                <CgProfile className="mr-3 text-gray-400" size={20} />
                About
              </Link>
              <Link
                to="/code"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                <BsCodeSlash className="mr-3 text-gray-400" size={20} />
                Code
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                <IoMdMail className="mr-3 text-gray-400" size={20} />
                Contact
              </Link>
            </div>
            <div className="py-1">
              <a
                href="https://www.linkedin.com/in/balajibatchu/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                <FaLinkedin className="mr-3 text-gray-400" size={20} />
                LinkedIn
              </a>
              <a
                href="https://www.github.com/Balaji-Batchu/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                <AiOutlineGithub className="mr-3 text-gray-400" size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
