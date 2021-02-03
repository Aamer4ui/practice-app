import React from "react";
import "../Header/HeaderItems.css";

export const HeaderItem = () => {
  return (
    <div>
      <header>
        <a href="#" className="logo1">
          <img src="c-logo-new.png" alt="university logo" />
        </a>
        <a href="#" className="logo-name">
          <img src="logo-name.png" alt="" />
        </a>
        {/* <h2>
          Prince Mohammad Bin Fahd University
          <h3>Create Minds, Transform The World </h3>
        </h2> */}
      </header>
    </div>
  );
};
