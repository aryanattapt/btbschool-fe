import { Carousel } from "flowbite-react";

const Banner = ({btbBelajarData}) => {
  return (
    <>
      <Carousel
        slideInterval={12000}
        className="relative h-[400px] md:h-[600px] lg:h-[1000px] xl:h-[100vh] w-full"
      >
        {btbBelajarData.albumimage.map((val, idx) => {
          return (
            <div className="relative h-full w-full" key={idx}>
              <div  
                className="bg-cover absolute inset-0"
                style={{ backgroundImage: `url(${val})` }}
              ></div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Banner;