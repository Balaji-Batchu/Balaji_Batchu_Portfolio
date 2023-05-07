import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './cube.css';
import {FaJsSquare,FaHtml5,FaCss3Alt,FaReact,FaGitSquare,FaPython} from 'react-icons/fa';
import {BsGit} from 'react-icons/bs'

export const Cube = () => {
  const [rotationValues, setRotationValues] = useState({rotateY: "360deg", rotateZ: "90deg"});

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationValues((prevValues) => {
        if (prevValues.rotateY === "360deg" && prevValues.rotateZ === "90deg") {
          return {rotateY: "90deg", rotateX: "360deg"};
        } else {
          return {rotateY: "360deg", rotateZ: "90deg"};
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen pl-24">
      <motion.div
        className="cube"
        animate={rotationValues}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className="bg-white face left"><FaReact className='text-[#5ED4F4]' size={56}/></div>
        <div className="bg-white face back"><FaPython className='text-gray-700' size={56}/></div>
        <div className="bg-white face front"><BsGit className='text-[#EC4D28]' size={56}/></div>
        <div className="bg-white face right"><FaJsSquare className='text-[#EFD81D]' size={56}/></div>
        <div className="bg-white face top"><FaHtml5 className='text-[#f06529]' size={56}/></div>
        <div className="bg-white face bottom"><FaCss3Alt className='text-[#28A4D9]' size={56}/></div>
      </motion.div>
    </div>
  );
};
