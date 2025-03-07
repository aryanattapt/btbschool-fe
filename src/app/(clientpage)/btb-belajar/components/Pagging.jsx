const Pagging = ({ btbBelajarData, language }) => {
  return (
    <>
      <header className="flex flex-row items-start justify-between text-[#00305E] border-b">
        <div className="inline-flex gap-0 md:gap-5 lg:gap-11">
          <div className="border-r-2">
            <div className="px-10 md:px-10 lg:px-32 xl:px-32">
              <h1 className="text-[25px] text-center font-semibold py-10">
                {btbBelajarData[language]?.paging?.title}
              </h1>
            </div>
          </div>
          <div className="inline-flex text-[20px] justify-center text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-col sm:flex-row sm:gap-x-8 md:gap-x-16 2xl:gap-x-24 -mb-px py-8 md:py-10 px-5 ">
              {btbBelajarData[language]?.paging?.url?.map((val, idx) => {
                return (
                  <li
                    // className="sm:px-8 md:px-20 lg:px-10 xl:px-15 px-5"
                    key={idx}
                  >
                    <a
                      href={`${val?.url}`}
                      className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 active"
                      aria-current="page"
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
    </>
  );
};

export default Pagging;
