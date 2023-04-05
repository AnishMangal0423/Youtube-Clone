import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import Comments from "./Comments.js";
import { commentsdata } from "./Helper";
import Suggestions from "./Suggestions";
import { useSelector } from "react-redux";

const CommentsList = ({ comments }) => {
  let nowtheme = useSelector((store) => store.Theme.Now);

  return comments.map((commentitem, index) => {
    return (
      <div
        className={
          (nowtheme == "Light" &&
            "bg-gray-100 mt-2 py-1 border-l-[1.1px] border-black") ||
          (nowtheme == "Dark" && "bg-black mt-2 py-1 1 border-l-[1.1px] ")
        }
      >
        <Comments data={commentitem} />

        <div className="pl-10 ml-7 border-l-[1.1px] border-black">
          <CommentsList comments={commentitem?.Reply} />
        </div>
      </div>
    );
  });
};

const WatchPage = () => {
  let nowslider = useSelector((store) => store.Hamburger.show);
  let nowtheme = useSelector((store) => store.Theme.Now);

  // console.log(nowtheme)

  //  console.log("slider"+nowslider)

  let [searchParams] = useSearchParams();
  let [vedioData, SetvedioData] = useState([]);
  // let[id,name]=useParams();

  useEffect(() => {
    getData();
  });

  async function getData() {
    let kachra = await fetch(
      "https://www.youtube.com/watch?v=" + searchParams?.get("v")
    );
    // console.log(kachra)

    let data = await kachra.json();
    // console.log(data)
    SetvedioData(data.items);
  }

  return (
    <div
      className={
        (nowtheme == "Light" && "text-black") ||
        (nowtheme == "Dark" && "text-white bg-black")
      }
    >
      {nowslider == false ? (
        <div className="flex ">
          <div>
            <iframe
              width="720"
              height="400"
              src={"https://www.youtube.com/embed/" + searchParams?.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <h1 className="mt-3 font-bold mb-2">Comments-</h1>

            <div className={"mt-4 " + (nowtheme == "Dark" && "bg-black")}>
              <CommentsList comments={commentsdata} />
            </div>
          </div>

          <div>
            <LiveChat />

            <Suggestions />
          </div>
        </div>
      ) : (
        <div className="flex -ml-36 mt-20">
          <div>
            <iframe
              width="720"
              height="400"
              src={"https://www.youtube.com/embed/" + searchParams?.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <h1 className={"mt-3 font-bold mb-2"}>Comments-</h1>

            <CommentsList comments={commentsdata} />
          </div>

          <div>
            <LiveChat />

            <Suggestions />
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchPage;
