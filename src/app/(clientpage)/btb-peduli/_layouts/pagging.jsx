"use client";
import { useLanguageStore } from "../../../../../store/language.store";
import { BTBPeduliPayload } from "../../../../../data";
import { useState } from "react";

const Pagging = () => {
  const [btbPeduliData, setBTBPeduliData] = useState(BTBPeduliPayload);
  const { language } = useLanguageStore();

  return (
    <>
      <header className="flex flex-row items-start justify-between text-[#00305E] border-b">
        <div className="inline-flex gap-9 md:gap-11">
          <div className="border-r-2">
            <div className="pr-10 pl-10 md:pr-20 md:pl-32">
              <h1 className="text-[25px] md:text-[25px] text-center font-semibold py-8 md:py-10">
                {btbPeduliData[language].btbpedulititle}
              </h1>
            </div>
          </div>
          <div className="inline-flex gap-9 md:gap-20 text-[20px] md:text-[20px] text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px py-8 md:py-10">
              <li className="px-8 md:px-20 lg:px-4">
                <a
                  href="/btb-peduli#peduli-lingkungan"
                  className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600"
                  aria-current="page"
                >
                  {/* Peduli Lingkungan */}
                  {btbPeduliData[language].pedulilingkungantitle}
                </a>
              </li>
              <li className="px-8 md:px-20">
                <a
                  href="/btb-peduli#sukarelawan"
                  className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600"
                >
                  {/* Sukarelawan */}
                  {btbPeduliData[language].sukarelawantitle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Pagging;
