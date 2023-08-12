import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10">
      <div className="flex flex-col items-center container-style relative px-10">
        <AiOutlineCheckCircle className="text-4xl mt-2" />
        <h1 className="text-3xl font-bold mt-5">0% Ban Rate</h1>
        <p className="text-center mt-5">
          As Of August 2023 We have a 0% ban rate on all our accounts.
        </p>
        <button className="mt-10 bg-blue-500 py-3 px-2 rounded-xl cursor-pointer hover:bg-blue-400 mb-10">
          Got it
        </button>
      </div>
    </div>
  );
};

export default Modal;
