import React from "react";
import shorts from "./Images/shorts-icon.png";
import subs from "./Images/subscription.png";
import like from "./Images/like.png";
import later from "./Images/watch-later.png";
import history from "./Images/history.png";
import vedios from "./Images/your-vedios.png";
import game from "./Images/gaming.png";
import sports from "./Images/sports.png";
import film from "./Images/film.png";
import news from "./Images/news.png";
import music from "./Images/music.png";
import live from "./Images/live.png";
import trending from "./Images/trending.png";
import fashion from "./Images/fashion.png";
import setting from "./Images/setting.png";
import help from "./Images/help.png";
import feedback from "./Images/feedback.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const nowtheme = useSelector((store) => store.Theme.Now);

  const isMenuopen = useSelector((store) => store.Hamburger.show);

  return !isMenuopen ? null : (
    <div
      className={
        (nowtheme == "Light" &&
          "h-[530px]  ml-1 fixed mt-10 overflow-y-scroll bg-white shadow-lg") ||
        (nowtheme == "Dark" &&
          "h-[530px]  ml-1 fixed mt-10 overflow-y-scroll bg-black shadow-lg text-white")
      }
    >
      <div className="border-b-[1.2px] border-gray-400 w-[120px] ml-1">
        <h1
          className={
            (nowtheme == "Light" && "font-semibold ml-2 text-sm mt-1") ||
            (nowtheme == "Dark" && "font-semibold ml-2 text-sm mt-1 text-white")
          }
        >
          {" "}
          Recents
        </h1>

        <ul className="ml-2 text-xs mt-1">
          <div className="flex mt-2">
            <img
              src="https://e7.pngegg.com/pngimages/703/597/png-clipart-logo-house-home-house-angle-building-thumbnail.png"
              alt="home logo"
              className="h-4 "
            />
            <li className="ml-2">Home</li>
          </div>

          <div className="flex mt-3">
            <img src={shorts} className="h-3 mt-2" />

            <Link to="shorts"><li className="mt-1 ml-2">Shorts</li></Link>
          </div>

          <div className="flex mt-3 mb-2">
            <img src={subs} className="h-3 mt-[6px]" />

            <li className="mb-1 mt-1 ml-2">Subscription</li>
          </div>
        </ul>
      </div>

      {/* div-2 */}

      <div className="border-b-[1.2px] border-gray-400 w-[120px] ml-1">
        <h1 className="font-semibold ml-2 text-sm  mt-2"> Filters</h1>

        <ul className="ml-2 text-xs mt-2">
          <div className="flex mt-2">
            <img src={later} alt="home logo" className="h-3 mt-[2px] " />
            <li className="ml-2">Watch Later</li>
          </div>

          <div className="flex mt-3">
            <img src={like} alt="home logo" className="h-3 mt-[2px] " />
            <li className="ml-2">Liked Vedios</li>
          </div>

          <div className="flex mt-3">
            <img src={history} alt="home logo" className="h-3 mt-[2px] " />
            <li className="ml-2">History</li>
          </div>

          <div className="flex mt-3">
            <img src={vedios} alt="home logo" className="h-3 mt-[2px] " />
            <li className="ml-2 mb-2">Your Vedios</li>
          </div>
        </ul>
      </div>

      {/* div-3 */}

      <div className="border-b-[1.2px] border-gray-400 w-[120px] ml-1">
        <h1 className="font-semibold ml-2 text-sm mt-2"> Explore</h1>

        <ul className="ml-2 text-xs mt-1">
          <div className="flex mt-2">
            <img src={trending} alt="home logo" className="h-4 " />
            <li className="ml-2">Trending</li>
          </div>

          <div className="flex mt-3">
            <img src={sports} alt="home logo" className="h-4 " />
            <li className="ml-2">Sports</li>
          </div>

          <div className="flex mt-3">
            <img src={film} alt="home logo" className="h-4 " />
            <li className="ml-2">Films</li>
          </div>

          <div className="flex mt-3">
            <img src={news} alt="home logo" className="h-4 " />
            <li className="ml-2">News</li>
          </div>

          <div className="flex mt-3">
            <img src={game} alt="home logo" className="h-4 " />
            <li className="ml-2">Gaming</li>
          </div>

          <div className="flex mt-3">
            <img src={music} alt="home logo" className="h-4 " />
            <li className="ml-3">Music</li>
          </div>

          <div className="flex mt-3">
            <img src={live} alt="home logo" className="h-4 " />
            <li className="ml-3">Live</li>
          </div>

          <div className="flex mt-3">
            <img src={fashion} alt="home logo" className="h-4 " />
            <li className="ml-2 mb-2">Fashion</li>
          </div>
        </ul>
      </div>

      <div className="border-b-[1.2px] border-gray-400 w-[120px] ml-1">
        <h1 className="font-semibold ml-2 text-sm mt-1"> Tools</h1>

        <ul className="ml-2 text-xs mt-1">
          <div className="flex mt-3">
            <img src={setting} alt="home logo" className="h-4 " />
            <li className="ml-2 ">Settings</li>
          </div>

          <div className="flex mt-3">
            <img src={help} alt="home logo" className="h-4 " />
            <li className="ml-2 ">Help</li>
          </div>

          <div className="flex mt-3">
            <img src={feedback} alt="home logo" className="h-4 " />
            <li className="ml-2 mb-2">Feedback</li>
          </div>
        </ul>
      </div>

      <div className="w-[120px] ml-2 mt-2 text-xs">
        <h1 className="font-semibold text-md ">Privacy</h1>
        <p className="w-[120px] text-xs mt-2">
          About Press Copyright Contact us Creator Advertise Developers.
          <br></br>
          <br></br>
          <div className="text-gray-500 text-xs">
            Terms Privacy Policy SafetyHow YouTube worksTest new features © 2023
            Google LLC
          </div>
        </p>
      </div>
    </div>
  );

  // :

  //   (

  //     return !isMenuopen ?(null) :(
  //       <div className="h-[530px]  ml-1 fixed mt-10 overflow-y-scroll ">

  //       <div className='border-b-[1.2px] border-gray-400 w-[120px] ml-1'>
  //      <h1 className='font-semibold ml-2 text-sm mt-1'> Recents</h1>

  //      <ul className='ml-2 text-xs mt-1'>

  //   <div className='flex mt-2'>
  //      <img

  //        src="https://e7.pngegg.com/pngimages/703/597/png-clipart-logo-house-home-house-angle-building-thumbnail.png"
  //        alt="home logo"
  //        className='h-4 '

  //      />
  //       <li className='ml-2'>
  //           Home
  //       </li>

  //       </div>

  //     <div className='flex mt-3'>

  //      <img

  //       src={shorts}
  //       className='h-3 mt-2'

  //       />

  //   <li className='mt-1 ml-2'>
  //       Shorts
  //     </li>
  //     </div>

  //    <div className='flex mt-3 mb-2'>

  //     <img

  //      src={subs}
  //      className='h-3 mt-[6px]'

  //     />

  //   <li className='mb-1 mt-1 ml-2'>

  //   Subscription
  //   </li>

  //    </div>

  //      </ul>
  //   </div>

  //     {/* div-2 */}

  //   <div className='border-b-[1.2px] border-gray-400 w-[120px] ml-1'>

  //   <h1 className='font-semibold ml-2 text-sm  mt-2'> Filters</h1>

  //   <ul className='ml-2 text-xs mt-2'>

  //   <div className='flex mt-2'>
  //      <img

  //        src={later}
  //        alt="home logo"
  //        className='h-3 mt-[2px] '

  //      />
  //       <li className='ml-2'>
  //            Watch Later
  //       </li>

  //       </div>

  //   <div className='flex mt-3'>
  //      <img

  //        src={like}
  //        alt="home logo"
  //        className='h-3 mt-[2px] '

  //      />
  //       <li className='ml-2'>
  //           Liked Vedios
  //       </li>

  //       </div>

  //       <div className='flex mt-3'>
  //      <img

  //        src={history}
  //        alt="home logo"
  //        className='h-3 mt-[2px] '

  //      />
  //       <li className='ml-2'>
  //            History
  //       </li>

  //       </div>

  //   <div className='flex mt-3'>
  //      <img

  //        src={vedios}
  //        alt="home logo"
  //        className='h-3 mt-[2px] '

  //      />
  //       <li className='ml-2 mb-2'>
  //          Your Vedios
  //       </li>

  //       </div>

  //   </ul>

  //   </div>

  //      {/* div-3 */}

  //   <div className='border-b-[1.2px] border-gray-400 w-[120px] ml-1'>

  //   <h1 className='font-semibold ml-2 text-sm mt-2'> Explore</h1>

  //   <ul className='ml-2 text-xs mt-1'>

  //   <div className='flex mt-2'>
  //      <img

  //        src={trending}
  //        alt="home logo"
  //        className='h-4 '

  //      />
  //       <li className='ml-2'>
  //         Trending
  //       </li>

  //       </div>

  //   <div className='flex mt-3'>
  //      <img

  //        src={sports}
  //        alt="home logo"
  //        className='h-4 '

  //      />
  //       <li className='ml-2'>
  //           Sports
  //       </li>

  //       </div>

  //   <div className='flex mt-3'>
  //      <img

  //        src={film}
  //        alt="home logo"
  //        className='h-4 '

  //      />
  //       <li className='ml-2'>
  //           Films
  //       </li>

  //       </div>

  //       <div className='flex mt-3'>
  //      <img

  //        src={news}
  //        alt="home logo"
  //        className='h-4 '

  //      />
  //       <li className='ml-2'>
  //           News
  //       </li>

  //       </div>

  //       <div className='flex mt-3'>
  //      <img

  //        src={game}
  //        alt="home logo"
  //        className='h-4 '

  //      />
  //       <li className='ml-2'>
  //           Gaming
  //       </li>

  //       </div>

  //       <div className='flex mt-3'>
  //      <img

  //        src={music}
  //        alt="home logo"
  //        className='h-4 '

  //      />
  //       <li className='ml-3'>
  //           Music
  //       </li>

  //       </div>

  //   <div className='flex mt-3'>
  //      <img

  //        src={live}
  //        alt="home logo"
  //        className='h-4 '

  //      />
  //       <li className='ml-3'>
  //           Live
  //       </li>

  //       </div>

  //   <div className='flex mt-3'>
  //      <img

  //        src={fashion}
  //        alt="home logo"
  //        className='h-4 '

  //      />
  //       <li className='ml-2 mb-2'>
  //           Fashion
  //       </li>

  //       </div>

  //   </ul>

  //   </div>

  //   <div className='border-b-[1.2px] border-gray-400 w-[120px] ml-1'>

  //   <h1 className='font-semibold ml-2 text-sm mt-1'> Tools</h1>

  //   <ul className='ml-2 text-xs mt-1'>

  //   <div className='flex mt-3'>
  //      <img

  //        src={setting}
  //        alt="home logo"
  //        className='h-4 '

  //      />
  //       <li className='ml-2 '>
  //           Settings
  //       </li>

  //       </div>

  //       <div className='flex mt-3'>
  //      <img

  //        src={help}
  //        alt="home logo"
  //        className='h-4 '

  //      />
  //       <li className='ml-2 '>
  //           Help
  //       </li>

  //       </div>

  //   <div className='flex mt-3'>
  //      <img

  //        src={feedback}
  //        alt="home logo"
  //        className='h-4 '

  //      />
  //       <li className='ml-2 mb-2'>
  //            Feedback
  //       </li>

  //       </div>

  //   </ul>

  //   </div>

  //   <div className='w-[120px] ml-2 mt-2 text-xs'>

  //   <h1 className='font-semibold text-md '>
  //     Privacy
  //   </h1>
  //   <p className='w-[120px] text-xs mt-2'>
  //   About Press Copyright
  //   Contact us Creator
  //   Advertise
  //   Developers.
  //   <br>
  //     </br>
  //     <br>

  //     </br>
  //   <div className='text-gray-500 text-xs'>
  //   Terms Privacy Policy  SafetyHow YouTube worksTest new features
  //   © 2023 Google LLC

  //   </div>
  //   </p>
  //   </div>

  //       </div>)

  //     }

  //   )

  // }
};
export default SideBar;

// game sport film music live trending fashion
