"use client";
import HomeTitle from "../../HomeTitle";
import React, { useEffect, useState } from "react";
import PodcastCard from "./PodcastCard";
import axios from "axios";

const PodcastSection = () => {
  const [data, setData] = useState([]);
  const fetchPodcasts = async () => {
    try {
      const response = await axios.get(`api/podcast`, {
        params: {
          page: 1,
          limit: 3,
        },
      });
      setData(response.data.items);
    } catch (error) {
      console.error("Error fetching podcast data:", error);
    }
  };

  useEffect(() => {
    fetchPodcasts();
  }, []);

  return (
    <main className="w-full md:h-full bg-gradient-to-r from-[#f4e9d9] to-[#ffffff]">
      <section className="flex md:justify-center items-center my-10 mx-auto max-w-6xl w-full flex-col">
        <HomeTitle title="Podcast" link="/podcast" />
        <div className="flex flex-wrap md:grid md:grid-cols-3 gap-5 mb-10 w-[90%] md:w-[100%]">
          {data &&
            data.map((podcast) => {
              return (
                <PodcastCard key={podcast.id} data={podcast} type={"home"} />
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default PodcastSection;
