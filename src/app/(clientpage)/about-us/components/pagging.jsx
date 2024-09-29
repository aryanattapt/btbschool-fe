"use client";

const Pagging = ({ language, aboutUsData, activeTab, setActiveTab }) => {
  return (
    <>
      <header className="flex flex-row items-start justify-between text-[#00305E] border-b">
        <div className="inline-flex gap-9 md:gap-11">
          <div className="border-r-2 flex items-center justify-center">
            <div className="lg:pr-10 lg:pl-10 md:pr-20 md:pl-32 sm:pr-5 sm:pl-5 pr-5 pl-5">
              <h1 className="text-[20px] md:text-[25px] text-center font-semibold">
                <div
                  className={`inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "pengenalan" ? "bg-white" : "bg-white"
                  }`}
                  onClick={() => setActiveTab("pengenalan")}
                >
                  {aboutUsData[language].pagingHeader.title}
                </div>
              </h1>
            </div>
          </div>
          <div className="inline-flex gap-9 sm:gap-5 md:gap-20 text-[20px] md:text-[20px] text-left text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px py-8 md:py-10">
              <li className="sm:px-8 md:px-20 lg:px-10 xl:px-20 px-5">
                <div
                  className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "pengenalan"
                      ? "bg-white text-black underline"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveTab("pengenalan")}
                >
                  {/* Pengenalan */}
                  {aboutUsData[language].pagingHeader.url[0].title}
                </div>
              </li>
              <li className="md:px-20 sm:px-8 px-5 lg:px-10 xl:px-20">
                <div
                  className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "visi-misi"
                      ? "bg-white text-black underline"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveTab("visi-misi")}
                >
                  {/* Visi Misi */}
                  {aboutUsData[language].pagingHeader.url[1].title}
                </div>
              </li>
              <li className="sm:px-8 md:px-20 px-5 lg:px-10 xl:px-20">
                <div
                  className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "jenjang-pendidikan"
                      ? "bg-white text-black underline"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveTab("jenjang-pendidikan")}
                >
                  {/* Jenjang Pendidikan */}
                  {aboutUsData[language].pagingHeader.url[2].title}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Pagging;
