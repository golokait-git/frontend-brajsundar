import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full pt-10">
      <Oval
        height={30}
        width={30}
        color="#181818"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#181818"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
