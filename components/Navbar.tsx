import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MobileMenu } from "./exports";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pb-10 md:px-20 md:py-10 sidebar">
      {/* LOGO */}
      <div className="flex flex-row justify-center items-center">
        <Image src="/new-logo.png" width={100} height={100} alt="logo" />
        <h1 className="hidden md:flex md:font-bold md:text-xl md:uppercase">
          FlashSmurfs
        </h1>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex md:gap-5">
        <Link href="/" className="link link-underline link-underline-black">
          Home
        </Link>
        <Link href="/" className="link link-underline link-underline-black">
          Features
        </Link>
        <Link href="/" className="link link-underline link-underline-black">
          Store
        </Link>
        <Link href="/" className="link link-underline link-underline-black">
          Community
        </Link>
        <Link href="/" className="link link-underline link-underline-black">
          Why Us?
        </Link>
        <Link href="/" className="link link-underline link-underline-black">
          Step-by-Step
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <MobileMenu />
      </div>

      {/* BUTTONS */}
      <div className="hidden md:flex md:flex-row md:items-center md:gap-4">
        <button className="flex flex-row items-center border border-b-2 p-4 rounded-full bg-transparent border-blue-700 hover:bg-blue-700">
          <Link href="/LoginPage" className="flex items-center">
            <BiUserCircle className="text-xl mr-1" />
            Client Area
          </Link>
        </button>
        <Link href="/CartPage">
          <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
