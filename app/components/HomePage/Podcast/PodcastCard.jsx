"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PodcastCard = (props) => {
  const navigate = useRouter();
  let newData = new Date(props?.data?.published).toLocaleString();
  return (
    <div
      className={`overflow-hidden bg-white shadow-lg border border-[#22668d] rounded-bl-3xl rounded-tr-3xl cursor-pointer transition-all hover:transition-all duration-200 mx-auto hover:duration-200 shadow-[#22668d] hover:shadow-[#22668d] hover:shadow-xl ${
        props?.type === "home" ? "scale-100 hover:scale-105 w-[95%]" : "w-full"
      }`}
      onClick={() => navigate.push(`/podcast/${props.data.id}`)}
    >
      <div className=" p-2">
        <Image
          src={props?.data?.itunes_image.href}
          height={240}
          alt="podcast preview"
          width={300}
          className="w-full object-contain rounded-bl-3xl rounded-tr-3xl border border-black"
        />
      </div>
      <div className="py-2 px-2 h-[100%]">
        <p className="text-sm mt-2 px-2 pb-2 text-justify">{props?.data?.title}</p>
        <p className="mt-2 mb-1 text-right text-[#22668d] text-xs px-2"> {newData}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
