"use client";
import { ContactUsPayLoad } from "../../../../../data";
import { useLanguageStore } from "../../../../../store/language.store";
import { useState } from "react";

const PaggingLayouts = () => {
  const [contactUsData, setcontactUsData] = useState(ContactUsPayLoad);
  const { language } = useLanguageStore();
  return (
    <>
      <header className="flex flex-row items-start justify-between text-[#00305E] border-b">
        <div className="inline-flex md:gap-9 gap-7">
          <div className="border-r-2">
            <div className="pr-10 pl-10 md:pl-32 md:pr-32 place-items-center">
              <h1 className="md:text-[25px] text-[25px] text-center font-semibold py-10 md:py-10">
                {contactUsData[language].pagingHeader.title}
              </h1>
            </div>
          </div>
          <div className="inline-flex gap-20 md:text-[20px] text-[15px] text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap py-10 md:py-10">
              {contactUsData[language].pagingHeader.url.map((val, idx) => {
                return (
                  <li
                    className="px-[3px] md:px-[150px] py-3
                   md:py-0"
                    key={idx}
                  >
                    <a
                      href={`${val.url}`}
                      className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 active"
                      aria-current="page"
                    >
                      {val.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default PaggingLayouts;
