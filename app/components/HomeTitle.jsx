import { useRouter } from "next/navigation";
import React from "react";

const HomeTitle = (props) => {
  const navigate = useRouter();
  return (
    <div className="flex justify-between items-center w-[90%] md:w-[100%] font-serif my-6">
      <p className="  text-3xl text-[#22668d] ml-10 md:text-4xl">{props.title}</p>
      {!props.disableButton && (
        <button
          className="bg-[#22668d] text-white px-4 text-xl md:text-lg rounded-bl-2xl rounded-tr-2xl scale-100 hover:scale-105 hover:transition-all hover:duration-200"
          onClick={() => navigate.push(props.link)}
        >
          View All
        </button>
      )}
    </div>
  );
};

export default HomeTitle;
