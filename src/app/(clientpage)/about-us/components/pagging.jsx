"use client";
import { useLanguageStore } from "../../../../../store/language.store";
import { AboutUsPayload } from "../../../../../data";
import { useState } from "react";

const Pagging = () => {
  const [aboutUsData, setAboutUsData] = useState(AboutUsPayload);
  const { language } = useLanguageStore();
  return (
    <>
      <header className="flex flex-row items-start justify-between text-[#00305E] border-b">
        <div className="inline-flex md:gap-4 xl:gap-9 gap-0">
          <div className="border-r-2">
            <div className="pr-10 pl-10 md:pl-15 xl:pl-32 lg:pl-20">
              <h1 className="text-[15px] md:text-[25px] text-center font-semibold py-10 place-items-center">
                {/* Tentang Kami */}
                {aboutUsData[language].pagingHeader.title}
              </h1>
            </div>
          </div>
          <div className="inline-flex gap-20 text-[15px] md:text-[20px] text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px py-8 md:py-10">
              {aboutUsData[language].pagingHeader.url.map((val, idx) => {
                return (
                  <li className="px-10 py-1 md:px-3 xl:px-20" key={idx}>
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
              {/* <li className="px-10">
                <a
                  href="/about-us#pengenalan"
                  className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600"
                  aria-current="page"
                >
                  Pengenalan
                </a>
              </li>
              <li className="px-10">
                <a
                  href="/about-us#visi-misi"
                  className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600"
                >
                  Visi Misi
                </a>
              </li>
              <li className="px-10">
                <a
                  href="/about-us#jenjang-pendidikan"
                  className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600"
                >
                  Jenjang Penddikan
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Pagging;
