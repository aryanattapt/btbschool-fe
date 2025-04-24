import { Carousel } from "flowbite-react";
import { useEffect, useRef, useState } from "react";

const BannerLayouts = ({ payload }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const iframeRefs = useRef([]);

  const datas = [
    // {
    //   url: "https://www.youtube.com/embed/7BgRbv59hio?si=lAgKpGUVWqG3yWMP",
    //   type: "video",
    //   name: "youtube",
    // },
    // {
    //   url: "https://www.youtube.com/embed/7BgRbv59hio?si=lAgKpGUVWqG3yWMP",
    //   type: "video",
    //   name: "youtube",
    // },
  ];

  useEffect(() => {
    if (payload.bannerimage.length > 0) {
      setSlides([...payload.bannerimage, ...datas]);
    }
  }, [payload]);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (slides.length > 0) {
      slides.forEach((slide, i) => {
        if (slide.type === "video" && iframeRefs.current[i]?.contentWindow) {
          const command = i === activeIndex ? "playVideo" : "pauseVideo";
          iframeRefs.current[i].contentWindow.postMessage(
            JSON.stringify({
              event: "command",
              func: command,
              args: [],
            }),
            "*"
          );
        }
      });
    }
  }, [slides, activeIndex]);

  return (
    <>
      {slides.length > 0 && (
        <Carousel
          slideInterval={5000}
          className="relative w-full h-[600px] lg:h-[700px] 2xl:h-[800px]"
          onSlideChange={handleSlideChange}
        >
          {/* {payload.bannerimage.map((res) => (
          <img
            src={res.url}
            alt={res.name}
            className="md:h-full md:w-screen object-cover xl:w-full xl:h-s"
          />
        ))} */}
          {/* <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/7BgRbv59hio?si=lAgKpGUVWqG3yWMP"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> */}
          {slides.map((res, i) =>
            res.type.includes("image") ? (
              <img
                src={res.url}
                alt={res.name}
                className="md:h-full md:w-screen object-cover xl:w-full xl:h-s"
              />
            ) : (
              <iframe
                key={i}
                ref={(el) => (iframeRefs.current[i] = el)}
                id={`youtube-player-${i}`}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${res.url}?enablejsapi=1&autoplay=1&mute=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={`YouTube video ${i}`}
              ></iframe>
            )
          )}
        </Carousel>
      )}
    </>
  );
};

export default BannerLayouts;
