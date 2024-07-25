import CarouselComponents from "../_components/carousel";

const HomePage = () => {
  return <>
    <div className="min-h-screen flex flex-col font-sans text-[#00305E]">
      <CarouselComponents />
  <div className="my-1 md:my-[25px] mx-4 md:mx-[76px] flex-grow">
    <div className="grid grid-cols-2 gap-2 md:my-[50px] md:mx-[76px] sm:grid-cols-1">
      <div>
        <p className="font-bold md:text-[30px]">Temukan Kelas:</p>
        <p className="font-extrabold md:text-[70px] md:font-[400] md:leading-[64px]">
          Kualitas Terbaik Setiap Tingkat
        </p>
      </div>
      <div className="place-content-center">
        <p className="font-sans md:leading-[25px] md:text-[20px] md:leading-[25px] text-justify">
          Di BTB, kami memastikan siswa mendapatkan kualitas terbaik yang
          dibantu dengan menggunakan metode pembelajaran International
          Baccalaureate
        </p>
      </div>
    </div>

    {/* Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 md:my-[50px] md:mx-[76px]">
  <div className="relative">
    <div className="hover:bg-[#00305E] hover:opacity-75 rounded-[70px] relative group">
      <img
        src="./edulevel1.jpeg"
        alt="edulevel1"
        className="object-cover rounded-[70px] w-full h-[270px] md:h-[270px]"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <p className="text-white text-xl font-bold">Learn More</p>
      </div>
    </div>
    <div className="md:my-[10px]">
      <div className="flex gap-2 justify-center">
        <p className="md:text-[30px] md:leading-[64px] font-sans text-justify font-semibold">
          PAUD - TK
        </p>
      </div>
      <div className="flex gap-2 justify-center">
        <p>Umur 2 - 5</p>
      </div>
    </div>
  </div>
  <div className="relative">
    <div className="hover:bg-[#00305E] hover:opacity-75 rounded-[70px] relative group">
      <img
        src="./edulevel2.jpeg"
        alt="edulevel2"
        className="object-cover rounded-[70px] w-full h-[270px] md:h-[270px]"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <p className="text-white text-xl font-bold">Learn More</p>
      </div>
    </div>
    <div className="md:my-[10px]">
      <div className="flex gap-2 justify-center">
        <p className="md:text-[30px] md:leading-[64px] font-sans text-justify font-semibold">
          Sekolah Dasar
        </p>
      </div>
      <div className="flex gap-2 justify-center">
        <p>Umur 2 - 5</p>
      </div>
    </div>
  </div>
  <div className="relative">
    <div className="hover:bg-[#00305E] hover:opacity-75 rounded-[70px] relative group">
      <img
        src="./edulevel3.jpeg"
        alt="edulevel3"
        className="object-cover rounded-[70px] w-full h-[270px] md:h-[270px]"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <p className="text-white text-xl font-bold">Learn More</p>
      </div>
    </div>
    <div className="md:my-[10px]">
      <div className="flex gap-2 justify-center">
        <p className="md:text-[30px] md:leading-[64px] font-sans text-justify font-semibold">
          Sekolah Menengah
        </p>
      </div>
      <div className="flex gap-2 justify-center">
        <p>Umur 11 - 15</p>
      </div>
    </div>
  </div>
  <div className="relative">
    <div className="hover:bg-[#00305E] hover:opacity-75 rounded-[70px] relative group">
      <img
        src="./edulevel4.jpeg"
        alt="edulevel4"
        className="object-cover rounded-[70px] w-full h-[270px] md:h-[270px]"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <p className="text-white text-xl font-bold">Learn More</p>
      </div>
    </div>
    <div className="md:my-[10px]">
      <div className="flex gap-2 justify-center">
        <p className="md:text-[30px] md:leading-[64px] font-sans text-justify font-semibold">
          SMA
        </p>
      </div>
      <div className="flex gap-2 justify-center">
        <p>Umur 16 - 17</p>
      </div>
    </div>
  </div>
</div>

    <div className="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:mx-6 dark:text-white dark:after:border-neutral-600"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
      <div className="text-[40px] md:text-[70px]">
        <h1>Latest News</h1>
      </div>
      <div className="flex justify-end items-center space-x-2">
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 mt-4">
      <div>
        <img
          className="w-full h-[200px] md:w-[360px] md:h-[361px]"
          src="./feedHome1.jpeg"
          alt="Feed1"
        />
      </div>
      <div>
        <img
          className="w-full h-[200px] md:w-[360px] md:h-[361px]"
          src="./feedHome2.jpeg"
          alt="Feed2"
        />
      </div>
      <div>
        <img
          className="w-full h-[200px] md:w-[360px] md:h-[361px]"
          src="./feedHome3.jpeg"
          alt="Feed3"
        />
      </div>
      <div>
        <img
          className="w-full h-[200px] md:w-[360px] md:h-[361px]"
          src="./feedHome4.jpeg"
          alt="Feed4"
        />
      </div>
      <div>
        <img
          className="w-full h-[200px] md:w-[360px] md:h-[361px]"
          src="./feedHome5.jpeg"
          alt="Feed5"
        />
      </div>
      <div>
        <img
          className="w-full h-[200px] md:w-[360px] md:h-[361px]"
          src="./feedHome6.jpeg"
          alt="Feed6"
        />
      </div>
    </div>
  </div>
</div>

  </>
}

export default HomePage;
