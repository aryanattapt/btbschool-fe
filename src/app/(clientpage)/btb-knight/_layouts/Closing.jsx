import React from "react";

const BtbKnightOpening = ({ btbKnightData, language }) => {
  return (
    <div className="flex w-full gap-x-12">
      {/* Bagian Teks */}
      <div className="w-1/2 p-5">
        <h1 className="md:text-[35px] text-[25px] font-semibold text-[#00305E]">
          {btbKnightData[language]["closingContent"]["title"]}
        </h1>
        <p className="text-pretty mt-4 leading-7">
          {btbKnightData[language]["closingContent"]["content"]}
        </p>
      </div>

      {/* Bagian Gambar */}
      <div className="w-1/2">
        <div className="relative md:h-[350px] h-[200px]">
          {btbKnightData?.closingImage && (
            <img
              src={btbKnightData?.closingImage}
              alt="Banner BTB Knight"
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BtbKnightOpening;
