"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmagazineCard = (props) => {
  return (
    <Link
      href={`https://media.brajsundar.com/${props?.data?.link}`}
      target="_blank"
    >
      <div className="w-full shadow-lg rounded cursor-pointer transition-all hover:transition-all duration-200 hover:duration-200 hover:shadow-[#22668d40] border-[1.4px] border-black/70 p-2">
        <Image
          src={`https://media.brajsundar.com/${props?.data?.image}`}
          alt="podcast preview"
          width={400}
          height={400}
          className="w-full aspect-square object-cover rounded-t transition-all group-hover:transition-all scale-100 group-hover:scale-105 duration-200 group-hover:duration-200 group-hover:shadow-[#22668d40]"
        />
        <div className="h-24 overflow-hidden">
          <p className="mt-3 mb-2 text-xs px-3">{props.data.date}</p>
          <p className="font-medium px-3 mb-3 line-clamp-2">
            {props.data.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EmagazineCard;
