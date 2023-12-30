import React from "react";
import Link from "next/link";
const CourseCard = (props) => {
  return (
    <Link
      href={`/academy/course-detail/${props.courseData.institution_bundle_id}`}
      className="w-[90%] md:w-full mx-auto rounded-md overflow-hidden shadow-md bg-white my-4 cursor-pointer flex justify-start flex-col items-start"
      target="_blank"
    >
      <img className="w-full h-3/6" alt="Card" src={props.courseData.img_url} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {props.courseData.bundle_name}
        </div>
        <p className="text-gray-700 text-base">
          {props.courseData.bundle_description}
        </p>
      </div>
      <div className="mt-auto w-full pb-4 px-6">
        <button className="border-[#22668d] text-[#22668d] hover:bg-[#22668d] hover:text-white transition-all ease-linear duration-200 hover:transition-all hover:ease-linear hover:duration-200  border-2 w-full py-[8px] rounded-md">
          Enroll Now
        </button>
      </div>
    </Link>
  );
};

export default CourseCard;
