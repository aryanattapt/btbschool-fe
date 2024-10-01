"use client";
import React from "react";

const StepsLayouts = ({ data, language }) => {
  return (
    <>
      <div className="md:mx-32 mx-10 text-black leading-loose">
        <h2 className="md:text-[25px] text-[28px] mb-[10px] font-semibold">
          {data[language].title}
        </h2>
        <p className="text-[14px] md:text-[16px] leading-[35px]">
          {data[language].subtitle}
        </p>
        <ul className="list-disc text-[14px] md:text-[16px]">
          {data[language].stepsList.map((val, idx) => {
            return (
              <li key={idx}>
                {val.titleStep} <br></br> {val.descStep}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default StepsLayouts;
