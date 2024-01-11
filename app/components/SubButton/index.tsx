"use client";

import React, { useState } from "react";
import "./index.css"; // Import your CSS file for styling
import { IoMdAdd, IoMdCheckmark } from "react-icons/io";

const SubButton: React.FC = () => {
  const [spin, setSpin] = useState(false);
  const [changed, setChanged] = useState(false);

  const handleClick = () => {
    setSpin(true);

    setTimeout(() => {
      setChanged(!changed);
      setSpin(false);
    }, 500);
  };

  return (
    <div>
      {changed ? (
        // Your changed logo or icon goes here
        <button className={spin ? "spin-back" : ""} onClick={handleClick}>
          <IoMdCheckmark size={21} color={"#ffffff"} />
        </button>
      ) : (
        <button className={spin ? "spin-forward" : ""} onClick={handleClick}>
          <IoMdAdd size={21} color={"#ffffff"} />
        </button>
      )}
    </div>
  );
};

export default SubButton;
