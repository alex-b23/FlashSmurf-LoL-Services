import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="flex md:justify-between md:mt-[10px] md:gap-10 md:px-20 md:py-10">
      <div className="flex-col p-2 md:p-4 md:max-w-[1440px] animation-02 ">
        <span>Best Account Seller Service</span>
        <h1 className="flex mt-2 text-2xl w-screen md:w-[600px] md:text-4xl font-bold">
          Getting bored of your current Rank? Why not try smurfing! Instant
          delivery - vaieriety of options
        </h1>
        <p className="flex mt-2 w-[300px] md:w-[600px] md:mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="flex mt-6 ml-20 border border-b-2 p-4 rounded-full bg-transparent border-blue-700 hover:bg-blue-700">
          <Link href="/UnrankedStore">Click for Store!</Link>
        </button>
        <div className="flex flex-col md:flex-row gap-2 md:w-[600px] md:h-[50px]">
          <img src="/reviews-01.png" className="w-[300px] h-[50px] mt-10" />
          <div className="flex flex-col mt-9 ml-9">
            <h1 className="font-bold text-2xl">1,990+</h1>
            <p>Reviews</p>
          </div>
          <div className="flex flex-col mt-9 ml-9">
            <h1 className="font-bold text-2xl flex flex-row gap-1">
              4.5
              <AiFillStar />
            </h1>
            <p>Out of 5.0</p>
          </div>
        </div>
      </div>

      <div className="flex relative w-[3000px] h-[500px]"></div>
    </div>
  );
};

export default Hero;
