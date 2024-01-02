"use client";
import Image from "next/image";
import React from "react";

const ImageDesc = (props) => {
  return (
    <section
      id={props.id}
      className={`flex flex-col-reverse justify-evenly items-center mb-10 md:mb-16 w-full ${
        props.position === "right"
          ? "md:flex-row-reverse"
          : "flex-col-reverse md:flex-row"
      }`}
    >
      <div className="w-[95%] md:w-[55%] flex justify-center items-start flex-col mt-8 md:mt-0 ">
        <p className="text-3xl md:text-4xl font-semibold text-[#22668D]">
          {props.title}
        </p>

        <p className="md:text-lg mt-4 text-justify text-[#000000] ">{props.description}</p>
        <p className=" text-right text-[#00000] w-full ">{props.date}</p>
 
      </div>
      <Image
        src={require(`../../../public/assets/${props.image}.jpg`)}
        alt="My Photo"
        height={420}
        width={420}
        className=" w-full md:w-[340px] h-[400px] relative z-20 rounded-md "
      />
    </section>
  );
};

export default ImageDesc;
