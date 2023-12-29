"use client";
import React, { useEffect, useState } from "react";
import HomeTitle from "../HomeTitle";
import axios from "axios";
import "../../../node_modules/video-react/dist/video-react.css";
import VideoCard from "../../videos/(component)/VideoCard";
import { apiLink } from "../../../apiLink";
const VideoSection = () => {
  const [data, setData] = useState([]);
  const VideoFetch = async () => {
    try {
      const response = await axios.get(`${apiLink}/youtube`, {
        params: {
          page: 1,
          limit: 3,
        },
      });
      setData(response.data.youtube);
    } catch (error) {
      console.error("Error fetching Video data:", error);
    }
  };
  useEffect(() => {
    VideoFetch();
  }, []);
  return (
      <main className="w-full bg-[#f5f5f5]">
          <section className="flex justify-center items-center flex-col max-w-6xl mx-auto my-10">
              <HomeTitle title="Video" link="/videos" />
              <div className="flex flex-wrap md:grid md:grid-cols-3 items-center gap-6 md:gap-4 mt-8 mb-10 w-[100%]">
                  {data &&
                      data.map((item) => {
                          return (
                              <VideoCard
                                  key={item.id}
                                  data={{
                                      title: item.title,
                                      url: item.video_url,
                                  }}
                              />
                          );
                      })}
              </div>
          </section>
      </main>
  );
};

export default VideoSection;
