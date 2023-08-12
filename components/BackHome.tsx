import React from "react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const BackHome = () => {
  return (
    <Link
      href="/"
      className="flex flex-row items-center gap-2 font-semibold px-20 py-5 "
    >
      <AiOutlineArrowLeft />
      <p>Homepage</p>
    </Link>
  );
};

export default BackHome;
