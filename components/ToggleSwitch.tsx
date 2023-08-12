"use client";
import React from "react";
import { useState } from "react";
import classNames from "classnames";

const ToggleSwitch = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={classNames(
        "flex w-[50px] h-[25px] bg-gray-800 rounded-xl items-center cursor-pointer",
        {
          "bg-blue-500": toggle,
        }
      )}
    >
      <span
        className={classNames(
          "w-[17px] h-[17px] ml-1 bg-gray-700 rounded-full transition-all duration-200",
          {
            "bg-white ml-[30px]": toggle,
          }
        )}
      />
    </div>
  );
};

export default ToggleSwitch;
