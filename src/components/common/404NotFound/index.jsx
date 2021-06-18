import React from "react";
import { NavLink } from "react-router-dom";

export const notFound = () => {
  return (
    <div>
      Oops! Seems like you are misdirected
      <NavLink to={`/${process.env.REACT_APP_BASE}/`}>Go to home</NavLink>
    </div>
  );
};
