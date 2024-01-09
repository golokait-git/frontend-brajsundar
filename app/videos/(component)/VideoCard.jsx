"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const VideoCard = (props) => {
  return (
    <div className=" border cursor-pointer rounded-lg flex justify-end h-full items-center flex-col-reverse p-4 transition-all hover:transition-all scale-100 hover:scale-105 duration-200 hover:duration-200 w-[90%] mx-auto">
      <p className="font-medium mt-1 mb-2 text-center text-[#22668d]">{props?.data?.title}</p>
      {/* <p className="mb-4 text-sm text-center">{props?.data?.title}</p> */}
      <Link href={props?.data?.url} target="_blank">
        <Image
          src={`https://img.youtube.com/vi/${props?.data?.url
            .replaceAll("https://www.youtube.com/watch?v=", "")
            .slice(0, 11)}/maxresdefault.jpg`}
          alt="video preview"
          width={560}
          height={315}
          className=" mx-auto object-cover cursor-pointer mb-2"
        />
      </Link>
    </div>
  );
};

export default VideoCard;
