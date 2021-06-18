import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./loader.scss";

export const PageLoader = () => {
  return (
    <div>
      <ProgressBar
        animated
        variant="danger"
        now="100"
        max="100"
        className="loader"
      />
    </div>
  );
};
