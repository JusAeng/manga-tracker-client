"use client";

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./Styles.css";

const GradientText: React.FC = () => {
  const [fullShow, setFullShow] = useState(false);

  return (
    <main className="flex flex-col">
      <div
        className={
          !fullShow ? "readmore-container-less" : "readmore-container-full"
        }
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          deserunt voluptate voluptates ab neque porro aliquid totam recusandae
          ratione repellendus. Consequatur reprehenderit error quae sapiente,
          soluta cum repellendus quis aperiam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dicta eligendi debitis quia accusantium,
          voluptate ratione recusandae error nulla reprehenderit consectetur
          quos quis temporibus sequi incidunt vero atque unde doloribus
          excepturi.
        </p>
      </div>
      <button
        className="flex justify-center"
        onClick={() => setFullShow(!fullShow)}
      >
        {!fullShow ? <FaAngleDown /> : <FaAngleUp />}
      </button>
    </main>
  );
};

export default GradientText;
