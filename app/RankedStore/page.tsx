import Companies from "@/components/Companies";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Tutorial from "@/components/Tutorial";
import BackHome from "@/components/BackHome";
import { rankedAccounts } from "@/components/data";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { GiSpartanHelmet, GiDramaMasks } from "react-icons/gi";
import { AiOutlineArrowUp, AiOutlineArrowRight } from "react-icons/ai";
import { MdDiamond } from "react-icons/md";
import StoreNav from "@/components/StoreNav";

const Ranked = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center md:items-start md:flex-row px-10 py-5 md:bg-[url('/header-image.png')] bg-no-repeat bg-cover bg-fixed">
        {/* SIDE BAR */}
        <div className="flex flex-col">
          <BackHome />
          <StoreNav />
        </div>

        {/* HEADING */}
        <div className="flex flex-col gap-5">
          <div className="ml-5 flex flex-row h-[60px]">
            <div className="text-3xl bg-gray-800 p-4 mr-2 rounded-full">
              <GiSpartanHelmet />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">League Ranked Accounts!</h1>
              <p className="text-gray-500 font-semibold">
                Buy the highest quality League of Legends Ranked Accounts
              </p>
            </div>
          </div>

          {/* REGIONS SELECT */}
          <div className="ml-5 flex flex-row gap-5">
            <button className="container-style p-4 hover:bg-gray-800">
              Europe West
            </button>
            <button className="container-style p-4 hover:bg-gray-800">
              North America
            </button>
            <button className="container-style p-4 hover:bg-gray-800">
              Europe Nordic & East
            </button>
            <button className="container-style p-4 hover:bg-gray-800">
              Oceania
            </button>
          </div>

          <div className="flex flex-row flex-wrap">
            {rankedAccounts.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center ml-5 mt-4 justify-center container-style w-[400px] h-[360px]"
              >
                <div className="flex flex-row items-center">
                  <Image
                    src={item.img}
                    width={80}
                    height={100}
                    alt="rank"
                    className="bg-black border border-gray-700 rounded-full p-2"
                  />
                  <div className="flex flex-col ml-4">
                    <h1 className="text-lg">
                      {item.rankRegion} • {item.rankName}
                    </h1>
                    <p className="text-gray-500">{item.region}</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-around gap-[200px] mt-5">
                    <h1 className="text-gray-400 font-light flex gap-2 items-center">
                      <GiSpartanHelmet className="text-xl" />
                      Champions
                    </h1>
                    <h2 className="text-gray-400 font-light">{item.champ}</h2>
                  </div>
                  <div className="flex flex-row justify-around gap-[260px] mt-2">
                    <h1 className="text-gray-400 font-light flex gap-2 items-center">
                      <GiDramaMasks className="text-xl" />
                      Skins
                    </h1>
                    <h2 className="text-gray-400 font-light">{item.skins}</h2>
                  </div>
                  <div className="flex flex-row justify-around gap-[260px] mt-2">
                    <h1 className="text-gray-400 font-light flex gap-2 items-center">
                      <AiOutlineArrowUp className="text-xl" />
                      Level
                    </h1>
                    <h2 className="text-gray-400 font-light">{item.level}</h2>
                  </div>
                  <div className="flex flex-row justify-around gap-[260px] mt-2">
                    <h1 className="text-gray-400 font-light flex gap-2 items-center">
                      <MdDiamond className="text-xl" />
                      BE
                    </h1>
                    <h2 className="text-gray-400 font-light">{item.be}K</h2>
                  </div>
                </div>
                <div className="flex flex-row items-center mt-5">
                  <h1 className="text-4xl font-semibold">€{item.price}</h1>
                  <p className="text-gray-500 mt-3">EUR</p>
                  <button className="flex items-center ml-10 gap-1 bg-blue-500 py-3 px-2 rounded-xl cursor-pointer hover:bg-blue-400">
                    <Link
                      href="/RankedStore/AccountInfo"
                      className="flex items-center"
                    >
                      {" "}
                      View More
                      <AiOutlineArrowRight />
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Tutorial />
      <FAQs />
      <Companies />
      <Footer />
    </div>
  );
};

export default Ranked;
