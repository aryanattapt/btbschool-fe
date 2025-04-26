const PaggingLayouts = ({
  contactUsData,
  language,
  activeTab,
  setActiveTab,
}) => {
  const onClickPagination = (selectedTab) => {
    const hashId = {
      contact: "contact",
      location: "location",
    };
    window.location.hash = hashId[selectedTab];
    setActiveTab(selectedTab);
  };

  return (
    <>
      <header className="flex flex-row items-start justify-between text-[#00305E] border-b">
        <div className="inline-flex md:gap-9 gap-7">
          <div className="border-r-2">
            <div className="pr-10 pl-10 xl:pl-32 xl:pr-32 md:px-10 place-items-center">
              <h1 className="md:text-[25px] text-[20px] text-center font-semibold py-10 md:py-10">
                {contactUsData[language].pagingHeader.title}
              </h1>
            </div>
          </div>
          <div className="inline-flex gap-20 md:text-[20px] text-[15px] lg:text-[20px] text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap py-10 md:py-10">
              <li className="px-[3px] xl:px-[150px] md:px-[50px] lg:pr-[2px] py-3 md:py-0 border-b-2">
                <div
                  className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "contact"
                      ? "bg-white text-black underline"
                      : "bg-white"
                  }`}
                  // onClick={() => setActiveTab("contact")}
                  onClick={() => onClickPagination("contact")}
                >
                  {language == "EN" ? "Contact Us" : "Hubungi Kami"}
                </div>
              </li>
              <li className="px-[3px] xl:px-[150px] md:px-[50px] lg:pr-[2px] py-3 md:py-0 border-b-2">
                <div
                  className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                    activeTab === "location"
                      ? "bg-white text-black underline"
                      : "bg-white"
                  }`}
                  // onClick={() => setActiveTab("location")}
                  onClick={() => onClickPagination("location")}
                >
                  {language == "EN" ? "Our Location" : "Lokasi Kami"}
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
