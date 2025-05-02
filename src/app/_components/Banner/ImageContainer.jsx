import React from "react";

const ImageContainer = ({ children }) => {
  return (
    <div className="relative h-[400px] md:h-[600px] lg:h-[800px] xl:h-[90vh] w-full">
      {children}
    </div>
  );
};

export default ImageContainer;
