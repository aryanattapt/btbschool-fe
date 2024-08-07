"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

import { ServiceData } from "../constant/listalbum";

const AlbumPhoto = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 ">
        {ServiceData.map((item, idx) => (
          <div key={idx} className="m-4 md:m-5">
            <img src={item.backgroundImage} alt={item} className="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default AlbumPhoto;
