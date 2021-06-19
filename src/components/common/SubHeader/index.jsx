import React, { useEffect, useState } from "react";
import Buttons from "../Button";
import DateTime from "../DateTime";
import "./index.scss";
import { setIsFetch } from "./../../../reducers/bankReducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

function SubHeader(props) {
  const history = useHistory();
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
  const logout = () => {
    localStorage.clear();
    history.push(`${process.env.PUBLIC_URL}/login`);
  };
  return (
    <div className="sub-header">
      <div className="leftEnd">
        <Buttons onClick={refresh}>Refresh</Buttons>
        <Buttons variant="info ml-2" onClick={logout}>
          Logout
        </Buttons>
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
