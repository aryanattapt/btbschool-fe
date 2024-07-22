"use client";
const Pagging = () => {
  return (
    <>
      <header className="flex flex-row items-start justify-between text-[#00305E] border-b">
        <div className="inline-flex gap-12">
          <div className="border-r-2">
            <div className="pr-10 pl-32">
              <h1 className="text-[25px] text-center font-semibold py-10">Belajar di BTB</h1>
            </div>
          </div>
          <div className="inline-flex gap-20 text-[20px] text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <ul className="flex flex-wrap -mb-px py-10">
                  <li className="px-10">
                      <a href="/btb-belajar/TK" class="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600" aria-current="page">Paud - TK</a>
                  </li>
                  <li class="px-10">
                      <a href="/btb-belajar/SD" class="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600">Sekolah Dasar</a>
                  </li>
                  <li class="px-10">
                      <a href="/btb-belajar/SMP" class="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600">SMP</a>
                  </li>
                  <li class="px-10">
                      <a href="/btb-belajar/SMA" class="inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600">SMA</a>
                  </li>
              </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Pagging;
