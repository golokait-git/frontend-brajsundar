"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import { Oval } from "react-loader-spinner";
import { apiLink } from "../../apiLink";

const Reels = () => {
  const [active, setActive] = useState(false);
  const [reels, setReels] = useState([]);
  const [totalReels, settotalReels] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const reelsPerPage = 12;
  const [loading, setLoading] = useState(true);
  const fetchReels = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiLink}/reel`, {
        params: {
          page: currentPage,
          limit: reelsPerPage,
        },
      });
      setLoading(false);
      setReels(response.data.reels);
      settotalReels(response.data.totalReels);
    } catch (error) {
      console.error("Error fetching podcast data:", error);
    }
  };

  useEffect(() => {
    fetchReels();
  }, [currentPage]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const totalPages = Math.ceil(totalReels / reelsPerPage);
  const showPagination = totalReels > reelsPerPage;

  return (
    <main className="w-full">
      <section className="max-w-6xl mx-auto min-h-[100vh] relative">
        <p className="text-4xl text-[#22668d] font-semibold text-center my-10">
          Reels
        </p>
        <div className="grid md:grid-cols-4 place-items-center gap-12 mx-10 mb-12">
          {reels &&
            reels.map((item) => {
              return (
                <Link key={item.id} href={item.url} target="_blank">
                  <Image
                    src={
                      item.reel_path
                        ? `https://media.brajsundar.com/${item.reel_path}`
                        : require("../../public/assets/sample1.jpg")
                    }
                    alt={item.url}
                    height={700}
                    width={220}
                    className="rounded-xl h-[400px] object-cover cursor-pointer transition-all hover:transition-all scale-100 hover:scale-105 duration-200 hover:duration-200 hover:shadow-[#22668d40] shadow-lg"
                  />
                </Link>
              );
            })}
        </div>
        {showPagination && (
          <ul className="flex justify-center items-center mb-4 ">
            <li className={`${currentPage === 1 ? "disabled" : ""}`}>
              <span
                className="cursor-pointer px-2 py-1 flex justify-center items-center text-[#142834]"
                onClick={prevPage}
              >
                <ChevronLeft />
                <span className="ml-2 md:hidden">Previous</span>
              </span>
            </li>
            <li className="md:flex hidden justify-center paginationscrollbar select-none">
              {Array.from({ length: totalPages }).map((_, index) => (
                <li
                  key={index}
                  className={`${currentPage === index + 1 ? "active" : ""}`}
                  style={{ display: "inline-block" }}
                >
                  <span
                    className={`text-sm md:text-base cursor-pointer px-2 mx-1 py-1 ${
                      currentPage === index + 1
                        ? "bg-[#142834] text-white rounded"
                        : "bg-white text-[#142834] rounded hover:bg-[#14283450] hover:text-white"
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </span>
                </li>
              ))}
            </li>
            <li className={`${currentPage === totalPages ? "disabled" : ""}`}>
              <span
                className="cursor-pointer px-2 py-1 flex justify-center items-center text-[#142834]"
                onClick={nextPage}
              >
                <span className="mr-2 md:hidden">Next</span>
                <ChevronRight />
              </span>
            </li>
          </ul>
        )}
      </section>
    </main>
  );
};

export default Reels;
