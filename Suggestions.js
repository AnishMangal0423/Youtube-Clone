import React from "react";
import Buttons from "./Buttons";
import VedioContainer from "./VedioContainer";

const Suggestions = () => {
  return (
    <div>
      Suggestions
      <div className="flex">
        <Buttons text="All" />
        <Buttons text="Songs" />
        <Buttons text="Games" />
        <Buttons text="Shopping" />
        <Buttons text="Mixes" />
        <Buttons text="Tech" />
        <Buttons text="Coding" />
        <Buttons text="AI" />
      </div>
      <div className="-mt-20 ml-10">
        <VedioContainer />
      </div>
    </div>
  );
};

export default Suggestions;
