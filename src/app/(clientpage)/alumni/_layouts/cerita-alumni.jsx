"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import 'flowbite/dist/flowbite.min.css'; // Ensure this import exists
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CeritaAlumni = ({ data, language }) => {
    const settings = {
        dots: true, // Enable dot indicators
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Change the number of slides on smaller screens
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // Change the number of slides on mobile
                },
            },
        ],
    };
//   const firstAlumni = data.ceritaAlumni[0];
  return (
    <div className="px-12 pb-12">
        <div className="flex flex-col items-start">
            <h2 className="text-[#00305E] text-[25px] md:text-[50px] font-semibold mx-5 my-5">
                {data[language].ceritaText}
            </h2>
        </div>
        {/* <div className="bg-slate-300 mb-20 rounded min-h-[384px] h-auto"> */}
        <div className="bg-slate-300 rounded mb-20 h-64 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[40rem]">
            <Carousel slideInterval={90000}>
                {data.ceritaAlumni.map((val, idx) => {
                    return(
                    <div key={idx}>
                        <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                        <div className="md:px-10 md:py-5">
                            <img
                                src={val.image}
                                alt="alumni"
                                className="xl:w-[1124px] md:w-auto rounded-md"
                            />
                        </div>
                        <div className="py-5 md:py-10 text-[14px] md:text-[20px] lg:text-[25px] xl:text-[18px]">
                            <div className="flex">
                                <h1 className="text-[#00305E] font-bold text-[14px] md:text-[20px] lg:text-[25px] xl:text-[25px] pr-2 max-w-1/2">{val.name}</h1>
                                <h1 className="text-gray-500 font-bold text-[14px] md:text-[20px] lg:text-[25px] xl:text-[25px] w-1/2 content-center">Class of {val.class}</h1>
                            </div>
                            <div className="mr-10">
                                <p className="font-semibold">{val.university}, {val.major}</p>
                                <p>{val.testimonies}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    );
                })}
            </Carousel>
        </div>

        <div className="my-5 text-[14px] md:text-[20px] lg:text-[25px] xl:text-[18px]">
            <h2 className="text-[#00305E] text-[25px] md:text-[50px] mx-5">
                {data[language].title2}
            </h2>
            <p className="mx-5 mb-5">
                Kami berkomitmen mempersiapkan setiap murid untuk meraih sukses di universitas terkemuka, baik di dalam maupun luar negeri. 
                Dengan kurikulum berstandar internasional, pendampingan akademis yang menyeluruh, serta bimbingan personal yang mendalam, 
                kami memastikan setiap siswa siap menghadapi tantangan pendidikan tinggi dengan percaya diri dan kompetensi global.
            </p>
        </div>
        <div className="slider-container">
            <Slider {...settings}>
                {data.ceritaAlumniFlag.map((val, idx) => {
                    return(
                        <div key={idx} className="relative">
                            <img
                                src={val.image}
                                alt="alumni"
                                className="w-[400px] h-[200px] object-cover"
                            />
                            <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                                {val.caption}
                            </span>
                        </div>
                    );
                })}
            </Slider>
        </div>
    </div>
  );
};

export default CeritaAlumni;