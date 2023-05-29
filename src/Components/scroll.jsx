import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';

const ScrollDownArrow = ({ scrollTo }) => {
  return (
    <div className="flex justify-center items-center mt-8">
      <ScrollLink
        to={scrollTo}
        smooth={true}
        duration={400}
        className="text-gray-300 hover:text-white cursor-pointer"
      >
        <FaChevronDown className="animate-bounce text-4xl" />
      </ScrollLink>
    </div>
  );
};

export default ScrollDownArrow;
