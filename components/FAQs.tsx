import React from "react";
import { accordions } from "./data";
import Accordtion from "./Accordtion";

const FAQs = () => {
  return (
    <div className="wrapper mt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-4xl font-bold">
          Buying Accounts Frequently Ask Questions
        </h1>
        <p className="text-gray-500 text-center font-semibold text-xl mb-10 mt-2">
          Have a quick question? It's most probably answered here.
        </p>
      </div>

      {/* Main Container */}
      <div className="sm:max-w-[700px] sm:h-full sm:mx-auto px-5">
        {accordions.map((item, id) => {
          const { question, answer } = item;
          return (
            <div className="container-style flex flex-col mt-5" key={id}>
              <Accordtion question={question} answer={answer}></Accordtion>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
