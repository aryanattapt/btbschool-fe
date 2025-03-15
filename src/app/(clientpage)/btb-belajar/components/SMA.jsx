const SMA = ({ btbBelajarData, language }) => {
  const labelSubjects = {
    ID: "Kelompok Mata Pelajaran :",
    EN: "Subject Group :",
  };

  return (
    <>
      <div className="relative">
        <div className="mt-10 mb-5">
          <h1 className="text-[25px] lg:text-[30px] md:text-[35px] font-bold px-10 md:px-10 lg:px-32 xl:px-32 text-[#00305E]">
            {/* SEKOLAH MENENGAH ATAS */}
            {btbBelajarData[language]?.sma?.title}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex">
            {btbBelajarData?.image5 && (
              <img
                src={`${btbBelajarData?.image5}`}
                alt="SD"
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="content-center bg-[#EF802B] p-5 text-center md:text-center lg:text-center xl:text-justify text-[14px] md:text-[20px] lg:text-[25px] xl:text-[20px] text-[#000000] text-pretty ">
            <h1 className="text-balance font-semibold">
              {btbBelajarData[language]?.sma?.introduction?.title}
            </h1>
            <p className="whitespace-pre-line">
              {btbBelajarData[language]?.sma?.introduction?.paragraph}
            </p>
          </div>
        </div>
        <div className="mt-10 mb-5 px-10 md:px-10 lg:px-32 xl:px-32">
          <div className="border-b-8 border-[#EF802B] w-fit">
            <h1 className="text-[25px] lg:text-[30px] font-semibold text-[#00305E]">
              {/* KURIKULUM */}
              {btbBelajarData[language]?.sma?.curriculum?.title}
            </h1>
          </div>
          <h1 className="text-balance text-[18px] lg:text-[30px] text-[#000000] mt-5">
            {/* The International Baccalaureate (IB) Diploma Programme (DP) */}
            {btbBelajarData[language]?.sma?.curriculum?.subtitle}
          </h1>
        </div>
        <div className="text-[#000000] text-justify px-10 md:px-10 lg:px-32 xl:px-32 text-[14px] md:text-[20px] lg:text-[25px] xl:text-[20px]">
          <p className="my-5 whitespace-pre-line">
            {btbBelajarData[language]?.sma?.curriculum?.paragraph}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="ml-5">
              <ul className="list-disc">
                {btbBelajarData[language]?.sma?.curriculum?.components?.map(
                  (val, idx) => {
                    return (
                      <li key={idx}>
                        <strong>{val?.title} </strong>
                        {val?.description}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
            <div className="ml-5">
              <div>{labelSubjects[language]}</div>
              <ul className="list-disc mt-2">
                {btbBelajarData[language]?.sma?.curriculum?.subjectGroups?.map(
                  (val, idx) => {
                    return (
                      <li key={idx}>
                        <strong>{val}</strong>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="my-10 bg-slate-300">
          <div className="flex justify-center md:text-center xl:text-justify items-center py-10 mx-10 md:mx-20 text-[#00305E] xl:leading-loose text-[14px] md:text-[20px] lg:text-[25px] xl:text-[20px] font-semibold">
            <p className="whitespace-pre-line">
              {btbBelajarData[language]?.sma?.activities}
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center items-center">
          <div className="border-b-8 border-[#EF802B] w-fit">
            <h1 className="text-[25px] lg:text-[30px] font-semibold text-[#00305E]">
              {btbBelajarData[language]?.sma?.programs?.title}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 md:px-10 lg:px-32 xl:px-32 mt-5 text-[14px] md:text-[20px] lg:text-[25px] xl:text-[20px]">
          <div className="flex">
            <div className="flex flex-wrap content-center justify-center h-full">
              <div className="pr-0 lg:pr-10 md:text-justify text-pretty text-[#000000] xl:leading-loose whitespace-pre-line">
                {btbBelajarData[language]?.sma?.programs?.desc}
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-full h-full">
              {btbBelajarData?.image6 && (
                <img
                  src={`${btbBelajarData?.image6}`}
                  alt="SMP"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
        {/* program kami */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 md:px-10 lg:px-32 xl:px-32 mt-10 text-[14px] md:text-[20px] lg:text-[25px] xl:text-[20px] xl:text-[18px]">
          <div className="flex">
            <div className="w-full h-full">
              {btbBelajarData?.image7 && (
                <img
                  src={`${btbBelajarData.image7}`}
                  alt="SMP"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-wrap content-center justify-center h-full">
              <div className="pl-10 lg:pl-10 text-left text-balance text-[#000000]">
                <div>
                  <h1 className="font-semibold text-[#000000]">
                    {/* PROGRAM KAMI */}
                    {btbBelajarData[language]?.sma?.programs?.title}
                  </h1>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <ul className="list-disc">
                      {btbBelajarData[language]?.sma?.programs?.list1?.map(
                        (val, idx) => {
                          return <li key={idx}>{val}</li>;
                        }
                      )}
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc">
                      {btbBelajarData[language]?.sma?.programs?.list2?.map(
                        (val, idx) => {
                          return <li key={idx}>{val}</li>;
                        }
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="diLuarKelas mb-10">
          <div className="mt-10 md:mt-20 flex justify-end items-center pr-10 md:pr-10 lg:pr-32 xl:pr-32">
            <div className="border-b-8 border-[#EF802B] w-fit">
              <h1 className="text-[25px] lg:text-[30px] font-semibold text-[#00305E]">
                {/* DI LUAR RUANGAN */}
                {btbBelajarData[language]?.sma?.outdoor?.title}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 px-10 md:px-10 lg:px-32 xl:px-32 mt-10 text-[14px] md:text-[20px] lg:text-[25px] xl:text-[18px]">
            <div className="flex">
              <div className="w-full h-full">
                {btbBelajarData?.image8 && (
                  <img
                    src={`${btbBelajarData.image8}`}
                    alt="SMP"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-wrap content-center justify-center h-full">
                <div className="pl-0 xl:pl-5 text-left">
                  <div>
                    <h1 className="font-semibold text-[16px] lg:text-[30px] xl:text-[20px]">
                      {btbBelajarData[language]?.sma?.outdoor?.text}
                    </h1>
                  </div>
                  <div className="text-justify whitespace-pre-line">
                    {btbBelajarData[language]?.sma?.outdoor?.paragraph}
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

export default SMA;
