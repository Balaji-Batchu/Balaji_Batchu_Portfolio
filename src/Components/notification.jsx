import React, { useState, useEffect } from 'react';

export const Notification = ({ message }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-green-500 text-white font-bold font-open text-lg text-center py-3 transition-all duration-3000 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {message}
    </div>
  );
};
