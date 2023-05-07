import React, { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";

export const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#0e0733ff] via-[#120942ff] via-[#1b0649ff] via-[#1a0544ff] via-[#1f0753ff] via-[#331374ff] via-[#491a84ff] to-[#8d57c2ff]">
      <PacmanLoader color="#fde047" loading={loading} size={35} />
    </div>
  );
}