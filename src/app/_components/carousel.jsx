"use client";

import { Carousel } from "flowbite-react";

const CarouselComponents = () => {
  return (
    <Carousel slideInterval={2000} className=" size-full">
      <div className="relative h-full w-full">
        <img
          src="./slider1.jpeg"
          alt="penghargaan"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center">
          <div className="text-left md:ml-[50px]">
            <p className="md:text-[25px] text-white font-['Poppins'] text-justify	">
              Bina Tunas Bangsa
            </p>
            <p>
              The Beauty of Nature It is not so much for its beauty that the
              forest makes a claim upon men&apos;s hearts, as for that subtle
              something, that quality of air that emanation from old trees, that
              so wonderfully changes and renews a weary spirit.
            </p>
            <div className="flex justify-center gap-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More!
              </button>
            </div>
          </div>
        </div>
      </div>

      <img
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
      />
    </Carousel>
  );
};

export default CarouselComponents;
