"use client";
import { Carousel } from "flowbite-react";

const CarouselComponents = () => {
  return (
    <Carousel slideInterval={5000} className="relative md:h-[60vh] w-full">
  <div className="relative h-full w-full">
    <img
      src="./slider1.jpg/"
      alt="penghargaan"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 grid h-full w-full place-items-center">
      <div className="text-left ml-[50px]">
        <p className="text-[20px] md:text-[25px] text-black font-sans text-justify font-semibold">
          Bina Tunas Bangsa
        </p>
        <p className="text-[40px] md:text-[70px] leading-[44px] md:leading-[64px] font-semibold text-white drop-shadow-xl shadow-black">
          DATANG DAN BELAJAR <br></br>di Sekolah Terbaik Jakarta
        </p>
        <div className="flex justify-left gap-2">
          <button className="bg-[#EF802B] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More!
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="relative h-full w-full">
    <img
      src="./slider2.jpg"
      alt="penghargaan"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 grid h-full w-full place-items-center">
      <div className="text-left ml-[50px]">
        <p className="text-[20px] md:text-[25px] text-black font-sans text-justify font-semibold">
          Bina Tunas Bangsa
        </p>
        <p className="text-[40px] md:text-[70px] leading-[44px] md:leading-[64px] font-semibold text-white drop-shadow-xl shadow-black">
          DATANG DAN BELAJAR <br></br>di Sekolah Terbaik Jakarta
        </p>
        <div className="flex justify-left gap-2">
          <button className="bg-[#EF802B] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More!
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="relative h-full w-full">
    <img
      src="./slider3.jpg"
      alt="penghargaan"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 grid h-full w-full place-items-center">
      <div className="text-left ml-[50px]">
        <p className="text-[20px] md:text-[25px] text-black font-sans text-justify font-semibold">
          Bina Tunas Bangsa
        </p>
        <p className="text-[40px] md:text-[70px] leading-[44px] md:leading-[64px] font-semibold text-white drop-shadow-xl shadow-black">
          DATANG DAN BELAJAR <br></br>di Sekolah Terbaik Jakarta
        </p>
        <div className="flex justify-left gap-2">
          <button className="bg-[#EF802B] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More!
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Video Slider */}
  <div className="relative h-full w-full">
    <video
      autoPlay={true}
      muted={true}
      loop={true}
      className="h-full w-full object-cover"
    >
      <source src="/slider4.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 grid h-full w-full place-items-center">
      <div className="text-left ml-[50px]">
        <p className="text-[20px] md:text-[25px] text-white text-justify"></p>
        <p></p>
      </div>
    </div>
  </div>
</Carousel>
  );
};

export default CarouselComponents;
