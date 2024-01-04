"use client";
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";
const PodcastView = () => {
  const navigate = useRouter();
  const param = useParams();
  const [data, setData] = useState();
  const [nextId, setNextId] = useState(null);
  const [prevId, setPrevId] = useState(null);
  const fetchPodcast = async () => {
    try {
      const response = await axios.get(`/api/podcast?id=${param.podcastid}`);
      setData(response.data.items);
      console.log(response.data);
      setNextId(response.data.next);
      setPrevId(response.data.previous);
    } catch (error) {
      console.error("Error fetching podcast data:", error);
    }
  };

  useEffect(() => {
    fetchPodcast();
  }, []);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const toggleAudio = () => {
    if (isPlaying) {
      audioRef?.current.pause();
    } else {
      audioRef?.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  useEffect(() => {
    data && audioRef?.current.addEventListener("timeupdate", handleTimeUpdate);
    data &&
      audioRef?.current.addEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
    data && audioRef?.current.addEventListener("ended", handleEnded);
    return () => {
      audioRef?.current?.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef?.current?.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
      audioRef?.current?.removeEventListener("ended", handleEnded);
    };
  }, [data]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  const handleSliderChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };
  const handleEnded = () => {
    setCurrentTime(0);
    setIsPlaying(false);
    setDuration("0:00");
  };
  return (
    
          
    <section className="flex flex-col items-start md:max-h-[100vh] w-full overflow-hidden bg-gradient-to-r from-[#e9e6d9] to-[#ceecf5]">
      {data && (
        <>
          <div className="flex justify-center items-start flex-col md:flex-row">
            <Image
              src={data && data[0]?.itunes_image.href}
              alt="podcast thumbnail"
              className="object-contain"
              width={450}
              height={450}
            />
            <div className="w-full md:w-[75%] px-4 md:px-10 py-8 md:overflow-y-scroll md:max-h-[70vh] mb-20">
              <p className="font-semibold text-2xl mb-2">
                {data && data[0]?.title}
              </p>
              <audio
                ref={audioRef}
                src={data && data[0]?.enclosures[0].url}
                controls
                hidden
              ></audio>
              <p
                dangerouslySetInnerHTML={{
                  __html: data && data[0]?.description,
                }}
              />
              <div className="w-full flex justify-between items-center justify-self-end mt-6 md:mt-10 mb-4 md:mb-0">
                {prevId && (
                  <button
                    className="flex justify-center items-center"
                    onClick={() => navigate.push(`/podcast/${prevId}`)}
                  >
                    <ChevronLeftIcon size={20} />
                    <span className="ml-1">Previous</span>
                  </button>
                )}
                {nextId && (
                  <button
                    className="flex justify-center items-center"
                    onClick={() => navigate.push(`/podcast/${nextId}`)}
                  >
                    <span className="mr-1">Next</span>
                    <ChevronRightIcon size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="bg-[#142834] w-full fixed md:absolute bottom-0 z-10 px-6 md:px-10 py-5 flex justify-between md:justify-evenly items-center select-none">
            <div
              className="text-white cursor-pointer w-[12%] md:w-[10%] flex justify-center items-center"
              onClick={toggleAudio}
            >
              {isPlaying ? <Pause size={26} /> : <Play size={26} />}
            </div>
            <div className="flex justify-center items-center w-[80%] md:w-[90%] flex-col">
              <div className="w-full flex justify-between items-center">
                <p className="text-white text-sm">
                  {formatTime(
                    audioRef.current ? audioRef.current.currentTime : 0
                  )}
                </p>
                <p className="text-white text-sm">
                  {formatTime(audioRef.current ? audioRef.current.duration : 0)}
                </p>
              </div>
              <div className="w-full my-2">
                {/* <span className="block h-1 w-full bg-white rounded-full"></span> */}
                <input
                  type="range"
                  min="0"
                  max={duration}
                  step="0.01"
                  value={currentTime}
                  onChange={handleSliderChange}
                  className="w-full text-black h-1 appearance-none accent-[#22668d]"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
    
  );
};

export default PodcastView;
