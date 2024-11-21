"use client";
import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderStyles.css';

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="custom-prev-arrow" onClick={onClick}>
            &#10094;
        </button>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="custom-next-arrow" onClick={onClick}>
            &#10095;
        </button>
    );
};


const CeritaAlumni = ({ alumniPayload, alumniStoryPayload, alumniUniversityPayload, language }) => {
    const settingsTestimonies = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
      };
    
    // const settingsFlag = {
    //     dots: true, // Enable dot indicators
    //     infinite: true, // Infinite scrolling
    //     speed: 500, // Transition speed
    //     slidesToShow: 3, // Number of slides to show at once
    //     slidesToScroll: 1, // Number of slides to scroll
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //             },
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 1,
    //             },
    //         },
    //     ],
    // };

    const settingsFlag = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

  return (
    <div className="px-12 pb-12">
        <div className="flex flex-col items-start">
            <h2 className="text-[#00305E] text-[25px] md:text-[50px] font-semibold mx-5 my-5">
                {alumniPayload[language]?.pagingHeader?.url[0]?.title}
            </h2>
        </div>
        <div className="slider-container">
        <div className="bg-slate-300 rounded mb-20">
        {/* <div className="bg-slate-300 rounded mb-20 min-h-[20rem] sm:min-h-[25rem] md:min-h-[30rem] lg:min-h-[35rem] xl:min-h-[40rem]"> */}
            <Slider {...settingsTestimonies}>
                {alumniStoryPayload?.map((val, idx) => {
                    return(
                    <div key={idx}>
                        <div className="p-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                            {
                                val?.image && <div className="md:px-10">
                                    <img
                                        src={val?.image}
                                        alt="alumni"
                                        className="xl:w-[1124px] md:w-auto rounded-md"
                                    />
                                </div>
                            }
                            <div className="text-[14px] md:text-[20px] lg:text-[25px] xl:text-[18px]">
                                <div className="flex">
                                    <h1 className="text-[#00305E] font-bold text-[14px] md:text-[20px] lg:text-[25px] xl:text-[25px] pr-2 max-w-1/2">{val?.name}</h1>
                                    <h1 className="text-gray-500 font-bold text-[14px] md:text-[20px] lg:text-[25px] xl:text-[25px] w-1/2 content-center">Class of {val?.class}</h1>
                                </div>
                                <div className="mr-10">
                                    <p className="font-semibold">{val?.university}, {val?.major}</p>
                                    <p>{val?.testimonies}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
                })}
            </Slider>
            </div>
        </div>

        <div className="my-5 text-[14px] md:text-[20px] lg:text-[25px] xl:text-[18px]">
            <h2 className="text-[#00305E] text-[25px] md:text-[50px] mx-5">
                {alumniPayload[language]?.pagingHeader?.url[0]?.subtitle}
            </h2>
            <p className="mx-5 mb-5">
                Kami berkomitmen mempersiapkan setiap murid untuk meraih sukses di universitas terkemuka, baik di dalam maupun luar negeri.
                Dengan kurikulum berstandar internasional, pendampingan akademis yang menyeluruh, serta bimbingan personal yang mendalam, 
                kami memastikan setiap siswa siap menghadapi tantangan pendidikan tinggi dengan percaya diri dan kompetensi global.
            </p>
        </div>
        <div className="slider-container">
            <Slider {...settingsFlag}>
                {alumniUniversityPayload?.map((val, idx) => {
                    return(
                        <div key={idx} className="relative">
                            {
                                val?.image && <img
                                    src={val.image}
                                    alt="alumni"
                                    className="w-[400px] h-[200px] object-contain"
                                />
                            }
                            <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                                {val?.caption}
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