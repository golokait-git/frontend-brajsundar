"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import { Oval } from "react-loader-spinner";
import { apiLink } from "../../apiLink";

const Reels = () => {
  const [reels, setReels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reelsPerPage = 9;
  const [loading, setLoading] = useState(true);

  const fetchReels = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiLink}/reel`, {
        params: {
          page,
          limit: reelsPerPage,
        },
      });
      setLoading(false);
      setReels((prevReels) => [...prevReels, ...response.data.reels]);
    } catch (error) {
      console.error("Error fetching podcast data:", error);
    }
  };

  useEffect(() => {
    fetchReels(currentPage);
  }, [currentPage]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <main className="w-full">
      <section className="max-w-6xl mx-auto min-h-[100vh] relative">
      <div className="flex md:flex-row-reverse flex-col justify-between items-center md:mb-12 w-[80%] mx-auto md:w-[80%] md:mx-auto ">
            <div className="md:w-[40%]">
              <Image src="/assets/reels-bg.png" width={440} height={380} />
            </div>
            <div className=" bg-[url('/assets/bg-line.png')] bg-contain bg-no-repeat bg-center md:w-[60%] py-[20%]">
              <div className="md:h-[35%] md:px-[38%] md:w-full w-[20%] mx-auto ">
                <h1 className="text-xl  md:text-4xl text-center text-[#22668d] px-2 rounded-bl-2xl rounded-tr-2xl shadow-lg shadow-[#22668d] bg-white">
                  Reels
                </h1>
              </div>
            </div>
          </div>
        <div className="grid md:grid-cols-3 place-items-center gap-12 mx-10 mb-12">
          {reels &&
            reels.map((item) => (
              <Link key={item.id} href={item.url} target="_blank">
                <Image
                  src={
                    item.reelpath
                      ? item.reelpath
                      : require("../../public/assets/sample1.jpg")
                  }
                  alt={item.url}
                  height={700}
                  width={220}
                  className="rounded-xl h-[400px] object-cover cursor-pointer transition-all hover:transition-all scale-100 hover:scale-105 duration-200 hover:duration-200 hover:shadow-[#22668d40] shadow-lg"
                />
              </Link>
            ))}
        </div>
        {loading && (
          <div className="flex justify-center items-center my-4">
            <Oval color="#22668d" height={30} width={30} />
          </div>
        )}
        {!loading && (
          <div className="flex justify-center items-center my-4">
            <button
              className="bg-[#22668d] text-white font-serif px-4 text-xl md:text-lg rounded-bl-2xl rounded-tr-2xl scale-100 hover:scale-105 hover:transition-all hover:duration-200"
              onClick={loadMore}
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Reels;
