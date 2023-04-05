import React from "react";
import ytv_logo from "./Images/Youtube-logo.png";
import search from "./Images/sear.png";
import { ToogleSlidebar } from "./HamburgerSlice";
import { useDispatch, useSelector } from "react-redux";
import night from "./Images/night.png";
import { ChangeTheme } from "./ThemeSlice";
import LightHeader from "./LightHeader";
// import DarkHeader from "./DarkHeader";
// import { Dispatch } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const nowtheme = useSelector((store) => store.Theme.Now);

  function changeSidebar() {
    dispatch(ToogleSlidebar());
  }

  function Theme() {
    dispatch(ChangeTheme());
  }

  return (
    <div>
      <LightHeader />
    </div>
  );
};

export default Header;
