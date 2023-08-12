import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Tutorial from "@/components/Tutorial";
import { accounts } from "@/components/data";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { GiCrossedSwords } from "react-icons/gi";
import { AiOutlineCheck } from "react-icons/ai";

import Companies from "@/components/Companies";
import BackHome from "@/components/BackHome";
import StoreNav from "@/components/StoreNav";

const Unranked = () => {
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
              <GiCrossedSwords />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">League Unranked Accounts!</h1>
              <p className="text-gray-500 font-semibold">
                Buy the highest quality League of Legends Smurf Accounts
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

          {/* ACCOUNT CONTAINER*/}
          <div className="flex flex-row flex-wrap">
            {accounts.map((item) => (
              <div key={item.id} className="flex ml-5">
                <div className="flex flex-col justify-center mt-6 hover:bg-gray-800 container-style w-[400px] h-[500px]">
                  <div className="flex flex-grid items-center justify-center">
                    <Image
                      src={item.img}
                      width={70}
                      height={70}
                      alt="store"
                      className="rounded-full border border-gray-700"
                    />
                    <div className="flex flex-col ml-2">
                      <h1 className="text-2xl">{item.name}</h1>
                      <p className="text-gray-500">
                        {item.blueEssance} BE • {item.level}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-grid justify-center mt-8">
                    <h1 className="text-5xl font-semibold">€{item.price}</h1>
                    <p className="text-gray-600">EUR</p>
                  </div>

                  <div className="flex justify-center mt-5">
                    <button className="bg-blue-500 py-3 px-3 rounded-xl cursor-pointer hover:bg-blue-400">
                      Add to Cart!
                    </button>
                  </div>

                  <div className="flex flex-col items-start mt-5 px-10">
                    <div className="flex flex-row justify-center items-center">
                      <AiOutlineCheck className="text-xl text-gray-500 mr-5" />
                      <p className=" text-gray-500">
                        {" "}
                        {item.blueEssance} Blue Essence{" "}
                      </p>
                    </div>

                    <div className="flex flex-row justify-center items-center mt-2">
                      <AiOutlineCheck className="text-xl text-gray-500 mr-5" />
                      <p className=" text-gray-500"> {item.level} </p>
                    </div>

                    <div className="flex flex-row justify-center items-center mt-2">
                      <AiOutlineCheck className="text-xl text-gray-500 mr-5" />
                      <p className=" text-gray-500"> Ranked Ready </p>
                    </div>

                    <div className="flex flex-row justify-center items-center mt-2">
                      <AiOutlineCheck className="text-xl text-gray-500 mr-5" />
                      <p className=" text-gray-500"> Lifetime Warranty</p>
                    </div>
                  </div>
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

export default Unranked;
