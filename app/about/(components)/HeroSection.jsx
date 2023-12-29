import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex justify-evenly items-center flex-col md:flex-row max-w-6xl mx-auto my-18">
      <div className="w-full md:w-[45%] flex justify-center items-center md:items-start flex-col">
        <p className="text-4xl font-semibold text-center md:text-left">
          Brajsundar Das
        </p>
        <p className="md:text-lg my-2 text-center md:text-left">
          Brajsundar Das is a multifaceted individual, encompassing the roles of
          a spiritual leader, author, global public speaker, educator, and
          relationship coach. His profound quest to unravel the ultimate purpose
          of life led him to embark on a transformative journey when he became
          associated with ISKCON in 2002. It&apos;s noteworthy that he is a
          devoted disciple of the esteemed His Holiness Radha Govind Das
          Goswami.
        </p>
      </div>
      <div className="w-full md:w-[45%] flex justify-center items-center mt-6 md:mt-0">
        <div className="relative">
          <div className="w-[380px] h-[320px] border-[7px] border-[#22668d] absolute top-5 left-5 z-10"></div>
          <Image
            src={require("../../../public/assets/image5.jpg")}
            alt="My Photo"
            height={420}
            width={420}
            className="object-cover w-[380px] h-[320px] relative z-20 rounded-tl-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
