import React from "react";
import Link from "next/link";
const CourseSectionTitle = ({ title, onViewAll }) => {
  return (
    <div className="flex justify-between items-center w-[90%] mx-auto md:w-full">
      <>
        <p className="text-[#22668d] font-serif text-[32px]">{title}</p>
        <Link href={`/academy/${title.toLowerCase()}`}>
          <button
            className=" text-white font-serif p-1  bg-[#22668d] rounded-bl-2xl w-20 rounded-tr-2xl"
            onClick={onViewAll}
          >
            View All
          </button>
        </Link>
      </>
    </div>
  );
};

export default CourseSectionTitle;
