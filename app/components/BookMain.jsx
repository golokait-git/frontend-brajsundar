import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineAmazon } from "react-icons/ai";
import Lottie from "lottie-react";
import animation from "../../public/arrow.json";
import { Star } from "lucide-react";
import Review from "../components/Review";
const BookMain = ({ data, setSelectedBook, setHide }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [active, setActive] = useState(false);
  const [showReview, setShowReview] = useState(false);
  useEffect(() => {
    if (selectedOption === "") setActive(false);
  }, [selectedOption]);
  return (
    <div
      key={data.title}
      className="mt-12 mb-10 w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row justify-center md:items-start items-center border-b-2 pb-12"
    >
      {showReview && (
        <Review title={data.book_name} setShowReview={setShowReview} />
      )}
      <div className="flex justify-center items-center flex-col">
        <Image
          src={`https://media.brajsundar.com/${data.book_path}`}
          alt={data.title}
          height={600}
          width={240}
          className="object-cover rounded-xl"
        />
        {data.prebook === "NO" && (
          <button
            className="text-[#142834] border-2 flex justify-center items-center border-[#142834] font-semibold px-4 py-[5px] rounded mt-6"
            onClick={() => {
              setShowReview(true);
              window.scrollTo(0, 0);
            }}
          >
            Reviews <Star size={22} className="ml-2" />
          </button>
        )}
      </div>
      <div className="w-[95%] md:w-[60%] mt-8 ml-0 md:mt-0 md:ml-10">
        <p className="text-[#22668d] font-semibold text-2xl md:text-4xl mb-4">
          {data.book_name}
        </p>
        <p className="text-sm md:text-base">{data.details}</p>
        {(data.prebook === "YES" || data.prebook === "0") && (
          <button
            className="bg-[#142834] text-[#fff] font-medium md:font-semibold px-6 py-2 rounded mt-6 text-sm md:text-base"
            onClick={() => {
              setHide(false);
              window.scrollTo(0, 0);
              setSelectedBook(data.book_name);
            }}
          >
            Preorder This Book
          </button>
        )}
        {data.prebook === "NO" && (
          <div className="mt-5 flex items-center">
            <select
              name="book"
              id="book"
              value={selectedOption}
              onChange={(e) => {
                setActive(true);
                setSelectedOption(e.target.value);
              }}
              className="text-[#000]  border-[1.5px] border-[#000] caret-white outline-none h-10 px-2 rounded-md w-[40%] appearance-none"
              placeholder="Select Country"
            >
              <option value="" selected className="text-black">
                -- Select Country --
              </option>
              {data.country.split(",").map((item, index) => {
                return (
                  <option
                    value={data.link.split(",")[index].replaceAll(`"`, "")}
                    key={index}
                    className="w-full text-black"
                  >
                    {item.replaceAll(`"`, "")}
                  </option>
                );
              })}
            </select>
            {!active && selectedOption === "" && (
              <div className="flex justify-center items-center">
                <Lottie
                  animationData={animation}
                  loop={true}
                  className="w-12"
                />
                <p className="flex justify-center items-center text-lg font-medium">
                  Buy Here
                </p>
              </div>
            )}
            {active && selectedOption && (
              <Link href={selectedOption} target="_blank">
                <button className="bg-[#142834] text-white px-4 py-[8px] rounded-md ml-6 flex justify-center items-center text-sm md:text-base">
                  Buy From
                  <span className="ml-2">
                    <AiOutlineAmazon className="md:text-xl text-lg" />
                  </span>
                </button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookMain;
