import React, { useEffect, useState } from "react";
import ytv_logo from "./Images/Youtube-logo.png";
import search from "./Images/sear.png";
import { ToogleSlidebar } from "./HamburgerSlice";
import { useDispatch, useSelector } from "react-redux";
import night from "./Images/night.png";
import { ChangeTheme } from "./ThemeSlice";
import sun from "./Images/sun.png";

const LightHeader = () => {
  let [searchtext, setsearch] = useState("");
  let [suggestion, setsuggestion] = useState([]);
  let [showsuggestbox, setshowsuggestbox] = useState(false);
  let [themeicon, setthemeicon] = useState(night);

  let nowtheme = useSelector((store) => store.Theme.Now);

  useEffect(() => {
    console.log("polling");

    const timer = setTimeout(() => getDebounce(), 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchtext]);

  async function getDebounce() {
    let kachra = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchtext
    );

    // console.log(kachra)

    let data = await kachra.json();

    //  console.log(data[1]);

    setsuggestion(data[1]);
  }

  const dispatch = useDispatch();

  function changeSidebar() {
    dispatch(ToogleSlidebar());
  }

  function Theme() {
    {
      themeicon == sun ? setthemeicon(night) : setthemeicon(sun);
    }
    dispatch(ChangeTheme());
  }

  return (
    <div>
      <div
        className={
          (nowtheme == "Light" &&
            "flex w-[1050px] flex-wrap justify-between fixed  bg-white") ||
          (nowtheme == "Dark" &&
            "flex w-[1050px] flex-wrap justify-between fixed  bg-black")
        }
      >
        <div className="flex ml-2 flex-wrap ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            alt="Hamburger-icon"
            className="h-6 mt-1 cursor-pointer bg-white rounded-lg"
            onClick={() => changeSidebar()}
          />
          <a href="/">
            <img
              src={ytv_logo}
              alt="Youtube logo"
              className="h-10 -mt-1 ml-2"
            />
          </a>
        </div>

        <div className="flex">
          <div>
            <input
              className="w-[350px] border-[1.1px] border-gray-200 ml-20 mt-2 rounded-l-2xl text-sm px-2"
              placeholder="Search"
              value={searchtext}
              onChange={(e) => {
                setsearch(e.target.value);
              }}
              onFocus={() => {
                setshowsuggestbox(true);
              }}
              onBlur={() => {
                setshowsuggestbox(false);
              }}
            />

            <div className="bg-gray-200 w-[350px] ml-20 fixed shadow-lg rounded-lg py-2">
              <ul className="ml-2">
                {showsuggestbox &&
                  suggestion.map((query) => {
                    return (
                      <div className="flex border-b-[1.1px] border-white">
                        <img src={search} className="h-3 mt-3 " />
                        <li className="mt-1 ml-2">{query}</li>
                      </div>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="bg-gray-200 mt-[7.9px] rounded-r-xl w-[40px] h-[22px]  ">
            <img src={search} className="h-3 mt-[6px] ml-2 " />
          </div>
        </div>

        <div className="flex ml-40">
          <img
            src={themeicon}
            alt="Nght"
            className="h-4 ml-5 mt-2 cursor-pointer "
            onClick={() => Theme()}
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJWPBfo3k9EzIvMlQYtkLIY7evkkCD3_TQ3HNc9x7C&s"
            alt="Notifaction-Bell"
            className="h-4 ml-5 mt-2  hover:bg-gray-400 rounded-lg "
          />

          <img
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="User-Icon"
            className="h-4 ml-5 mr-3 mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default LightHeader;
