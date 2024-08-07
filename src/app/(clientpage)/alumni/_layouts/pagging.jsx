"use client";
const PaggingLayouts = () => {
  return (
    <>
      <header className="flex flex-row items-start justify-between text-[#00305E] border-b">
        <div className="inline-flex md:gap-9 gap-7">
          <div className="border-r-2">
            <div className="pr-10 pl-10 md:pr-40 md:pl-20">
              <h1 className="md:text-[25px] text-center font-semibold py-5 md:py-10 mx-[6px] md:mx-[15px]">
                ALUMNI
              </h1>
            </div>
          </div>
          <div className="inline-flex gap-20 md:text-[20px] text-[14px] text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap py-5 md:py-10">
              <li className="px-[1px] md:px-[100px]">
                <a
                  href="/alumni#pendaftaran-alumni"
                  className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600"
                  aria-current="page"
                >
                  Pendaftaran Alumni
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default PaggingLayouts;
