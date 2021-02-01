import React from "react";
import "../Header/HeaderItems.css";

export const HeaderItem = () => {
  return (
    <div>
      <header>
        <a href="#" className="logo1">
          <img src="c-logo-new.png" alt="univercity logo" />
        </a>
        <a href="#" className="logo-name">
          <img src="logo-name.png" alt="" />
        </a>
        <p className="heading-para">
          Prince Mohammad Bin Fahd University </p>
          <p className="heading-para1">Create Minds, Transform The World </p>
      </header>
    </div>
  );
};
