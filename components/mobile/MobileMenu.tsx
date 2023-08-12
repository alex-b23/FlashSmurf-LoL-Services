"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Store", url: "/RankedStore" },
  { id: 3, title: "Cart", url: "/CartPage" },
  { id: 4, title: "Client Area", url: "/LoginPage" },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mr-10">
      {!open ? (
        <AiOutlineMenu className="text-2xl" onClick={() => setOpen(true)} />
      ) : (
        <AiOutlineCloseCircle
          className="text-2xl"
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="transition-all duration-500 container-style flex flex-col items-center justify-center text-2xl gap-8 left-0 top-24 h-[300px] w-screen">
          {links.map((item) => (
            <Link href={item.url}>{item.title}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
