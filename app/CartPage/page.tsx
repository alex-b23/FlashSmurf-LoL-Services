import BackHome from "@/components/BackHome";
import Companies from "@/components/Companies";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Tutorial from "@/components/Tutorial";

import React from "react";
import Image from "next/image";

import { AiOutlineArrowRight } from "react-icons/ai";

const Cart = () => {
  return (
    <div className="">
      <Navbar />
      <BackHome />
      <div className="flex flex-row justify-center px-10 py-10 bg-[url('/header-image.png')] bg-no-repeat bg-cover bg-fixed">
        <div className="flex flex-col animation-02">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <div className="flex flex-col container-style relative mt-5">
            <div className="flex flex-row justify-center items-center border-b-2 gap-20 px-10 border-gray-600">
              <Image
                src="/rankacc/platinum.png"
                width={100}
                height={100}
                alt="cart"
              />
              <div className="flex flex-col items-center">
                <h1>Platinum Account</h1>
                <p className="text-gray-500">Europe West</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-500">Price</h1>
                <p className="font-bold text-xl">€67,90</p>
              </div>
            </div>
            <div className="flex flex-row justify-around items-center border-b-2 mt-5 gap-20 px-10 border-gray-600">
              <Image
                src="/store-03.png"
                width={80}
                height={80}
                alt="cart"
                className="rounded-full"
              />
              <div className="flex flex-col items-center">
                <h1>Ultimate Smurf Acc</h1>
                <p className="text-gray-500">Europe West</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-500">Price</h1>
                <p className="font-bold text-xl">€15,90</p>
              </div>
            </div>
            <div className="flex flex-row justify-around items-center border-b-2 mt-5 gap-20 px-10 border-gray-600">
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/rankacc/bronze.png"
                  width={80}
                  height={80}
                  alt="cart"
                  className="rounded-full"
                />
                <AiOutlineArrowRight />
                <Image
                  src="/rankacc/rank-04.png"
                  width={100}
                  height={100}
                  alt="cart"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <h1>Boosting Service</h1>
                <p className="text-gray-500">Europe West</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-500">Price</h1>
                <p className="font-bold text-xl">€150,90</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col container-style w-[500px] h-relative mt-[50px] ml-5 items-start sidebar">
          <div className="flex flex-col mt-5 ml-5 items-center">
            <h1 className="text-gray-500">Total Cost</h1>
            <p className="text-2xl font-bold">€234.70</p>
          </div>
          <div className="flex flex-col mt-5 ml-5">
            <h1 className="font-bold">Payment Details</h1>
            <p className="mt-2 text-gray-500">Card Holder</p>
            <input
              type="text"
              placeholder="Enter the Card Holder"
              className="text-gray-600 bg-black p-2 mt-2 rounded-xl border border-gray-700 w-[390px]"
            />
            <p className="mt-2 text-gray-500">Card Number</p>
            <input
              type="text"
              placeholder="**** **** **** ****"
              className="text-gray-600 bg-black p-2 mt-2 rounded-xl border border-gray-700 w-[390px]"
            />
            <div className="flex flex-row gap-2 mt-2">
              <input
                type="text"
                placeholder="Expiration Date"
                className="text-gray-600 bg-black p-2 mt-2 rounded-xl border border-gray-700 w-[200px]"
              />
              <input
                type="text"
                placeholder="CVV"
                className="text-gray-600 bg-black p-2 mt-2 rounded-xl border border-gray-700 w-[100px]"
              />
            </div>
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
            <div className="flex flex-row justify-center mt-5 gap-2 bg-blue-500 py-2 rounded-xl cursor-pointer hover:bg-blue-400 items-center">
              <button>Finalise Payment!</button>
              <AiOutlineArrowRight />
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

export default Cart;
