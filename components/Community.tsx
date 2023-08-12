import React from "react";
import { AiFillStar, AiOutlineCheckCircle } from "react-icons/ai";
import { reviews } from "./data";

const Community = () => {
  return (
    <div className="flex flex-col justify-center mt-10">
      <div className="flex flex-col text-center justify-center">
        <h1 className="text-5xl font-bold">Our Community</h1>
        <p className="text-xl text-gray-500 font-semibold mt-2">
          {" "}
          Join a large & rapidly growing community and see what our customers
          say!
        </p>
        <div className="flex items-center justify-center text-xl mt-2">
          <h1 className="font-bold">4,95</h1>
          <AiFillStar />
          <p className="text-gray-500 md:ml-2">
            Reviews on Trustpilot & Reviews.io
          </p>
        </div>
      </div>

      <div className="flex flex-row overflow-x-scroll px-20 py-10">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-between mt-10 ml-5"
          >
            <div className="flex flex-col justify-center items-center container-style w-[400px] h-[300px] rounded-xl gap-20">
              <div className="flex items-center gap-2 font-bold text-xl">
                <AiOutlineCheckCircle />
                <h1>Satisfied Customer</h1>
              </div>

              <p className="">{item.review}</p>

              <div className="flex flex-row justify-around gap-[200px]">
                <div className="flex flex-col">
                  <h1>{item.name}</h1>
                  <p className="text-gray-500">{item.time}</p>
                </div>
                <div className="flex flex-row items-center">
                  <h1 className="text-3xl font-bold">{item.stars}</h1>
                  <AiFillStar className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
