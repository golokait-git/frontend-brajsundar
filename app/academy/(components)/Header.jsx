import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Header = (props) => {
  return (
    <section className="relative flex items-center justify-center h-96 bg-cover bg-center bg-header-bg">
      <div className="text-center text-white">
        <h1 className="text-4xl lg:text-6xl font-bold mx-auto mb-4 w-[80%] md:w-full">
          Explore {props.title}
        </h1>
        <p className="text-lg lg:text-xl mb-8 w-[80%] md:w-full mx-auto">
          Discover a world of knowledge with our wide range of courses.
        </p>
        <div className="flex justify-center w-[80%] mx-auto md:w-[100%] backdrop-blur-sm border-white border-2 rounded-md">
          <input
            type="text"
            placeholder={`Search For ${props.title}s`}
            className="placeholder:text-white py-2 md:py-3 px-4 text-white caret-white bg-transparent outline-none w-[80%] md:w-[86%]"
            value={props.searchQuery}
            onChange={(e) => props.setSearchQuery(e.target.value)}
          />
          <button
            className=" text-white py-2 md:py-3 px-4 flex justify-center items-center rounded-r-md w-[20%] md:w-[14%]"
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
