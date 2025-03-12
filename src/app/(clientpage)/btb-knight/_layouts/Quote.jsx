import React from "react";

const BtbKnightQuote = ({ btbKnightData, language }) => {
  return (
    <div className="relative flex justify-center my-24">
      <div className="bg-[#ee802b] w-screen text-center text-white font-bold text-[25px] md:text-[35px] px-6 py-2 inline-block rotate-[-2deg]">
        {btbKnightData[language]["quote"]}
      </div>
    </div>
  );
};

export default BtbKnightQuote;
