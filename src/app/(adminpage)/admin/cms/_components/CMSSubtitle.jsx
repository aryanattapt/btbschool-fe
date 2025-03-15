import React from "react";

const CMSSubTitle = ({ className = "", children, ...prop }) => {
  return (
    <p className={`mt-4 font-bold text-xl ${className}`} {...prop}>
      {children}
    </p>
  );
};

export default CMSSubTitle;
