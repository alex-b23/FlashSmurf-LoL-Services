"use client";

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";

const Accordtion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* QUESTIONS */}
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="text-xl font-bold py-4 px-10">{question}</h1>
        <BiChevronDown
          className={`text-2xl transition-all duration-500 ${
            show ? "rotate-180" : ""
          } `}
        />
      </div>

      {/* ANSWERS */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ durations: 0.3 }}
            className="overflow-clip"
          >
            <p className="text-gray-500 md:text-base text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordtion;
