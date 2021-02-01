import React from "react";
import "../Header/HeaderItems.css";

export const HeaderItem = () => {
  return (
    <div>
      <header>
        <a href="#" className="logo-name">
          <img src="logo-name.png" alt="" />
        </a>
        <a href="#" className="logo">
          <img src="images1.png" alt="" style={{ width: "250px" }} />
        </a>
      </header>
    </div>
  );
};
