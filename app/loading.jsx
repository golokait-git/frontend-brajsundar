"use client";
import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center ">
      <Oval
        height={30}
        width={30}
        color="#142834"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#142834"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loading;
