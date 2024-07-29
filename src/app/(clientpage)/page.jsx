import { Button } from "flowbite-react";
import CarouselComponents from "../_components/carousel";
import { FaInstagram } from "react-icons/fa";
import Script from 'next/script';

const HomePage = () => {
  return <>
<div className="min-h-screen flex flex-col text-[#00305E]">
  <CarouselComponents />
  <div className="md:my-[25px] mx-20 md:mx-32 flex-grow">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-[20px] md:my-[32px]">
      <div>
        <div className="font-semibold md:text-[25px]">Temukan Kelas:</div>
        <div className="font-bold md:text-[60px]">
        {/* md:font-[400] md:leading-[64px] */}
          Kualitas Terbaik Setiap Tingkat
        </div>
      </div>
      <div className="place-content-center">
        <p className="md:leading-[25px] md:text-[20px] md:leading-[25px] text-justify leading-loose">
          Di BTB, kami memastikan siswa mendapatkan kualitas terbaik yang
          dibantu dengan menggunakan metode pembelajaran International
          Baccalaureate
        </p>
      </div>
    </div>

    {/* Section */}
  <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-[30px] md:my-[40px]">
    <div className="bg-[url('https://w6i8.c1.e2-7.dev/assets/btbschool/images/edulevel1.jpeg')] w-[200px] h-[200px] md:w-[232px] md:h-[230px] my-[25px] bg-cover bg-center rounded-[30px]">
      <div className="h-full hover:bg-[#243F6D] hover:opacity-80 hover:rounded-[30px]">
        <div className="flex items-center justify-center h-full text-white group">
          <a href="/btb-belajar/TK" target="_blank" className="border-2 px-6 py-2 text-[15px] rounded-full opacity-0 font-semibold group-hover:border-1 group-hover:opacity-100 transition-opacity duration-300">
            Learn More
          </a>
        </div>
      </div>
      <div className="md:my-[10px] text-[#00305E]">
        <div className="flex gap-2 justify-center">
        {/* md:leading-[64px] */}
          <p className="md:text-[25px] leading-tight text-justify font-semibold">
            PAUD - TK
          </p>
        </div>
      </div>
    </div>
    <div className="bg-[url('https://w6i8.c1.e2-7.dev/assets/btbschool/images/edulevel2.jpeg')] w-[200px] h-[200px] md:w-[232px] md:h-[230px] my-[25px] bg-cover bg-center rounded-[30px]">
      <div className="h-full hover:bg-[#243F6D] hover:opacity-80 hover:rounded-[30px]">
        <div className="flex items-center justify-center h-full text-white group">
          <a href="/btb-belajar/SD" target="_blank" className="border-2 px-6 py-2 text-[15px] rounded-full opacity-0 font-semibold group-hover:border-1 group-hover:opacity-100 transition-opacity duration-300">
            Learn More
          </a>
        </div>
      </div>
      <div className="md:my-[10px] text-[#00305E]">
        <div className="flex gap-2 justify-center">
        {/* md:leading-[64px] */}
          <p className="md:text-[25px] leading-tight text-justify font-semibold">
          Sekolah Dasar
          </p>
        </div>
      </div>
    </div>
    <div className="bg-[url('https://w6i8.c1.e2-7.dev/assets/btbschool/images/edulevel3.jpeg')] w-[200px] h-[200px] md:w-[232px] md:h-[230px] my-[25px] bg-cover bg-center rounded-[30px]">
      <div className="h-full hover:bg-[#243F6D] hover:opacity-80 hover:rounded-[30px]">
        <div className="flex items-center justify-center h-full text-white group">
          <a href="/btb-belajar/SMP" target="_blank" className="border-2 px-6 py-2 text-[15px] rounded-full opacity-0 font-semibold group-hover:border-1 group-hover:opacity-100 transition-opacity duration-300">
            Learn More
          </a>
        </div>
      </div>
      <div className="md:my-[10px] text-[#00305E]">
        <div className="flex gap-2 justify-center">
        {/* md:leading-[64px] */}
          <p className="md:text-[25px] leading-tight text-justify font-semibold">
            SMP
          </p>
        </div>
      </div>
    </div>
    <div className="bg-[url('https://w6i8.c1.e2-7.dev/assets/btbschool/images/edulevel4.jpeg')] w-[200px] h-[200px] md:w-[232px] md:h-[230px] my-[25px] bg-cover bg-center rounded-[30px]">
      <div className="h-full hover:bg-[#243F6D] hover:opacity-80 hover:rounded-[30px]">
        <div className="flex items-center justify-center h-full text-white group">
          <a href="/btb-belajar/SMA" target="_blank" className="border-2 px-6 py-2 text-[15px] rounded-full opacity-0 font-semibold group-hover:border-1 group-hover:opacity-100 transition-opacity duration-300">
            Learn More
          </a>
        </div>
      </div>
      <div className="md:my-[10px] text-[#00305E]">
        <div className="flex gap-2 justify-center">
        {/* md:leading-[64px] */}
          <p className="md:text-[25px] leading-tight text-justify font-semibold">
            SMA
          </p>
        </div>
      </div>
    </div>
  </div>
  <hr className="h-px mt-32 mb-20 bg-gray-200 border-0 dark:bg-gray-700" />
    <div className="text-[40px] md:text-[70px]">
      <h1>Latest News</h1>
    </div>

    <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer/>
    <div className="elfsight-app-ef4327a9-843c-4be1-8b9f-3531ef090037" data-elfsight-app-lazy></div>
    
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 mt-4">
      <div>
        <img
          className="w-full h-[200px] md:w-[360px] md:h-[361px]"
          src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/feedHome1.jpeg"
          alt="Feed1"
        />
      </div>
      <div>
        <img
          className="w-full h-[200px] md:w-[360px] md:h-[361px]"
          src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/feedHome2.jpeg"
          alt="Feed2"
        />
      </div>
      <div>
        <img
          className="w-full h-[200px] md:w-[360px] md:h-[361px]"
          src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/feedHome3.jpeg"
          alt="Feed3"
        />
      </div>
      <div>
        <img
          className="w-full h-[200px] md:w-[360px] md:h-[361px]"
          src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/feedHome4.jpeg"
          alt="Feed4"
        />
      </div>
      <div>
        <img
          className="w-full h-[200px] md:w-[360px] md:h-[361px]"
          src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/feedHome5.jpeg"
          alt="Feed5"
        />
      </div>
      <div>
        <img
          className="w-full h-[200px] md:w-[360px] md:h-[361px]"
          src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/feedHome6.jpeg"
          alt="Feed6"
        />
      </div>
    </div>
    <div className="m-10 flex justify-center">
      <button className="inline-block text-white font-sans bg-[#00305E] hover:bg-blue-700 font-medium rounded-full text-md px-10 py-2.5 text-center">
        View More On Instagram
      </button>
    </div> */}
  </div>
</div>

  </>
}

export default HomePage;
