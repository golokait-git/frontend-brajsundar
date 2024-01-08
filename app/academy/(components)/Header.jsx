import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Header = (props) => {
  return (
    <section className="relative flex items-center justify-center h-96 bg-cover bg-center bg-header-bg">
      <div className="text-center text-[#15415A]">
        <h1 className="text-4xl font-serif lg:text-6xl mx-auto mb-4 w-[80%] md:w-full">
          Explore {props.title}
        </h1>
        <p className="text-lg lg:text-xl mb-8 w-[80%] md:w-full mx-auto">
          Discover a world of knowledge with our wide range of {props.title}.
        </p>
        <div className="flex justify-center w-[60%] mx-auto md:w-[60%] border-transparent border-2">
          <input
            type="text"
            className="py-2 md:py-3 px-4 text-black caret-black bg-[#D9D9D9] outline-none w-[80%] md:w-[86%]"
            value={props.searchQuery}
            onChange={(e) => props.setSearchQuery(e.target.value)}
          />
          <button
            className=" text-black bg-[#D9D9D9] py-2 md:py-3 px-4 flex justify-center items-center w-[20%] md:w-[14%]"
            onClick={props.handleSearch}
          >
            <IoSearchOutline className="text-2xl md:text-3xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
