import React from "react";
import { AiOutlineLock, AiOutlineLineChart } from "react-icons/ai";
import { BsRocketTakeoff, BsShieldCheck } from "react-icons/bs";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex flex-col">
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-5xl font-bold">Enjoy FlashSmurfs Benefits</h1>
          <p className="text-gray-500 font-semibold text-2xl mt-10">
            All our accounts come with extra features and benefits, for free!
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center mt-10 gap-10">
          <div className="flex flex-col items-center justify-center container-style w-[400px] h-[250px] rounded-3xl">
            <BsShieldCheck className="font-bold text-4xl" />
            <h1 className="text-xl font-bold mt-4">Fast & Secure</h1>
            <p className="text-center mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>

          <div className="flex flex-col items-center justify-center container-style  w-[400px] h-[250px] rounded-3xl">
            <BsRocketTakeoff className="font-bold text-4xl" />
            <h1 className="text-xl font-bold mt-4">Instant Delivery</h1>
            <p className="text-center mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center mt-10 gap-10 md:ml-40">
          <div className="flex flex-col items-center justify-center container-style  w-[400px] h-[250px] rounded-3xl">
            <AiOutlineLineChart className="font-bold text-4xl" />
            <h1 className="text-xl font-bold mt-4">Guarranted Level 30</h1>
            <p className="text-center mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>

          <div className="flex flex-col items-center justify-center container-style  w-[400px] h-[250px] rounded-3xl">
            <AiOutlineLock className="font-bold text-4xl" />
            <h1 className="text-xl font-bold mt-4">Unverified Email</h1>
            <p className="text-center mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
      </div>

      <div className="z-10 mb-10">
        <Image
          src="/new.png"
          width={800}
          height={800}
          alt="benefits"
          className="mt-40"
        />
      </div>
    </div>
  );
};

export default Benefits;
