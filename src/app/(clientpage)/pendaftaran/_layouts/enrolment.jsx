"use client";
import React from "react";
/* import { useLanguageStore } from "../../../../../store/language.store"; */

const EnrolmentPage = ({ data, language }) => {
  /* const { language } = useLanguageStore(); */

  return (
    <>
      <div className="md:mx-32 mx-10 grid md:grid-cols-1 grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 text-black leading-loose my-5">
        <div>
          <h2 className="md:text-[25px] text-[28px]  font-semibold text-[#00305E]">
            {data[language].enrolmentPagedata.title}
          </h2>
          <p className="text-[16px] md:text-[19px] leading-[35px]">
            {data[language].enrolmentPagedata.subtitle}
          </p>

          <div className="my-7">
            {data[language].enrolmentPagedata.stepsList.map((val, idx) => {
              return (
                <div key={idx} className="mb-6">
                  <p className="text-base	font-semibold">{val.titleStep}</p>
                  <p>{val.descStep}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pl-[0px] md:pl-[50px] py-5 md:py-5 xl:py-0">
          <img
            // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/bannercontact.jpeg"
            src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/PAUD/Slider(1).JPG"
            alt="aboutus2"
            className="md:h-[500px] md:w-[546px] px-4 object-cover"
          />
        </div>
      </div>

      <div className="md:mx-32 mx-10 mb-5">
        <p className="text-red-500	">{data[language].enrolmentPagedata.notes}</p>
      </div>
    </>
  );
};

export default EnrolmentPage;
