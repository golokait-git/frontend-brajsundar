"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const ImageDesc = (props) => {  
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
 
  return (
    <section
      id={props.id}
      className={`flex flex-col-reverse justify-evenly items-center mb-10 md:mb-16 w-full ${
        props.position === "right"
          ? "md:flex-row-reverse"
          : "flex-col-reverse md:flex-row"
      }`}
    >
      <div className="w-[95%] md:w-[55%] flex justify-center items-start flex-col mt-8 md:mt-0">
      <p className="text-3xl md:text-4xl font-semibold text-[#22668D]">
        {props.title}
      </p>
      <p className="md:text-lg mt-4 text-justify text-[#000000]">
        {props.description}
        <button onClick={openModal} className=" text-[#22668D]">
          read more
        </button>
      </p>
      {modalOpen && (
        <Modal title={props.title} description={props.description} closeModal={closeModal} />
      )}
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
