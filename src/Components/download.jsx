import React, { useState } from "react";
import { FaDownload, FaSpinner, FaCheck } from "react-icons/fa";
import resume from '/resumes/BALAJI_BATCHU_Resume.pdf'

function DownloadButton() {
  const [downloadState, setDownloadState] = useState("idle");

  const handleDownloadClick = () => {
    setDownloadState("downloading");
    setTimeout(() => {
      setDownloadState("success");
    }, 2000);
  };

  let buttonText;
  let buttonIcon;

  if (downloadState === "idle") {
    buttonText = "Get my Resume";
    buttonIcon = <FaDownload />;
  } else if (downloadState === "downloading") {
    buttonText = "Downloading...";
    buttonIcon = <FaSpinner className="animate-spin" />;
  } else if (downloadState === "success") {
    buttonText = "Downloaded!";
    buttonIcon = <FaCheck />;
  }

  return (
    <div className="flex justify-center">
      <a
        href={resume}
        download
        className=" outline outline-yellow-100 hover:bg-yellow-300 hover:text-black hover:outline-offset-2 outline-yellow-500 hover:outline-yellow-200 font-lato tracking-widest text-white font-bold py-2 px-4 rounded flex items-center justify-center"
        onClick={handleDownloadClick}
      >
        <span className="ml-2 pr-3">{buttonText}</span>
        {buttonIcon}
      </a>
    </div>
  );
}

export default DownloadButton;
