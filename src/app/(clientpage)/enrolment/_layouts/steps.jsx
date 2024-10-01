"use client";
import React from "react";

const StepsLayouts = ({ data, language }) => {
  return (
    <>
      <div>
        <h1>{data[language].title}</h1>
        <h4>{data[language].subtitle}</h4>
      </div>
    </>
  );
};

export default StepsLayouts;
