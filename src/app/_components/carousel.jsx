"use client";

import { Carousel } from "flowbite-react";

const CarouselComponents = () => {
  return (
    <Carousel slideInterval={2000}>
      <div className="relative md:h-screen md:w-screen">
        <img
          src="./slider1.jpeg"
          alt="penghargaan"
          className="md:h-full md:w-full object-cover"
        />
        <div className="absolute inset-0 grid md:h-full md:w-full place-items-center">
          <div className="text-left md:ml-[50px]">
            <p className="md:text-[25px] text-white text-justify"></p>
            <p></p>
            {/* <div className="flex justify-center gap-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More!
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="relative md:h-full md:w-full">
        <img
          src="./slider2.jpeg"
          alt="penghargaan"
          className="md:h-full md:w-full object-cover"
        />
        <div className="absolute inset-0 grid md:h-full md:w-full place-items-center">
          <div className="text-left md:ml-[50px]">
            <p className="md:text-[25px] text-black font-sans text-justify font-semibold	">
              Bina Tunas Bangsa
            </p>
            <p className="md:text-[70px] md:leading-[64px] font-semibold text-white drop-shadow-xl shadow-black">
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

      {/* <img
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        alt="..."
      /> */}
    </Carousel>
  );
};

export default CarouselComponents;
