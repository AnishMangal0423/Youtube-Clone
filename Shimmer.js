import React from "react";
import ShimarCard from "./ShimarCard";

const Shimmer = () => {
  return (
    <div>
      <div className=" mt-20 flex flex-wrap ">
        {Array(100)
          .fill(" ")
          .map((item) => {
            return <ShimarCard />;
          })}
      </div>
    </div>
  );
};

export default Shimmer;
