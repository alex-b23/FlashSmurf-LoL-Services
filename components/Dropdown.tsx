"use client";

import React from "react";
import { useState } from "react";
import { dropdownRank } from "./data";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const Dropdown = () => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center w-[340px] h-[340px]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="container-style p-4 flex items-center gap-2"
      >
        Select Rank
        {!IsOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {IsOpen && (
        <div className="container-style p-10 gap-5 mt-20 absolute">
          {dropdownRank.map((item, index) => (
            <div>
              <h1>{item.rank}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
