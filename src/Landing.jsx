import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderItem } from "./Components/Header/HeaderItem";
import { NavigationItem } from "./Components/NavigationMenu/NavigationItem";
import { HomeItem } from "./Components/HomeContent/HomeItem";
import { FooterItem } from "./Components/FooterContent/FooterItem";
import { Crousel } from "./Components/HomeContent/Crousel";

export const Landing = () => {
  return (
    <div>
      <HeaderItem />
      <NavigationItem />
      <Crousel />
      <HomeItem />
      <FooterItem />
    </div>
  );
};
