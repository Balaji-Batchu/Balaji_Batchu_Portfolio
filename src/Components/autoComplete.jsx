import classnames from 'classnames';
import React, { useState, useEffect } from 'react';

const sentences = [
  'Hello! This is Balaji',
  'Frontend Developer',
  'Reactjs Expert',
  'Tech Enthusiast',
];

const Autocomplete = () => {
  const [input, setInput] = useState('');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentTypingIndex === sentences[currentSentenceIndex].length) {
        setTimeout(() => {
          setCurrentTypingIndex(0);
          setCurrentSentenceIndex((currentSentenceIndex + 1) % sentences.length);
        }, 1000);
      } else {
        setCurrentTypingIndex(currentTypingIndex + 1);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [currentTypingIndex, currentSentenceIndex]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="relative w-96">
      <div className="absolute top-0 left-12 px-4 py-2 sm:text-xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-[#1b0649ff]  pointer-events-none font-roboto">
        {sentences[currentSentenceIndex].substring(0, currentTypingIndex)}
        <span className={classnames({ 'animate-blink': currentTypingIndex === sentences[currentSentenceIndex].length })}>|</span>
      </div>
    </div>
  );
};

export default Autocomplete;