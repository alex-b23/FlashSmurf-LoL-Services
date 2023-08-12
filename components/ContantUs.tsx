import React from "react";
import Image from "next/image";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const ContantUs = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col md:flex-row justify-around container-style w-[1000px] h-[400px]">
        <div className="flex flex-col">
          <h1 className="mt-20 px-10 font-bold text-4xl">
            We are always here to answer your questions
          </h1>
          <p className="mt-10 px-10 text-gray-500">
            Chat with our sales & support team 24/7 for quick answers on product
            features, pricing and more. We are ready to answer any of your
            questions as soon as possible
          </p>
          <div className="flex flex-col md:flex-row mt-10 px-10 items-center">
            <BsDiscord className="text-2xl" />
            <div className="flex flex-col ml-4">
              <h1 className="font-bold">Discord</h1>
              <p className="text-gray-500">Join Our Discord</p>
            </div>
            <AiOutlineMail className="text-2xl ml-8" />
            <div className="flex flex-col ml-4">
              <h1 className="font-bold">E-mail</h1>
              <p className="text-gray-500">support@flashsmurfs.net</p>
            </div>
          </div>
        </div>

        <div className="relative w-[900px] h-[100px] mt-20">
          <Image src="/support.png" width={1000} height={800} alt="support" />
        </div>
      </div>
    </div>
  );
};

export default ContantUs;
