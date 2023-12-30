"use client";
import React from "react";
import { usePathname } from "next/navigation";
import MainNavbar from "../app/components/Navbar";
import Navbar from "../app/academy/(components)/Navbar";
const NavbarSelector = () => {
  const path = usePathname();
  if (path.includes("/academy")) {
    return <Navbar />;
  } else {
    return <MainNavbar />;
  }
};

export default NavbarSelector;
