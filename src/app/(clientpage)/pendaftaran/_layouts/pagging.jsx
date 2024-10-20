"use client";

const PaggingLayouts = ({
  language,
  pendaftaranData,
  activeTab,
  setActiveTab,
}) => {
  return (
    <>
      <header className="flex flex-row items-start justify-between text-[#00305E] border-b">
        <div className="inline-flex sm:gap-5 md:gap-11 lg:gap-14 xl:gap-10">
          <div className="border-r-2">
            <div className="pr-2 pl-2 md:pr-20 md:pl-32 sm:pr-5 sm:pl-5 md:pr-5 md:pl-5">
              <a href="/onlineregistration">
                <h1 className="text-[25px] md:text-[25px] text-center font-semibold py-8 md:py-10">
                  <div className="cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600">
                    {pendaftaranData[language]?.mainTitle}
                  </div>
                </h1>
              </a>
            </div>
          </div>
          <div className="inline-flex text-[20px] md:text-[20px] text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px py-8 md:py-10">
              <li className="px-10 sm:px-4 md:px-2 lg:px-4 xl:px-[100px]">
                <div
                  className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "enrolment"
                      ? "bg-white text-black underline"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveTab("enrolment")}
                >
                  {pendaftaranData[language]?.pagingHeader?.url[0]?.title}
                </div>
              </li>
              <li className="px-10 sm:px-4 md:px-2 lg:px-4 xl:px-[100px]">
                <div
                  className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "beasiswa"
                      ? "bg-white text-black underline"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveTab("beasiswa")}
                >
                  {pendaftaranData[language]?.pagingHeader?.url[1]?.title}
                </div>
              </li>
              <li className="px-10 sm:px-4 md:px-2 lg:px-4 xl:px-[100px]">
                <div
                  className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "tur-sekolah"
                      ? "bg-white text-black underline"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveTab("tur-sekolah")}
                >
                  {pendaftaranData[language]?.pagingHeader?.url[2]?.title}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default PaggingLayouts;
