import React from "react";
import "./footer.scss";

function FooterComponent() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footerDiv">MyKhataApp&copy; {year}</div>
    </footer>
  );
}

export default FooterComponent;
