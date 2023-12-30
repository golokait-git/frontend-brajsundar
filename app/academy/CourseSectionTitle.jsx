import React from "react";
import Link from "next/link";
const CourseSectionTitle = ({ title, onViewAll }) => {
  return (
    <div className="flex justify-between items-center w-[90%] mx-auto md:w-full">
      <>
        <p className="text-black font-semibold text-[32px]">{title}</p>
        <Link href={`/academy/${title.toLowerCase()}`}>
          <button
            className="bg-[#22668d] text-[#fff] font-medium px-4 py-[6px] rounded-md"
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
