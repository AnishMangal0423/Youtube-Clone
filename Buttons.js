import React from "react";

const Buttons = (props) => {
  return (
    <div className="ml-2 mb-2">

    {console.log("hii")}
      <div className="rounded-sm px-2 mt-2 bg-gray-300 h-5">
        <p className="text-xs py-[1.1px]">{props.text}</p>
      </div>
    </div>
  );
};

export default Buttons;
