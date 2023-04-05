import React, { useEffect, useState } from "react";
import VedioCard from "./VedioCard.js";
import { GOOGLE_VEDIO_API } from "./Constants.js";
import { GOOGLE_VEDIO_API_US } from "./Constants.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToogleSlidebar } from "./HamburgerSlice.js";
import Shimmer from "./Shimmer.js";
import Crousal from "./Crousal.js";

const VedioContainer = () => {
  let [vedios, setvedios] = useState([]);
  let [vedios2, setvedios2] = useState([]);

  const dispatch = useDispatch();
  const nowslide = useSelector((store) => store.Hamburger.show);

  function VedioClicked() {
    dispatch(ToogleSlidebar());
  }

  useEffect(() => {
    Call_Vedios();
    setInterval(() => {
      Call_vedios2();
    }, 5000);
  }, []);

  async function Call_Vedios() {
    let kachra = await fetch(GOOGLE_VEDIO_API);

    let data = await kachra.json();

    // console.log(data);
    setvedios(data.items);
  }

  async function Call_vedios2() {
    let kachra = await fetch(GOOGLE_VEDIO_API_US);

    let data = await kachra.json();

    // console.log(data);
    setvedios2(data.items);
  }

  // console.log(vedios.length)

  return vedios?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap  mt-20">
      {/* {vedios.length} */}
      {vedios.map((item, index) => {
        return (
          <Link to={"/watch?v=" + item?.id}>
            <VedioCard info={item} fn={VedioClicked} />
          </Link>
        );
      })}

      {vedios2.map((item, index) => {
        return <VedioCard info={item} />;
      })}


      {/* <Crousal /> */}
    </div>
  );
};

export default VedioContainer;
