"use client";
import React, { useState, useEffect } from "react";
import HomeTitle from "../HomeTitle";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { apiLink } from "../../../apiLink";

const ReelsSection = () => {
  const [data, setData] = useState([]);
  const EMagazine = async () => {
    try {
      const response = await axios.get(`${apiLink}/reel`
      , {
        params: {
          page: 1,
          limit: 3,
        },
      }
      );
      setData(response.data.reels);
    } catch (error) {
      console.error("Error fetching Reels data:", error);
    }
  };
  useEffect(() => {
    EMagazine();
  }, []);
  return (
    <main className="w-full bg-gradient-to-r from-[#e9e6d9] to-[#ceecf5]">
      <section className="flex md:justify-center items-center my-10 mx-auto max-w-6xl w-full flex-col">
        <HomeTitle title="Reels" link="/reels" />
        <div className="flex flex-wrap justify-evenly items-center gap-y-4 md:gap-4 mt-6 mb-10 w-full">
          {data &&
            data.map((item) => {
              return (
                <Link key={item._id} href={item.url} target="_blank">
                  <Image
                    src={
                      item.reelpath
                        ? item.reelpath
                        : require("../../../public/assets/sample1.jpg")
                    }
                    alt={item.reelName}
                    height={700}
                    width={220}
                    className="rounded-xl h-[500px] w-[300px] object-cover cursor-pointer transition-all hover:transition-all scale-100 hover:scale-105 duration-200 hover:duration-200 hover:shadow-[#22668d40] shadow-lg"
                  />
                </Link>
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default ReelsSection;
