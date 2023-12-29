"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const VideoCard = (props) => {
  return (
    <div className="bg-[#fff] border cursor-pointer rounded-lg flex justify-end h-full items-center flex-col-reverse p-4 transition-all hover:transition-all scale-100 hover:scale-105 duration-200 hover:duration-200 hover:shadow-[#22668d40] shadow-lg w-[90%] mx-auto">
      <p className="font-medium mt-1 mb-2 text-left">{props?.data?.title}</p>
      {/* <p className="mb-4 text-sm text-center">{props?.data?.title}</p> */}
      <Link href={props?.data?.url} target="_blank">
        <Image
          src={`https://img.youtube.com/vi/${props?.data?.url
            .replaceAll("https://www.youtube.com/watch?v=", "")
            .slice(0, 11)}/maxresdefault.jpg`}
          alt="video preview"
          width={1000}
          height={200}
          className="rounded-md mx-auto aspect-video w-full object-cover cursor-pointer shadow-lg shadow-[#22668d40] mb-2"
        />
      </Link>
    </div>
  );
};

export default VideoCard;
