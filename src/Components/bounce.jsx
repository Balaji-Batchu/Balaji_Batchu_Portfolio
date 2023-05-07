import { motion } from 'framer-motion';

export const BouncyText = ({ text }) => {
  return (
    <motion.span
      className=" text-yellow-400 text-4xl tracking-widest px-4 hover:cursor-pointer" 
    >
      {text.split('').map((char, index) => {
        return (
          <motion.span
            key={index}
            className="inline-block text-4xl tracking-wide font-merri hover:text-amber-100"
            whileHover={{ scale: [1.3,0.9], transition: { repeat: 1, duration: 0.2, repeatType: "loop" } }}
            whileLeave={{scale:0.8}}
          >
            {char}
          </motion.span>
        )
      })}
    </motion.span>
  );
};