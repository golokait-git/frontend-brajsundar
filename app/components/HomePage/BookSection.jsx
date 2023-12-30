"use client";
import React, { useState, useEffect } from "react";
import HomeTitle from "../HomeTitle";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { apiLink } from "../../../apiLink";

const BookSection = () => {
  const navigate = useRouter();
  const [data, setData] = useState([]);
  const Books = async () => {
    try {
      const response = await axios.get(`${apiLink}/book`, {
        params: {
          page: 1,
          limit: 1,
        },
      });
      setData(response.data.books[0]);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };
  useEffect(() => {
    Books();
  }, []);
  return (
    <main className="w-full bg-[#f5f5f5]">
      <section className="flex md:justify-center items-center my-10 mx-auto max-w-6xl w-full flex-col">
        <HomeTitle title="Books" link="/literature/books" />
        <div className="flex justify-evenly items-start flex-col md:flex-row mt-6 mb-10 md:w-[70%]">
          {data.book_path && (
            <Image
              src={`https://media.brajsundar.com/${data?.book_path}`}
              alt="reels preview"
              onClick={() => navigate.push("/literature/books")}
              height={400}
              width={300}
              className="rounded-md h-[400px] w-[90%] mx-auto md:w-auto object-cover cursor-pointer transition-all hover:transition-all scale-100 hover:scale-105 duration-200 hover:duration-200 hover:shadow-[#22668d40]"
            />
          )}
          <div className="w-[90%] md:w-[60%] mt-6 md:mt-0 mx-auto">
            <p className="text-[#22668d] text-2xl md:text-3xl font-semibold mb-2">
              {data && data?.book_name}
            </p>
            <p className="md:text-lg mb-2 line-clamp-4">{data?.details}</p>
            <button
              className="bg-[#22668D] text-white px-4 py-1 rounded-md mt-3"
              onClick={() => navigate.push("/literature/books")}
            >
              Read More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookSection;
