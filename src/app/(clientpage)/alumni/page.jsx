'use client'
import AlumniForm from "./_layouts/form";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import useLanguage from "../../../hooks/useLanguage";
import { useState } from "react";
import {AlumniPayload} from '../../../../data';

const AlumniPage = () => {
  const [alumniPayload, _] = useState(AlumniPayload);
  const {language} = useLanguage();

  return (
    <>
      <Banner />
      <Pagging/>
      <div className="flex-col px-12 pb-12">
        <div id="hubungi-kami" className="">
          <h1 className="mt-10 text-[#00305E] md:text-[35px] text-[28px] font-semibold">
            {alumniPayload[language].title}
          </h1>
          <p className="md:text-[16px] text-[14px] text-black">
          {alumniPayload[language].desc}
          </p>
        </div>
        <AlumniForm />
      </div>
    </>
  );
};

export default AlumniPage;
