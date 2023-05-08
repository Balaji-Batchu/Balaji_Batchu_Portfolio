import React from 'react';
import {BouncyText} from './bounce'
import {motion} from 'framer-motion'

const projects = [
  {
    title: 'Prathidhi Naivedhya',
    imageSrc: '/prathidhi-naivedhya.PNG',
    link: 'https://github.com/Balaji-Batchu/Prathidhi_Naivedhya',
    live_link: 'https://prathidhi-naivedhya.netlify.app'
  },
  {
    title: 'A.I Summarizer',
    imageSrc: '/A.I_GEN.png',
    link: 'https://github.com/Balaji-Batchu/Summarizer.io',
    live_link: 'https://ai-summarizer.netlify.app'
  },
  {
    title: 'FoodApp',
    imageSrc: '/foodapp.png',
    link: 'https://github.com/Balaji-Batchu/FoodApp',
    live_link: 'https://foodapp.netlify.app'
  },
  {
    title: 'Tenzies Game',
    imageSrc: '/tenzies.PNG',
    link: 'https://github.com/Balaji-Batchu/Tenzies-Game',
    live_link: 'https://tenzies.netlify.app'
  },
];

export const CodeSide = () => {
  return (
    <div className="w-screen px-8 py-10 bg-space-pattern bg-cover bg-no-repeat">
      <div className="container mx-auto">
      <div className="flex justify-center items-center my-6">
        <BouncyText text="My" />
        <BouncyText text="Previous" />
        <BouncyText text="Projects" />
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project,index) => (
            <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg h-84 shadow-lg shadow-[#8d57c2ff] outline outline-offset-1 mb-4 mx-2 outline-purple-400 overflow-hidden hover:cursor-pointer"
            key={index}>
              <motion.img 
              transition={{ duration: 0.2 }}              
              className="w-full h-64 rounded-lg object-cover" src={project.imageSrc} alt={project.title} />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><span className='text-black'>repo link: </span>{project.link}</a>
                <br />
                <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><span className='text-black'>Live link: </span>{project.live_link}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// console.log(<BouncyText />)