"use client";

import {useLanguageStore} from '../../../../../store/language.store';
import {BTBBelajarPayload} from '../../../../../data';
import { useState } from 'react';

const Pagging = () => {
  const [btbBelajarData, setBtbBelajarData] = useState(BTBBelajarPayload);
  const { language } = useLanguageStore();

  return (
    <>
      <header className="flex flex-row items-start justify-between text-[#00305E] border-b">
        <div className="inline-flex gap-12">
          <div className="border-r-2">
            <div className="pr-10 pl-32">
              <h1 className="text-[25px] text-center font-semibold py-10">{btbBelajarData[language].paging.title}</h1>
            </div>
          </div>
          <div className="inline-flex gap-20 text-[20px] text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <ul className="flex flex-wrap -mb-px py-10">
                {
                  btbBelajarData[language].paging.url.map((val, idx) => {
                    return <li className="px-10" key={idx}>
                        <a href={`${val.url}`} className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 active" aria-current="page">{val.title}</a>
                    </li>
                  })
                }
                  {/* <li className="px-10">
                      <a href="/btb-belajar/TK" className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 active" aria-current="page">Paud - TK</a>
                  </li>
                  <li className="px-10">
                      <a href="/btb-belajar/SD" className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600">Sekolah Dasar</a>
                  </li>
                  <li className="px-10">
                      <a href="/btb-belajar/SMP" className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600">SMP</a>
                  </li>
                  <li className="px-10">
                      <a href="/btb-belajar/SMA" className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600">SMA</a>
                  </li> */}
              </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Pagging;
