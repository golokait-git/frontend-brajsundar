import Image from "next/image";
import React from "react";
import HomeTitle from "../HomeTitle";
const BlogSection = () => {
  return (
    <main className="bg-gradient-to-r from-[#f4e9d9] to-[#ffffff] w-full font-serif ">
      {/* <div className="flex md:justify-center items-center my-10 mx-auto max-w-6xl w-full flex-col"> */}
      {/* <HomeTitle title="Blogs" link="https://brajsundardas.in/" disableButton={true} /> */}

      <section className="flex flex-col lg:flex-row-reverse justify-evenly items-center mx-auto max-w-[80%] my-2">
        <div className="w-full lg:w-[38%] flex justify-center lg:justify-start items-center md:items-end lg:items-start flex-col relative mt-6 md:mt-0">
          <Image
            src="/assets/blog.png"
            alt="about image"
            height={400}
            width={400}
            className="object-contain w-full"
          />
        </div>
        <div className="w-full lg:w-[40%] flex justify-start items-start flex-col p-4 lg:p-0 mt-4 md:mt-0 md:space-y-12">
          <p className="text-2xl md:text-4xl mb-3">
            <span className="text-[#22668D]">Spiritual Blog </span>
          </p>
          <p className="text-justify md:text-lg mb-5 md:mb-4 md:w-[80%] tracking-wider">
            Dive into a world of spiritual enlightenment and relationship wisdom
            with <span className="text-[#22668D]">Brajsundar Das</span>{" "}
            captivating blogs. Discover profound insights and transformative
            guidance on spirituality, relationships, and uncovering lifes
            ultimate purpose. Join a community of seekers exploring the depths
            of devotion, service, and meaningful living through{" "}
            <span className="text-[#22668D]">Brajsundar Das</span> inspiring
            words.
          </p>
          <button
            className="bg-[#22668d] text-white px-4 text-xl md:text-lg rounded-bl-2xl rounded-tr-2xl scale-100 hover:scale-105 hover:transition-all hover:duration-200"
            onClick={() => window.open("https://brajsundardas.in/")}
          >
            Know More
          </button>
        </div>
      </section>
      {/* </div> */}
    </main>
  );
};

export default BlogSection;
