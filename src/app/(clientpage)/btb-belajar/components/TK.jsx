const TK = ({btbBelajarData, language}) => {
  return (
    <>
      <div className="relative">
        <div className="mt-10 mb-5">
          <h1 className="md:text-[35px] text-[25px] font-semibold px-10 md:px-10 lg:px-32 xl:px-32 text-[#00305E]">
            {btbBelajarData[language]?.tk?.title}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex">
            <img
              src={`${btbBelajarData.image13}`}
              alt="PAUD"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="content-center bg-[#EF802B] p-5">
            <div className="text-center md:text-center lg:text-center xl:text-justify text-[14px] md:text-[20px] lg:text-[25px] xl:text-[20px] text-[#000000] text-pretty">
              {btbBelajarData[language]?.tk?.introduction?.paragraph}
            </div>
          </div>
        </div>
        {/* kurikulum */}
        <div className="mt-10 mb-5 px-10 md:px-10 lg:px-32 xl:px-32">
          <div className="border-b-8 border-[#EF802B] w-fit">
            <h1 className="text-[25px] md:text-[30px] font-semibold text-[#00305E]">
              {btbBelajarData[language]?.tk?.curriculum?.title}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-10 lg:px-32 xl:px-32 mt-5 gap-12">
          <div className="text-[#000000] text-[14px] md:text-[20px] lg:text-[25px] xl:text-[18px]">
            <h1 className="text-balance text-[25px] lg:text-[30px]">{btbBelajarData[language]?.tk?.curriculum?.subtitle}</h1>
            <div className="ml-5">
              <ul className="list-disc">
                {btbBelajarData[language]?.tk?.curriculum?.components1?.map(
                  (val, idx) => {
                    return <li key={idx}>{val}</li>;
                  }
                )}
              </ul>
            </div>
            <div className="mt-2 text-pretty">
              {btbBelajarData[language]?.tk?.curriculum?.desc1}
            </div>
          </div>
          <div className="text-[#000000] text-[14px] md:text-[20px] lg:text-[25px] xl:text-[18px]">
            <h1 className="text-balance text-[25px] lg:text-[30px]">{btbBelajarData[language]?.tk?.curriculum?.subtitle2}</h1>
            <div className="ml-5">
              <ul className="list-disc">
                {btbBelajarData[language]?.tk?.curriculum?.components2.map(
                  (val, idx) => {
                    return <li key={idx}>{val}</li>;
                  }
                )}
              </ul>
            </div>
            <div className="mt-2 text-left text-pretty text-balance">
              {btbBelajarData[language]?.tk?.curriculum?.desc2}
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-center items-center">
          <div className="border-b-8 border-[#EF802B] w-fit">
            <h1 className="text-[25px] lg:text-[30px] font-semibold text-[#00305E]">
              {btbBelajarData[language]?.tk?.activity?.title}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 md:px-10 lg:px-32 xl:px-32 mt-5 text-[14px] md:text-[20px] lg:text-[25px] xl:text-[18px]">
          <div className="flex">
            <div className="flex flex-wrap content-center justify-center h-full">
              <div
                className="pr-0 lg:pr-10 text-left text-balance text-[#000000] xl:leading-loose"
              >
                {btbBelajarData[language]?.tk?.activity?.content}
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-full h-full">
              {
                btbBelajarData?.image14 && <img
                  src={`${btbBelajarData.image14}`}
                  alt="SMP"
                  className="w-full h-full object-cover"
                />
              }
            </div>
          </div>
        </div>
        {/* PROGRAM KAMI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 md:px-10 lg:px-32 xl:px-32 mt-10 text-[14px] md:text-[20px] lg:text-[25px] xl:text-[18px]">
          <div className="flex">
            <div className="w-full h-full">
              {
                btbBelajarData?.image15 && <img
                  src={`${btbBelajarData.image15}`}
                  alt="SMP"
                  className="w-full h-full object-cover"
                />
              }
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-wrap content-center justify-center h-full">
              <div
                className="pl-5 lg:pl-10
                text-left text-balance text-[#000000]"
              >
                <div>
                  <h1 className="font-semibold text-[#000000]">
                    {/* PROGRAM KAMI */}
                    {btbBelajarData[language]?.tk?.programs?.title}
                  </h1>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  <div>
                    <ul className="list-disc">
                      {btbBelajarData[language]?.tk?.programs?.list1?.map(
                        (val, idx) => {
                          return <li key={idx}>{val}</li>;
                        }
                      )}
                    </ul>
                    <div className="pt-1">
                      {btbBelajarData[language]?.tk?.programs?.desc}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Diluar Kelas */}
        <div className="diLuarKelas">
          <div className="mt-20 flex justify-end items-center px-10 md:px-10 lg:px-32 xl:px-32">
            <div className="border-b-8 border-[#EF802B] w-fit">
              <h1 className="text-[25px] lg:text-[30px] font-semibold text-[#00305E]">
                {/* DI LUAR RUANGAN */}
                {btbBelajarData[language]?.tk?.outdoor?.title}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 px-10 md:px-10 lg:px-32 xl:px-32 mt-10 text-[14px] md:text-[20px] lg:text-[25px] xl:text-[18px]">
            <div className="flex">
              <div className="w-full h-full">
                <img
                  src={`${btbBelajarData.image16}`}
                  alt="SMP"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-wrap content-center justify-center h-full">
                <div className="pl-0 xl:pl-5 text-left md:text-justify lg:text-justify xl:text-justify md:text-left lg:text-left xl:text-left">
                  <div>
                    <h1 className="font-semibold text-[16px] lg:text-[30px] xl:text-[20px]">
                      {btbBelajarData[language]?.tk?.outdoor?.text}
                    </h1>
                  </div>
                  <div className="text-justify text-[14px] md:text-[16px]">
                    {btbBelajarData[language]?.tk?.outdoor?.paragraph}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 flex justify-center items-center">
            <a
              className="text-center group text-[14px] md:text-[16px] lg:text-[25px] xl:text-[20px] w-[250px] md:w-[250px] lg:w-[350px] xl:w-[250px] focus:outline-none text-white bg-[#00305E] focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 md:py-2.5 lg:py-5 xl:py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              href="/contact"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TK;
