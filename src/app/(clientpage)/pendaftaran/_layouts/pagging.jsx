const PaggingLayouts = ({
  language,
  pendaftaranData,
  activeTab,
  setActiveTab,
}) => {
  const onClickPagination = (selectedTab) => {
    const hashId = {
      enrolment: "enrolment",
      beasiswa: "scholarship",
      "tur-sekolah": "school-tour",
    };
    window.location.hash = hashId[selectedTab];
    setActiveTab(selectedTab);
  };

  const paginationClick = ["enrolment", "beasiswa", "tur-sekolah"];

  const goToOnlineRegistration = () => {
    window.location.href = `${pendaftaranData[language]?.pagingHeader?.url[3]?.url}`;
  };

  return (
    <>
      <header className="flex flex-row items-start justify-between text-[#00305E] border-b">
        <div className="inline-flex sm:gap-5 md:gap-11 lg:gap-14 xl:gap-10">
          <div className="border-r-2 flex items-center">
            <div className="pr-4 pl-4 md:pr-8 md:pl-8 sm:pr-5 sm:pl-5 ">
              <a href="/onlineregistration">
                <h1 className="text-[25px] md:text-[25px] text-center font-semibold">
                  <div className="cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600">
                    {pendaftaranData[language]?.pagingHeader?.title}
                  </div>
                </h1>
              </a>
            </div>
          </div>
          <div className="inline-flex text-[20px] md:text-[20px] text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 -mb-px py-8 md:py-10 px-10 sm:px-4 md:px-2 lg:px-4 xl:px-8 items-center justify-center">
              {pendaftaranData[language]?.pagingHeader?.url?.filter((val) => val.isactive == true).map((res, idx) => (
                <LinkItem
                  title={res?.title}
                  isActive={activeTab === paginationClick[idx]}
                  onClick={() =>
                    idx < pendaftaranData[language]?.pagingHeader?.url?.filter((val) => val.isactive == true).length - 1
                      ? onClickPagination(paginationClick[idx])
                      : goToOnlineRegistration()
                  }
                />
              ))}
            </ul>
            {/* <ul className="flex flex-wrap -mb-px py-8 md:py-10">
              <li className="px-10 sm:px-4 md:px-2 lg:px-4 xl:px-8">
                <div
                  className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "enrolment"
                      ? "bg-white text-black underline"
                      : "bg-white"
                  }`}
                  // onClick={() => setActiveTab("enrolment")}
                  onClick={() => onClickPagination("enrolment")}
                >
                  {pendaftaranData[language]?.pagingHeader?.url[0]?.title}
                </div>
              </li>
              <li className="px-10 sm:px-4 md:px-2 lg:px-4 xl:px-8">
                <div
                  className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "beasiswa"
                      ? "bg-white text-black underline"
                      : "bg-white"
                  }`}
                  // onClick={() => setActiveTab("beasiswa")}
                  onClick={() => onClickPagination("beasiswa")}
                >
                  {pendaftaranData[language]?.pagingHeader?.url[1]?.title}
                </div>
              </li>
              <li className="px-10 sm:px-4 md:px-2 lg:px-4 xl:px-8">
                <div
                  className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "tur-sekolah"
                      ? "bg-white text-black underline"
                      : "bg-white"
                  }`}
                  // onClick={() => setActiveTab("tur-sekolah")}
                  onClick={() => onClickPagination("tur-sekolah")}
                >
                  {pendaftaranData[language]?.pagingHeader?.url[2]?.title}
                </div>
              </li>
              <li className="px-10 sm:px-4 md:px-2 lg:px-4 xl:px-8 text-left">
                <div
                  className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "onlineregistration"
                      ? "bg-white text-black underline"
                      : "bg-white"
                  }`}
                  onClick={() =>
                    (window.location.href = `${pendaftaranData[language]?.pagingHeader?.url[3]?.url}`)
                  }
                >
                  {pendaftaranData[language]?.pagingHeader?.url[3]?.title}
                </div>
              </li>
            </ul> */}
          </div>
        </div>
      </header>
    </>
  );
};

const LinkItem = ({ isActive, title, onClick }) => {
  return (
    <li className="w-full ">
      {/* <li className="px-10 sm:px-4 md:px-2 lg:px-4 xl:px-8"> */}
      <div
        className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
          isActive ? "bg-white text-black underline" : "bg-white"
        }`}
        onClick={onClick}
      >
        {title}
      </div>
    </li>
  );
};

export default PaggingLayouts;
