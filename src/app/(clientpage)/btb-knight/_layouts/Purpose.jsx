import React from "react";

const BtbKnightOpening = ({ btbKnightData, language }) => {
  return (
    <div id="purpose" className="flex w-full gap-x-12">
      {/* Bagian Gambar */}
      <div className="w-1/2">
        <div className="relative md:h-[350px] h-[200px]">
          {btbKnightData?.purposeImage && (
            <img
              src={btbKnightData?.purposeImage}
              alt="Banner BTB Knight"
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Bagian Teks */}
      <div className="w-1/2 p-5">
        <h1 className="md:text-[35px] text-[25px] font-semibold text-[#00305E]">
          {btbKnightData[language]["purposeContent"]["title"]}
        </h1>
        <p className="text-pretty mt-4 leading-7">
          {btbKnightData[language]["purposeContent"]["content"]}
        </p>
      </div>
    </div>
  );
};

export default BtbKnightOpening;
