import React from "react";
import Image from "next/image";
import {
  AiOutlineSearch,
  AiOutlineCreditCard,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";

const Tutorial = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold">
          We like to keep it fast & easy
        </h1>
        <p className="md:text-center text-sm md:text-xl font-semibold text-gray-500 mt-2">
          We take the complexity out of buying Accounts.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-between mt-20">
          <AiOutlineSearch className="text-4xl mb-10" />
          <h1 className="text-xl">Select your Package</h1>
          <p className="text-gray-500 mt-2">
            Pick your desired in-game service, and customize it.
          </p>
        </div>

        <AiOutlineArrowRight className="text-xl" />

        <div className="flex flex-col items-center w-[400px] justify-between mt-20">
          <AiOutlineCreditCard className="text-4xl mb-10" />
          <h1 className="text-xl">Make a secure Payment</h1>
          <p className="text-gray-500 mt-2 text-center">
            We accept all major credit cards, Skrill, Paysafe Card, Crypto and
            more.
          </p>
        </div>

        <AiOutlineArrowRight className="text-xl" />

        <div className="flex flex-col items-center justify-between mt-20">
          <BsBoxSeam className="text-4xl mb-10" />
          <h1 className="text-xl">Check your Inbox</h1>
          <p className="text-gray-500 mt-2">
            Enjoy your new account and be ready to rank up!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
