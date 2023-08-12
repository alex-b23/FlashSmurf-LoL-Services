import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsStars, BsRocketTakeoff } from "react-icons/bs";
import { GiSpartanHelmet, GiCrossedSwords } from "react-icons/gi";

const StoreNav = () => {
  return (
    <div className="flex flex-col container-style w-[300px] h-[300px]">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center">
          <Image
            src="/league-logo.png"
            width={150}
            height={150}
            alt="league"
            className="mt-5"
          />
        </div>
        <button className="text-gray-500 flex flex-row gap-2 items-center text-center px-7 hover:bg-gray-800 cursor-pointer mt-3">
          <Link href="/" className="flex gap-2">
            <BsStars className="text-xl" /> Services
          </Link>
        </button>
        <button className="text-gray-500 flex flex-row gap-2 items-center text-center px-7 hover:bg-gray-800 cursor-pointer mt-3">
          <Link href="/BoostingStore" className="flex gap-2">
            <BsRocketTakeoff className="text-xl" /> Boosting
          </Link>
        </button>
        <button className="text-gray-500 flex flex-row gap-2 items-center text-center px-7 hover:bg-gray-800 cursor-pointer mt-3">
          <Link href="/RankedStore" className="flex gap-2">
            <GiSpartanHelmet className="text-xl" /> Ranked Accounts
          </Link>
        </button>
        <button className="text-gray-500 flex flex-row gap-2 items-center text-center px-7 hover:bg-gray-800 cursor-pointer mt-3">
          <Link href="/UnrankedStore" className="flex gap-2">
            <GiCrossedSwords className="text-xl" /> Smurf Accounts
          </Link>
        </button>
      </div>
    </div>
  );
};

export default StoreNav;
