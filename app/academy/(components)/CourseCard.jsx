import React from "react";
import Link from "next/link";
const CourseCard = (props) => {
  return (
    <Link
      href={`/academy/course-detail/${props.courseData.institution_bundle_id}`}
      className="w-[90%] md:w-full mx-auto overflow-hidden shadow-lg shadow-[#22668d] bg-white my-4 cursor-pointer flex justify-start flex-col items-start rounded-bl-[12%] rounded-tr-[12%]"
    >
      <img className="w-full h-3/6 " alt="Card" src={props.courseData.img_url} />
      <div className="px-6 py-4 h-full">
        <div className="font-bold text-xl mb-2">
          {props.courseData.bundle_name}
        </div>
        <p className="text-gray-700 text-base">
          {props.courseData.bundle_description}
        </p>
      </div>
      <div className="mx-auto w-1/2 pb-4 px-6 bottom-0 ">
        <button className="border-[#22668d] text-[#22668d] justify-center  font-bold font-serif scale-100 hover:scale-110  hover:bg-[#22668d] hover:text-white transition-all ease-linear duration-200 hover:transition-all hover:ease-linear hover:duration-200  border-2 border-dotted w-full py-1 rounded-bl-2xl rounded-tr-2xl">
          Start Now
        </button>
      </div>
    </Link>
  );
};

export default CourseCard;
