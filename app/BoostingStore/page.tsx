import BackHome from "@/components/BackHome";
import Companies from "@/components/Companies";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StoreNav from "@/components/StoreNav";
import Tutorial from "@/components/Tutorial";
import { boostingRanks } from "@/components/data";
import ToggleSwitch from "@/components/ToggleSwitch";

import React from "react";
import Image from "next/image";

import { BsRocketTakeoff } from "react-icons/bs";
import {
  AiOutlineArrowRight,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
  AiOutlineClockCircle,
} from "react-icons/ai";

const Boosting = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center md:items-start md:flex-row px-10 py-5 md:bg-[url('/header-image.png')] bg-no-repeat bg-cover bg-fixed">
        {/* Side Bar */}
        <div className="flex flex-col">
          <BackHome />
          <StoreNav />
        </div>

        {/* HEADING */}
        <div className="flex flex-col gap-5">
          <div className="ml-5 flex flex-row h-[60px]">
            <div className="text-3xl bg-gray-800 p-4 mr-2 rounded-full">
              <BsRocketTakeoff />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">Rank Boosting!</h1>
              <p className="text-gray-500 font-semibold">
                Challenger player will Boost you to your desired rank.
              </p>
            </div>
          </div>

          {/* BOOST OPTIONS */}
          <div className="ml-5 flex flex-col md:flex-row gap-5">
            <button className="container-style p-4 hover:bg-gray-800">
              Rank Boost
            </button>
            <button className="container-style p-4 hover:bg-gray-800">
              Win Boost
            </button>
            <button className="container-style p-4 hover:bg-gray-800">
              Placements Boost
            </button>
            <button className="container-style p-4 hover:bg-gray-800">
              Champion Mastery
            </button>
          </div>
          <div className="flex flex-row mt-2 gap-5 ml-5">
            <div className="flex flex-col">
              <div className="container-style w-[850px] h-[350px] flex flex-col">
                <div className="flex flex-row items-center gap-2 ml-5 mt-2">
                  <Image
                    src="/rankacc/rank-02.png"
                    width={80}
                    height={80}
                    alt="boost"
                    className="bg-black border border-gray-700 rounded-full p-1"
                  />
                  <div className="flex flex-col">
                    <h1>Current Rank</h1>
                    <p className="text-gray-500">
                      Select your current tier and division.
                    </p>
                  </div>
                </div>
                <div className="flex md:flex-wrap">
                  {boostingRanks.map((item) => (
                    <button
                      key={item.id}
                      className="mt-2 ml-5 flex flex-col md:flex-row justify-center md:justify-between container-style hover:bg-gray-800"
                    >
                      <Image
                        src={item.img}
                        width={80}
                        height={80}
                        alt="boost"
                      />
                    </button>
                  ))}
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-2 ml-5 mt-2">
                  <button className="container-style px-5 py-2 hover:bg-gray-800">
                    I
                  </button>
                  <button className="container-style px-5 py-2 hover:bg-gray-800">
                    II
                  </button>
                  <button className="container-style px-5 py-2 hover:bg-gray-800">
                    III
                  </button>
                  <button className="container-style px-5 py-2 hover:bg-gray-800">
                    IV
                  </button>
                </div>
              </div>
              <div className="container-style w-[850px] h-[350px] mt-5 flex flex-col">
                <div className="flex flex-row items-center gap-2 ml-5 mt-2">
                  <Image
                    src="/rankacc/master.png"
                    width={80}
                    height={80}
                    alt="boost"
                    className="bg-black border border-gray-700 rounded-full p-1"
                  />
                  <div className="flex flex-col">
                    <h1>Desired Rank</h1>
                    <p className="text-gray-500">
                      Select your desired tier and division.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  {boostingRanks.map((item) => (
                    <button
                      key={item.id}
                      className="mt-2 ml-5 flex flex-row justify-between container-style hover:bg-gray-800"
                    >
                      <Image
                        src={item.img}
                        width={80}
                        height={80}
                        alt="boost"
                      />
                    </button>
                  ))}
                </div>
                <div className="flex flex-row justify-center gap-2 ml-5 mt-2">
                  <button className="container-style px-5 py-2 hover:bg-gray-800">
                    I
                  </button>
                  <button className="container-style px-5 py-2 hover:bg-gray-800">
                    II
                  </button>
                  <button className="container-style px-5 py-2 hover:bg-gray-800">
                    III
                  </button>
                  <button className="container-style px-5 py-2 hover:bg-gray-800">
                    IV
                  </button>
                </div>
              </div>
            </div>
            {/* CHECK OUT CONTAINER*/}
            <div className="container-style w-[450px] h-[718px] flex flex-col">
              <div className="flex flex-col items-center justify-center mt-4">
                <h1 className="font-semibold">Checkout</h1>
                <p className="text-gray-500">
                  Add extra options to your boost.
                </p>
              </div>
              <div className="flex flex-col md:flex-row bg-black w-[447px] h-[50px] justify-center gap-2 items-center mt-10">
                <h1>Gold IV</h1>
                <AiOutlineArrowRight />
                <h2>Master</h2>
              </div>
              <div className="inline-flex gap-2 items-center justify-center mt-5">
                <button
                  title="Booster plays on your account"
                  className="container-style w-[150px] inline-flex items-center gap-2 hover:bg-gray-800 font-bold py-2 px-4 rounded-l"
                >
                  <AiOutlineUser />
                  Solo
                </button>
                <button
                  title="Play with the booster"
                  className="container-style w-[150px] inline-flex items-center gap-2 hover:bg-gray-800 font-bold py-2 px-4 rounded-r"
                >
                  <AiOutlineUsergroupAdd />
                  Duo
                </button>
              </div>
              <div className="flex flex-col items-center mt-7">
                <div className="flex flex-row gap-[150px]">
                  <div className="flex flex-col items-start gap-4">
                    <h1 className="font-light text-sm items-center">
                      Priority Boost Completion
                    </h1>
                    <h2 className="font-light text-sm items-center">
                      Booster Champions & Roles
                    </h2>
                    <h3 className="font-light text-sm items-center">
                      Stream Games
                    </h3>
                    <h4 className="font-light text-sm items-center">
                      Solo Only Queue
                    </h4>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                    <ToggleSwitch />
                    <ToggleSwitch />
                    <ToggleSwitch />
                    <ToggleSwitch />
                  </div>
                </div>
              </div>
              <div className="flex flex-row bg-black w-[447px] h-[50px] justify-center gap-2 items-center mt-10">
                <AiOutlineClockCircle />
                <h1 className="text-sm">Completion Time:</h1>
                <p className="text-sm text-gray-500">~2 Months</p>
              </div>
              <div className="flex flex-col p-5">
                <h1 className="font-light text-sm">Discount Code</h1>
                <div className="flex flex-row items-center gap-3">
                  <input
                    type="text"
                    placeholder="25OFF"
                    className="text-gray-600 bg-black p-2 mt-2 rounded-xl border border-gray-700 w-[330px]"
                  ></input>
                  <button className="container-style py-2 px-2 text-sm font-light hover:bg-gray-800 mt-1">
                    Apply
                  </button>
                </div>
                <div className="flex flex-row items-center justify-between mt-7">
                  <h1 className="text-gray-500">Total Price:</h1>
                  <p className="font-semibold text-3xl">€320,99</p>
                </div>
                <div className="flex flex-row justify-center mt-5 gap-2 bg-blue-500 py-2 rounded-xl cursor-pointer hover:bg-blue-400 items-center">
                  <button>Add to Cart!</button>
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
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

export default Boosting;
