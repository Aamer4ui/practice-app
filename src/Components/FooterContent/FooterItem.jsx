import React from "react";
import "../FooterContent/FooterItems.css";

export const FooterItem = () => {
  return (
    <div>
      <footer>
        <p className="footer-para">
          <b>
            <i>2021 &copy; PMU, Prince Mohammad Bin Fahd University</i>
          </b>{" "}
          <i>
            All Rights Reserved.<sup>&reg;</sup>
          </i>
          <img src="footerlogo.png" alt="" />
        </p>
      </footer>
    </div>
  );
};
