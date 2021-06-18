import React, { useEffect, useState } from "react";
import Buttons from "../Button";
import DateTime from "../DateTime";
import "./index.scss";
import { setIsFetch } from "./../../../reducers/bankReducer";
import { useDispatch } from "react-redux";

function SubHeader(props) {
  const dispatch = useDispatch();
  const [isHamBurActive, setIsHamBurActive] = useState(false);
  const [Screen, setScreen] = useState(window.screen.width);
  const toggleHamburger = () => {
    setIsHamBurActive(!isHamBurActive);
  };
  const refresh = () => {
    dispatch(setIsFetch());
  };
  useEffect(() => {
    return () => {
      window.removeEventListener("resize", setIsHamBurActive(false));
    };
  }, []);
  window.addEventListener("resize", () => {
    setScreen(window.screen.width);
  });
  return (
    <div className="sub-header">
      <div className="leftEnd">
        <Buttons onClick={refresh}>Refresh</Buttons>
      </div>
      <div className="hamburger">
        <i
          className={isHamBurActive ? "fas fa-times" : "fas fa-bars"}
          onClick={toggleHamburger}
        />
      </div>
      <div
        className={`${
          Screen < 768 ? (isHamBurActive ? "d-flex" : "d-none") : ""
        } rightEnd`}
      >
        {props.children}
        <DateTime />
      </div>
    </div>
  );
}

export default SubHeader;
