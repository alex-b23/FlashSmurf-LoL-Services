import BackHome from "@/components/BackHome";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StoreNav from "@/components/StoreNav";
import Tutorial from "@/components/Tutorial";
import { champInfo } from "@/components/data";

import React from "react";
import Image from "next/image";

import { TfiAlignJustify } from "react-icons/tfi";
import { GiCrossedSwords } from "react-icons/gi";
import { AiOutlineCheckCircle, AiOutlineArrowRight } from "react-icons/ai";

const AccountInfo = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row px-10 py-5 bg-[url('/header-image.png')] bg-no-repeat bg-cover bg-fixed">
        {/* SIDE BAR */}
        <div className="flex flex-col">
          <BackHome />
          <StoreNav />
        </div>
        <div className="flex flex-col gap-5">
          <div className="ml-5 flex flex-row h-[60px]">
            <Image
              src="/rankacc/rank-03.png"
              width={70}
              height={90}
              className="mr-3"
              alt="title"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">League Ranked Accounts!</h1>
              <p className="text-gray-500 font-semibold">
                Buy the highest quality League of Legends Ranked Accounts
              </p>
            </div>
          </div>
          <div className="flex flex-row ml-5">
            <div className="flex flex-col">
              {/* ACCOUNT DATA */}
              <div className="container-style flex flex-col w-[850px] h-[340px]">
                <div className="p-4 flex gap-2 items-center">
                  <TfiAlignJustify />
                  <h1 className="font-light">Account Data</h1>
                </div>
                <div className="flex flex-row justify-around gap-8 mt-3 ml-3">
                  <div className="flex flex-col gap-[50px]">
                    <div className="flex flex-col">
                      <h1>Current Rank</h1>
                      <p className="text-gray-500 text-sm">Challanger</p>
                    </div>
                    <div className="flex flex-col">
                      <h1>Server</h1>
                      <p className="text-gray-500 text-sm">Europe West</p>
                    </div>
                    <div className="flex flex-col">
                      <h1>Riot Points</h1>
                      <p className="text-gray-500 text-sm">2,490 RP</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[50px]">
                    <div className="flex flex-col">
                      <h1>Level</h1>
                      <p className="text-gray-500 text-sm">457</p>
                    </div>
                    <div className="flex flex-col">
                      <h1>Level Up Method</h1>
                      <p className="text-gray-500 text-sm">Manually</p>
                    </div>
                    <div className="flex flex-col">
                      <h1>Champions</h1>
                      <p className="text-gray-500 text-sm">66</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[50px]">
                    <div className="flex flex-col">
                      <h1>Last Season</h1>
                      <p className="text-gray-500 text-sm">Diamond IV</p>
                    </div>
                    <div className="flex flex-col">
                      <h1>Blue Essence</h1>
                      <p className="text-gray-500 text-sm">92,211</p>
                    </div>
                    <div className="flex flex-col">
                      <h1>Skins</h1>
                      <p className="text-gray-500 text-sm">12</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-style flex flex-col w-[850px] h-[340px] mt-5">
                <div className="p-4 flex gap-2 items-center">
                  <GiCrossedSwords />
                  <h1 className="font-light">Champions</h1>
                </div>
                <div className="flex flex-wrap overflow-y-scroll">
                  {champInfo.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col items-center mt-3 gap-3 ml-5"
                    >
                      <Image
                        src={item.img}
                        width={90}
                        height={90}
                        alt="champ"
                      />
                      <h1>{item.champ}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start container-style w-[450px] h-[350px] ml-5">
              <h1 className="mt-5 ml-5">Checkout</h1>
              <p className="text-gray-500 mt-1 ml-5 text-sm">
                You'll get the account logins instantly after the payment.
              </p>
              <div className="flex flex-row items-center gap-2 ml-5 mt-5">
                <AiOutlineCheckCircle />
                <p className="text-gray-500 text-sm">
                  Email and password can be changed
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 ml-5 mt-5">
                <AiOutlineCheckCircle />
                <p className="text-gray-500 text-sm">
                  Instant delivery after payment
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 ml-5 mt-5">
                <AiOutlineCheckCircle />
                <p className="text-gray-500 text-sm">
                  Free warranty and support
                </p>
              </div>
              <div className="flex flex-row mt-5 gap-1 items-center ml-5">
                <h1 className="font-semibold text-3xl">€450,99</h1>
                <p className="text-gray-500">EUR</p>
              </div>
              <div className="flex flex-row ml-40 items-center justify-center mt-5 gap-2 bg-blue-500 py-3 px-7 rounded-xl cursor-pointer hover:bg-blue-400">
                <button>Add to Cart</button>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tutorial />
      <FAQs />
      <Footer />
    </div>
  );
};

export default AccountInfo;
