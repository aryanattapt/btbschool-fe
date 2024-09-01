"use client";

const Pagging = ({ language, btbPeduliData, activeTab, setActiveTab }) => {
  return (
    <>
      <header className="flex flex-row items-start justify-between text-[#00305E] border-b">
        <div className="inline-flex gap-9 md:gap-11">
          <div className="border-r-2">
            <div className="pr-10 pl-10 md:pr-20 md:pl-32">
              <h1 className="text-[25px] md:text-[25px] text-center font-semibold py-8 md:py-10">
                <a
                  href="/btb-peduli"
                  className={`inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "introduction" ? "bg-white text-black" : "bg-white"}`}
                    onClick={() => setActiveTab("introduction")}
                >
                {btbPeduliData[language].btbpedulititle}
                </a>
              </h1>
            </div>
          </div>
          <div className="inline-flex gap-9 md:gap-20 text-[20px] md:text-[20px] text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px py-8 md:py-10">
              <li className="px-8 md:px-20 lg:px-4">
                <a
                  href="/btb-peduli#peduli-lingkungan"
                  className={`inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "peduli-lingkungan" ? "bg-white text-black underline" : "bg-white"}`}
                    onClick={() => setActiveTab("peduli-lingkungan")}
                >
                  {/* Peduli Lingkungan */}
                  {btbPeduliData[language].pedulilingkungantitle}
                </a>
              </li>
              <li className="px-8 md:px-20">
                <a
                  href="/btb-peduli#sukarelawan"
                  className={`inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "sukarelawan" ? "bg-white text-black underline" : "bg-white"}`}
                  onClick={() => setActiveTab("sukarelawan")}
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
