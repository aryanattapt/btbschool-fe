"use client";
const Pagging = () => {
  return (
    <>
      <header className="flex flex-row items-start justify-between text-[#00305E] border-b">
        <div className="inline-flex gap-12">
          <div className="border-r-2">
            <div className="pr-20 pl-32">
              <h1 className="text-[35px] text-center font-semibold py-10">
                BTB Peduli
              </h1>
            </div>
          </div>
          <div className="inline-flex gap-20 text-[25px] text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px py-10">
              <li className="px-20">
                <a
                  href="/btb-peduli#peduli-lingkungan"
                  className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600"
                  aria-current="page"
                >
                  Peduli Lingkungan
                </a>
              </li>
              <li className="px-20">
                <a
                  href="/btb-peduli#sukarelawan"
                  className="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600"
                >
                  Sukarelawan
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
