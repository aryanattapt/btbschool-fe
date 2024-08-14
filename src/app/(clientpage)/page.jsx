"use client";
/* 
import { Button } from "flowbite-react";
import { FaInstagram } from "react-icons/fa";
import Script from "next/script"; 
*/
import CarouselComponents from "../_components/carousel";
import { useEffect, useState } from "react";
import { GetBTBInstagramFeed } from "../../../services/instagram.service";
import { useRouter } from "next/navigation";
import { FaInstagram } from "react-icons/fa";
import { useLanguageStore } from "../../../store/language.store";
import { HomePagePayload } from "../../../data";

const HomePage = () => {
  const [homePagePayload, setHomePagePayload] = useState(HomePagePayload);
  const { language } = useLanguageStore();
  const router = useRouter();
  const [instagramFeed, setInstagramFeed] = useState([]);

  useEffect(() => {
    GetBTBInstagramFeed()
      .then((res) => {
        if (res.length > 0) {
          setInstagramFeed(res.slice(0, 6));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col text-[#00305E]">
        <CarouselComponents />
        <div className="md:my-[25px] mx-10 md:mx-32 flex-grow" id="findClass">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-[20px] md:my-[32px]">
            <div>
              <div className="text-[20px] md:text-[25px] lg:text-[25px]">
                {homePagePayload[language].grade.smalltitle}
              </div>
              <div className="font-semibold text-[25px] md:text-[60px]">
                {homePagePayload[language].grade.title}
              </div>
            </div>
            <div className="place-content-center">
              <p className="md:leading-[25px] md:text-[20px] md:text-justify md:leading-loose">
                {homePagePayload[language].grade.desc}
              </p>
            </div>
          </div>

          {/* Section */}
          <div className="grid place-items-center gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:my-[40px]">
            <div className="bg-[url('https://w6i8.c1.e2-7.dev/assets/btbschool/images/edulevel1.jpeg')] w-[200px] h-[200px] md:w-[240px] md:h-[240px] my-[25px] lg:w-[240px] lg:h-[240px] bg-cover bg-center rounded-[30px]">
              <div className="h-full hover:bg-[#243F6D] hover:opacity-80 hover:rounded-[30px]">
                <div className="flex items-center justify-center h-full text-white group">
                  <a
                    href="/btb-belajar/TK"
                    target="_blank"
                    className="border-2 px-6 py-2 text-[15px] rounded-full opacity-0 font-semibold group-hover:border-1 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="md:my-[10px] text-[#00305E]">
                <div className="flex gap-2 justify-center">
                  <p className="md:text-[20px] leading-tight text-center font-semibold">
                    {homePagePayload[language].grade.tktext}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[url('https://w6i8.c1.e2-7.dev/assets/btbschool/images/edulevel2.jpeg')] w-[200px] h-[200px] md:w-[240px] md:h-[240px] my-[25px] bg-cover bg-center rounded-[30px]">
              <div className="h-full hover:bg-[#243F6D] hover:opacity-80 hover:rounded-[30px]">
                <div className="flex items-center justify-center h-full text-white group">
                  <a
                    href="/btb-belajar/SD"
                    target="_blank"
                    className="border-2 px-6 py-2 text-[15px] rounded-full opacity-0 font-semibold group-hover:border-1 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="md:my-[10px] text-[#00305E]">
                <div className="flex gap-2 justify-center">
                  <p className="md:text-[20px] leading-tight text-center font-semibold">
                    {homePagePayload[language].grade.sdtext}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[url('https://w6i8.c1.e2-7.dev/assets/btbschool/images/edulevel3.jpeg')] w-[200px] h-[200px] md:w-[240px] md:h-[240px] my-[25px] bg-cover bg-center rounded-[30px]">
              <div className="h-full hover:bg-[#243F6D] hover:opacity-80 hover:rounded-[30px]">
                <div className="flex items-center justify-center h-full text-white group">
                  <a
                    href="/btb-belajar/SMP"
                    target="_blank"
                    className="border-2 px-6 py-2 text-[15px] rounded-full opacity-0 font-semibold group-hover:border-1 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="md:my-[10px] text-[#00305E]">
                <div className="flex gap-2 justify-center">
                  <p className="md:text-[20px] leading-tight text-center font-semibold">
                    {homePagePayload[language].grade.smptext}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[url('https://w6i8.c1.e2-7.dev/assets/btbschool/images/edulevel4.jpeg')] w-[200px] h-[200px] md:w-[240px] md:h-[240px] my-[25px] bg-cover bg-center rounded-[30px]">
              <div className="h-full hover:bg-[#243F6D] hover:opacity-80 hover:rounded-[30px]">
                <div className="flex items-center justify-center h-full text-white group">
                  <a
                    href="/btb-belajar/SMA"
                    target="_blank"
                    className="border-2 px-6 py-2 text-[15px] rounded-full opacity-0 font-semibold group-hover:border-1 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="md:my-[10px] text-[#00305E]">
                <div className="flex gap-2 justify-center">
                  <p className="md:text-[20px] leading-tight text-center font-semibold">
                    {homePagePayload[language].grade.smatext}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px mt-10 md:mt-32 md:mb-20 mb-10 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="text-[25px] md:text-[60px] md:text-start text-center">
            <h1>{homePagePayload[language].instagramtitle}</h1>
          </div>
          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 mt-4">
            {instagramFeed.map((val, idx) => {
              return (
                <div key={idx}>
                  <img
                    className="h-[300px] h-[300px] md:w-[230px] md:h-[230px]  xl:w-[360px] xl:h-[360px] lg:w-[230px] lg:h-[230px] object-cover"
                    src={`${val.thumbnail_url || val.media_url}`}
                    alt={`${val.caption}`}
                    onClick={() => router.push(val.permalink)}
                  />
                </div>
              );
            })}
          </div>
          <div className="m-10 flex justify-center">
            <button
              className="bg-[#00305E] flex items-center text-white hover:bg-blue-700 font-medium md:rounded-full rounded text-sm md:text-md md:px-10 px-5 py-2.5 text-center"
              onClick={() =>
                router.push("https://www.instagram.com/btb_school/")
              }
            >
              <FaInstagram className="text-white mr-2" />
              View More On Instagram
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
