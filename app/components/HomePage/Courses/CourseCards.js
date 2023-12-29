import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseCards = ({ title, desc, link, img, heading }) => {
    return (
        <>
            <Link
                href={link}
            >
            <div className='w-[90%] md:w-[90%] font-serif mx-auto rounded-bl-2xl rounded-tr-2xl overflow-hidden shadow-xl shadow-[#22668d] bg-white my-4 cursor-pointer flex justify-start flex-col items-start'>

            <Image className="w-full md:max-h-40" alt="Card" src={img} />
                <div className="px-6 py-4">
                    <div className="text-center text-[#22668d] text-xl mb-2">
                    {heading}
                    </div>
                    <p className="text-gray-700 text-sm text-justify">
                    {desc}
                    </p>
                </div>
                <div className="m-auto w-1/2 pb-4 px-6">
                    <button className="border-[#22668d] text-[#22668d] scale-100 hover:scale-110  hover:bg-[#22668d] hover:text-white transition-all ease-linear duration-200 hover:transition-all hover:ease-linear hover:duration-200  border-2 border-dotted w-full py-1 rounded-bl-2xl rounded-tr-2xl">
                        Start Now
                    </button>
                </div>
            </div>
            </Link>

        </>
    )
}

export default CourseCards;




