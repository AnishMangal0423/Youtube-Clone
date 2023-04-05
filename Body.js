import React from "react";
import SideBar from "./SideBar.js";
import Buttons from "./Buttons.js";
import { btndata } from "./Constants.js";
import VedioContainer from "./VedioContainer.js";
import { GOOGLE_VEDIO_API } from "./Constants.js";
import { Outlet } from "react-router-dom";
import WatchPage from "./WatchPage.js";
import { useSelector } from "react-redux";
import Crousal from "./Crousal.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Body = (props) => {

  let nowtheme = useSelector((store) => store.Theme.Now);
  let left = useSelector((store) => store.Hamburger.show);

  let arr = btndata;



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 8
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };



  // console.log(GOOGLE_VEDIO_API)
  return (
    <div className={(nowtheme=="Light" && "bg-white") || (nowtheme=="Dark" && "bg-black")}>
      <div className="flex ">
        <div>
          <SideBar />
        </div>
        {left == true ? (
          <div className="ml-28 ">
            <div className="flex ml-10 mt-[2.02rem] fixed bg-white mb-1 w-[900px] h-[40px]">

          <div className='w-[900px]'>
    
    
    <Carousel   swipeable={false}
  draggable={false}
  // showDots={true
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
 
  >
 


               {arr.map((b) => {

              return <Buttons text={b.text} />
          
              }
              
              )} 
             



</Carousel>
    </div>
            </div>

            <div className=" ml-10">
              <Outlet />
            </div>

           
          </div>
        ) : (
          <div className="-ml-6">
            <div className="flex ml-10 mt-[2.02rem]  bg-white mb-1 w-[200px]">



            <div className='w-[900px]'>
    
    
    <Carousel   swipeable={false}
  draggable={false}
  // showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
 
  >
 


               {arr.map((b) => {

              return <Buttons text={b.text} />
          
              }
              
              )} 
             



</Carousel>
    </div>
             
            </div>

            <div className="mt-20 ml-10 mr-4">
              <Outlet />
            </div>
          </div>
        )}
      </div>

     
    </div>
  )
//   ) : (
//     <div>
//       <div className="flex bg-black">
//         <div>
//           <SideBar />
//         </div>
//         {left == true ? (
//           <div className="ml-28">
//             <div className="flex ml-10 mt-[2.02rem] fixed bg-black mb-1">

//             <div className='w-[900px]'>
    
    
//     <Carousel   swipeable={false}
//   draggable={false}
//   // showDots={true}
//   responsive={responsive}
//   ssr={true} // means to render carousel on server-side.
//   infinite={true}
//   // autoPlay={deviceType !== "mobile" ? true : false}
//   autoPlaySpeed={1000}
 
//   >
 


//                {arr.map((b) => {

//               return <Buttons text={b.text} />
          
//               }
              
//               )} 
             



// </Carousel>
//     </div>
             

//             <div className="mt-20 ml-10">
//               <Outlet />
//             </div>
//           </div>
//         ) : (
//           <div className="-ml-6">
//             <div className="flex ml-10 mt-[2.02rem] fixed bg-black mb-1">

//             <div className='w-[900px]'>
    
    
//     <Carousel   swipeable={false}
//   draggable={false}
//   // showDots={true}
//   responsive={responsive}
//   ssr={true} // means to render carousel on server-side.
//   infinite={true}
//   // autoPlay={deviceType !== "mobile" ? true : false}
//   autoPlaySpeed={1000}>
//                {arr.map((b) => {

//               return <Buttons text={b.text} />
          
//               }
              
//               )} 


// </Carousel>
//     </div>
            

//             <div className="mt-20 ml-10 mr-4">
//               <Outlet />
//             </div>
//           </div>
        
//       </div>
//     </div>
            }

export default Body
