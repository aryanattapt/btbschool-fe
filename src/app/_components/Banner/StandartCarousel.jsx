import { Carousel } from "flowbite-react";
import React from "react";

const StandartCarousel = ({ slideInterval = 3000, children, ...props }) => {
  return (
    <Carousel
      slideInterval={slideInterval}
      className="relative h-[400px] md:h-[600px] lg:h-[800px] xl:h-[90vh] w-full"
      {...props}
    >
      {children}
    </Carousel>
  );
};

export default StandartCarousel;
