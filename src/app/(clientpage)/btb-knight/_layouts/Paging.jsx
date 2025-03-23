import React from "react";

const BtbKnightPaging = ({ btbKnightData, language }) => {
  const id = ["opening", "purpose", "gallery"];

  return (
    <div className="sm:block">
      <header className="flex flex-row items-start justify-between text-[#00305E] border-b">
        <div className="inline-flex sm:gap-5 md:gap-11 lg:gap-14 xl:gap-10">
          <div className="border-r-2 flex items-center justify-center">
            <div className="pr-10 pl-10 md:pr-14 md:pl-20 lg:pr-20 lg:pl-32">
              <h1 className="text-[25px] md:text-[25px] text-center font-semibold py-8 md:py-10">
                <div className="border-transparent rounded-t-lg">
                  {btbKnightData[language]["title"]}
                </div>
              </h1>
            </div>
          </div>
          <div className="inline-flex text-lg sm:text-[20px] text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-col items-center gap-y-2 sm:flex-row sm:gap-x-8 md:gap-x-16 2xl:gap-x-24 -mb-px py-8 md:py-10 px-5">
              {btbKnightData[language]["navigation"]?.map((val, idx) => {
                return (
                  <li className="px-2 sm:px-5 md:px-4 lg:px-10" key={idx}>
                    <a
                      className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600`}
                      href={`#${id[idx]}`}
                    >
                      {val?.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default BtbKnightPaging;
