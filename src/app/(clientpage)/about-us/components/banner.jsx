import { Carousel } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import StandartCarousel from "../../../_components/Banner/StandartCarousel";

const BannerLayouts = ({ payload }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const iframeRefs = useRef([]);

  useEffect(() => {
    if (payload.bannerimage.length > 0) {
      setSlides([...payload.bannerimage]);
    }
  }, [payload]);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const extractYouTubeVideoId = (url) => {
    const regExp = /(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  useEffect(() => {
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
  }, [slides, activeIndex]);

  return (
    <>
      {slides.length > 0 && (
        <StandartCarousel
          slideInterval={5000}
          onSlideChange={handleSlideChange}
        >
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
                src={`https://www.youtube.com/embed/${extractYouTubeVideoId(
                  res.url
                )}?enablejsapi=1&mute=1&rel=0`}
                onLoad={() => {
                  if (i === 0) {
                    // Play video saat iframe pertama sudah siap
                    iframeRefs.current[i]?.contentWindow?.postMessage(
                      JSON.stringify({
                        event: "command",
                        func: "playVideo",
                        args: [],
                      }),
                      "*"
                    );
                  }
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={`YouTube video ${i}`}
              />
            )
          )}
        </StandartCarousel>
      )}
    </>
  );
};

export default BannerLayouts;
