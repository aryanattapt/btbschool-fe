"use client";
import { useRef, useState } from "react";
import { Carousel } from "flowbite-react";
/* import { useLanguageStore } from "../../../store/language.store"; */
import { HomePagePayload } from "../../../data";
import useLanguage from "../../hooks/useLanguage";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md"; // Import icons

const CarouselComponents = () => {
  const [homePageData, setHomePageData] = useState(HomePagePayload);
  const { language } = useLanguage();
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);

  const handleMuteToggle = () => {
    const newIsMuted = !isMuted;
    setIsMuted(newIsMuted);
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = newIsMuted;
      }
    });
  };

  return (
    <Carousel
      slideInterval={5000}
      className="relative md:h-[100vh] w-full h-[400px]"
    >
      {homePageData.carousel.map((val, idx) => {
        const temp = val.texts.find((val) => val.language == language);
        if (val.type == "IMAGE") {
          return (
            <div className="relative h-full w-full" key={idx}>
              <div
                className={`bg-cover absolute inset-0`}
                style={{ backgroundImage: `url(${val.url})` }}
              >
                <div className="grid place-items-center h-full w-full bg-black bg-opacity-30">
                  <div className="mx-14 md:mx-32 text-left">
                    <p className="text-[15px] md:text-[25px] text-white text-justify font-semibold">
                      {temp.title}
                    </p>
                    <p className="text-[20px] my-2 md:text-[70px] leading-[24px] md:leading-[64px] font-semibold text-white drop-shadow-xl shadow-black">
                      {temp.content}
                    </p>
                    <div className="flex justify-left gap-2">
                      <a
                        href="/#findClass"
                        className="text-[10px] md:text-[16px]"
                      >
                        <button className="bg-[#EF802B] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          {temp.buttondesc}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="relative h-full w-full" key={idx}>
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                autoPlay
                loop
                muted={isMuted}
                className="h-full w-full object-cover"
              >
                <source src={val.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={handleMuteToggle}
                className="absolute bottom-5 left-[75px] bg-gray-800/75 text-white px-4 py-2 rounded z-50 flex items-center justify-center w-16 h-10"
              >
                {isMuted ? <MdVolumeOff size={24} /> : <MdVolumeUp size={24} />}
              </button>
            </div>
          );
        }
      })}
    </Carousel>
  );
};

export default CarouselComponents;
