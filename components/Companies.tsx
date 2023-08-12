import React from "react";
import Image from "next/image";

const Companies = () => {
  return (
    <div className="flex flex-row justify-around items-center gap-2 py-20">
      <Image src="/payments/visa.png" width={100} height={100} alt="pay" />
      <Image src="/payments/apay.png" width={100} height={100} alt="pay" />
      <Image src="/payments/gpay.png" width={100} height={100} alt="pay" />
      <Image
        src="/payments/mastercard.png"
        width={100}
        height={100}
        alt="pay"
      />
      <Image src="/payments/btc.png" width={100} height={100} alt="pay" />
    </div>
  );
};

export default Companies;
