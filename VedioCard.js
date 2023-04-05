import React from "react";
import { useSelector } from "react-redux";

const VedioCard = ({ info, fn }) => {
  let nowtheme = useSelector((store) => store.Theme.Now);

  // console.log(info);

  let { snippet, statistics } = info;

  let { channelTitle, title, thumbnails } = snippet;
  // console.log(statistics.viewcount)
  return nowtheme == "Light" ? (
    <div className="">
      <div className="hover :shadow-sm w-[200px] ml-4 mt-2" onClick={fn}>
        <img
          src={thumbnails?.medium?.url}
          className="h-[120px] ml-2 rounded-md"
        />

        <div className="w-[220px] ml-2">
          <h1 className="text-xs font-semibold mt-1">{title.slice(0, 60)}</h1>

          <div className="flex text-xs mt-1 ml-1">
            <h1 className="font-semibold text-gray-600">{channelTitle}</h1>

            <h1 className="ml-5 font-semibold text-gray-600">
              {parseInt(statistics?.viewCount / 100000)}K views
            </h1>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mt-4">
      <div className="hover :shadow-sm w-[200px] ml-4 mt-2" onClick={fn}>
        <img
          src={thumbnails?.medium?.url}
          className="h-[120px] ml-2 rounded-md"
        />

        <div className="w-[220px] ml-2">
          <h1 className="text-xs font-semibold mt-1 text-white">
            {title.slice(0, 60)}
          </h1>

          <div className="flex text-xs mt-1 ml-1">
            <h1 className="font-semibold text-gray-400">{channelTitle}</h1>

            <h1 className="ml-5 font-semibold text-gray-300">
              {parseInt(statistics?.viewCount / 100000)}K views
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VedioCard;
