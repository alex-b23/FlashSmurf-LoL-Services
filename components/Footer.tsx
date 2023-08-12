import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-950 relative">
      <div className="flex flex-col items-center px-10">
        <div className="flex flex-row items-center justify-center gap-10">
          <Image src="/new-logo.png" width={100} height={100} alt="footer" />
          <h1 className="text-gray-500">Terms of Service</h1>
          <h2 className="text-gray-500">Privacy Policy</h2>
          <h3 className="text-gray-500">Blog</h3>
          <h4 className="text-gray-500">Contact</h4>
        </div>
        <p className="text-gray-500 mt-10">
          League of Legends, Valorant are registered trademarks of Riot Games,
          Inc. ©
        </p>
        <p className="text-gray-500 mt-5 mb-5">
          © 2020-2023 FlashSmurfers.net™ - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
