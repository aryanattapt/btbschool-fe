"use client";
import React from "react";
import AlumniForm from "./form";

const PendaftaranAlumni = ({ data, language }) => {

  return (
    <div className="flex-col px-12 pb-12">
        <div id="hubungi-kami" className="">
            <h2 className="text-[#00305E] text-[25px] md:text-[50px] font-semibold mx-5 my-5 mb-5">
            {data[language].title}
            </h2>
            <p className="md:text-[16px] text-[14px] text-black">
            {data[language].desc}
            </p>
        </div>
        <AlumniForm />
    </div>
  );
};

export default PendaftaranAlumni;