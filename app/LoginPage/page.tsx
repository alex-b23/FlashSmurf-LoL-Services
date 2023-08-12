import BackHome from "@/components/BackHome";
import Navbar from "@/components/Navbar";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineGoogle } from "react-icons/ai";
import Footer from "@/components/Footer";

const Login = () => {
  return (
    <div className="bg-[#0f1014]">
      <BackHome />
      <div className="flex flex-row items-center justify-center min-h-screen animation-02">
        <div className="relative flex flex-col container-style shadow-2xl">
          <div className="flex flex-col justify-center p-8">
            <span className="text-3xl font-bold">Welcome back</span>
            <span className="font-light text-gray-500 mt-2">
              Please enter your details
            </span>
            <div className="py-5 px-5 flex-col items-start mt-10">
              <p>Email</p>
              <input
                type="text"
                placeholder="Enter your E-mail"
                className="text-gray-600 bg-black p-2 mt-2 rounded-xl border border-gray-700 w-[390px]"
              />
            </div>
            <div className="py-5 px-5 flex-col items-start mt-1">
              <p>Password</p>
              <input
                type="password"
                placeholder="Enter your Password"
                className="text-gray-600 bg-black p-2 mt-2 rounded-xl border border-gray-700 w-[390px]"
              />
            </div>
            <div className="flex flex-row items-center justify-between mt-3">
              <p className="font-light text-gray-500">
                {" "}
                <input type="checkbox" /> Remember For 30 days
              </p>
              <button className="font-semibold">Forgot Password</button>
            </div>
            <button className="mt-10 container-style py-2 hover:bg-gray-800">
              Sign In
            </button>
            <button className="mt-5 container-style py-2 hover:bg-gray-800 flex flex-row justify-center gap-2 items-center">
              <AiOutlineGoogle className="text-2xl" />
              Sign In with Google
            </button>
            <div className="flex flex-row items-center justify-center mt-10 gap-4">
              <p className="text-gray-500">Don't have an Account?</p>
              <button className="font-semibold">Sign up for free</button>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/login-image.png"
            width={365}
            height={0}
            alt="login"
            className="rounded-xl"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
