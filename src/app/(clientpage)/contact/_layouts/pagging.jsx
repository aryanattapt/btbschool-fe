const PaggingLayouts = ({ contactUsData, language }) => {
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
              {contactUsData[language].pagingHeader.url.map((val, idx) => {
                return (
                  <li
                    className="px-[3px] xl:px-[150px] md:px-[50px] lg:pr-[2px] py-3
                   md:py-0 border-b-2"
                    key={idx}
                  >
                    <a
                      href={`${val.url}`}
                      className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 active"
                      aria-current="page"
                    >
                      {val.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default PaggingLayouts;
