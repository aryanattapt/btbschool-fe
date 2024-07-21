import CarouselComponents from "../_components/carousel";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col lg:h-screen font-sans text-[#00305E]">
        <CarouselComponents />
        <div className="grid grid-cols-2 gap-2 md:my-[50px] md:mx-[76px]">
          <div className="">
            <p className="font-bold md:text-[30px]">Temukan Kelas:</p>
            <p className="font-extrabold md:text-[70px] md:font-[400] md:leading-[64px]">
              Kualitas Terbaik Setiap Tingkat
            </p>
          </div>
          <div className=" place-content-center">
            <p className="font-sans md:leading-[25px] md:text-[20px] md:leading-[25px] text-justify ">
              Di BTB, kami memastikan siswa mendapatkan kualitas terbaik yang
              dibantu dengan menggunakan metode pembelajaran International
              Baccalaureate
            </p>
          </div>
        </div>
        {/* section */}
        <div className="flex flex-nowrap md:my-[50px] md:mx-[76px] gap-7">
          <div>
            <div className="hover:bg-[#00305E] hover:opacity-75 rounded-[70px]">
              <img
                src="./edulevel1.jpeg"
                alt="edulevel1"
                className="object-cover rounded-[70px] w-[272px] h-[270px] "
              />
            </div>
            <div className="md:my-[10px]">
              <div className="flex gap-2 justify-center">
                <p className="md:text-[30px] leading-[64px] font-sans text-justify font-semibold	">
                  PAUD - TK
                </p>
              </div>
              <div className="flex gap-2 justify-center ">
                <p>Umur 2 - 5</p>
              </div>
            </div>
          </div>
          <div>
            <div className="object-cover hover:bg-[#00305E] hover:opacity-75 rounded-[70px]">
              <img
                src="./edulevel2.jpeg"
                alt="edulevel2"
                className="object-cover rounded-[70px] w-[272px] h-[270px] "
              />
            </div>
            <div className="md:my-[10px]">
              <div className="flex gap-2 justify-center">
                <p className="md:text-[30px] leading-[64px] font-sans text-justify font-semibold	">
                  Sekolah Dasar
                </p>
              </div>
              <div className="flex gap-2 justify-center ">
                <p>Umur 2 - 5</p>
              </div>
            </div>
          </div>
          <div>
            <div className="hover:bg-[#00305E] hover:opacity-75 rounded-[70px]">
              <img
                src="./edulevel3.jpeg"
                alt="edulevel1"
                className="object-cover rounded-[70px] w-[272px] h-[270px] "
              />
            </div>
            <div className="md:my-[10px]">
              <div className="flex gap-2 justify-center">
                <p className="md:text-[30px] leading-[64px] font-sans text-justify font-semibold	">
                  Sekolah Menengah
                </p>
              </div>
              <div className="flex gap-2 justify-center ">
                <p>Umur 11 - 15</p>
              </div>
            </div>
          </div>
          <div>
            <div className="hover:bg-[#00305E] hover:opacity-75 rounded-[70px]">
              <img
                src="./edulevel4.jpeg"
                alt="edulevel1"
                className="object-cover rounded-[70px] w-[272px] h-[270px] "
              />
            </div>
            <div className="md:my-[10px]">
              <div className="flex gap-2 justify-center">
                <p className="md:text-[30px] leading-[64px] font-sans text-justify font-semibold	">
                  SMA
                </p>
              </div>
              <div className="flex gap-2 justify-center ">
                <p>Umur 16 - 17</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:mx-6 dark:text-white dark:after:border-neutral-600"></div>

        {/* list News */}
        <div className="md:my-[50px] md:mx-[76px]">
          <div className="grid grid-cols-2">
            <div className="md:text-[70px] ">
              <h1>Lastest News</h1>
            </div>
            <div className="join grid grid-cols-2">
              <button className="join-item btn btn-outline">
                <svg
                  className="h-8 w-8 text-white-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="join-item btn btn-outline">Next</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-7">
            <div>
              <img
                className="w-[360px] h-[361px]"
                src="./feedHome1.jpeg"
                alt="Feed1"
              />
            </div>
            <div>
              <img
                className="w-[360px] h-[361px]"
                src="./feedHome2.jpeg"
                alt="Feed2"
              />
            </div>
            <div>
              <img
                className="w-[360px] h-[361px]"
                src="./feedHome3.jpeg"
                alt="Feed3"
              />
            </div>
            <div>
              <img
                className="w-[360px] h-[361px]"
                src="./feedHome4.jpeg"
                alt="Feed4"
              />
            </div>
            <div>
              <img
                className="w-[360px] h-[361px]"
                src="./feedHome5.jpeg"
                alt="Feed5"
              />
            </div>
            <div>
              <img
                className="w-[360px] h-[361px]"
                src="./feedHome6.jpeg"
                alt="Feed6"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
