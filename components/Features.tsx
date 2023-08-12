import React from "react";
import Image from "next/image";
import Link from "next/link";

const Features = () => {
  return (
    <div className="flex flex-col mt-10 md:px-10 px-2 animation-02">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-center font-bold text-4xl">
          What Services we Offer?
        </h1>
        <p className="text-xl font-semibold text-gray-500 mt-2">
          Select the service you want to use!
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-around md:gap-10">
        <div className="container-style hover:bg-gray-900 flex flex-col justify-center items-center w-[360px] h-[600px] md:w-[500px] md:h-[600px] mt-[80px] rounded-xl">
          <h1 className="mt-6 font-bold text-2xl mb-6">Unranked Accounts</h1>
          <Image
            src="/unranked.png"
            width={400}
            height={100}
            alt="rank"
            className="rounded-xl"
          />
          <p className="text-center mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="mt-8 border border-b-2 p-4 rounded-full bg-transparent border-blue-700">
            <Link href="/UnrankedStore">Check Out!</Link>
          </button>
        </div>

        <div className="container-style hover:bg-gray-900 flex flex-col justify-center items-center w-[360px] h-[600px] md:w-[500px] md:h-[600px] mt-[80px] rounded-xl">
          <h1 className="mt-6 font-bold text-2xl mb-6">Ranked Accounts</h1>
          <Image
            src="/ranked-02.png"
            width={400}
            height={100}
            alt="rank"
            className="rounded-xl"
          />
          <p className="text-center mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="mt-8 border border-b-2 p-4 rounded-full bg-transparent border-blue-700">
            <Link href="/RankedStore">Check Out!</Link>
          </button>
        </div>

        <div className="container-style hover:bg-gray-900 flex flex-col justify-center items-center w-[360px] h-[600px] md:w-[500px] md:h-[600px] mt-[80px] rounded-xl">
          <h1 className="mt-6 font-bold text-2xl mb-6">Boosting</h1>
          <Image
            src="/features-03.png"
            width={400}
            height={100}
            alt="rank"
            className="rounded-xl"
          />
          <p className="text-center mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="mt-8 border border-b-2 p-4 rounded-full bg-transparent border-blue-700">
            <Link href="/BoostingStore">Check Out!</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
