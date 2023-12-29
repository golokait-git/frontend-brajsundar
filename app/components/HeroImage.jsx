import Image from "next/image";
import React from "react";

const MainHeroSection = () => {
  return (
    <Image
      src={require("../../public/assets/mainPage.jpeg")}
      height={320}
      width={320}
      alt="logo"
      className="mt-0 md:mt-10 shadow-md rounded-md"
    />
  );
};

export default MainHeroSection;
