"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

import { ServiceData } from "../constant/listalbum";

const AlbumPhoto = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 ">
        {ServiceData.map((item) => (
          <div className="m-4 md:m-5">
            <img
              src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/paud1.jpg"
              alt={item}
              className=""
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AlbumPhoto;
