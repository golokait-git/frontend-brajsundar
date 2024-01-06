"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Pause, Play } from "lucide-react";

const PodcastCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  // click handling
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardClick = () => {
    setIsModalOpen(true);
    console.log(props.data);
  };
  // audio player handling

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.error("Error while attempting to play audio:", error);
      });
    }

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const itunesDuration = props.data.itunes_duration;

    if (itunesDuration) {
      setDuration(itunesDuration);
    }
  };

  const itunesDuration = props.data.itunes_duration;

  const handleEnded = () => {
    setCurrentTime(0);
    setIsPlaying(false);
    setDuration(0);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
    return formattedTime;
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("ended", handleEnded);

      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  const handleSliderChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;

    if (!audioRef.current.paused) {
      audioRef.current.play().catch((error) => {
        console.error("Error while attempting to play audio:", error);
      });
    }
  };

  const playPauseToggle = () => {
    const audio = audioRef.current;

    if (audio.paused || audio.ended) {
      audio.play().catch((error) => {
        console.error("Error while attempting to play audio:", error);
      });
    } else {
      audio.pause();
    }

    setIsPlaying(!audio.paused);
  };

  // const skipBackward = () => {
  //   audioRef.current.currentTime -= 30;
  // };

  // const skipForward = () => {
  //   audioRef.current.currentTime += 30;
  // };

  let newData = new Date(props?.data?.published).toLocaleString();
  return (
    <>
      <button
        className={`overflow-hidden flex flex-col justify-between bg-white shadow-lg border border-[#22668d] rounded-bl-3xl rounded-tr-3xl cursor-pointer scale-100 hover:scale-105 transition-all hover:transition-all duration-200 mx-auto hover:duration-200 shadow-[#22668d] hover:shadow-[#22668d] hover:shadow-xl ${
          props?.type === "home" ? "w-[95%]" : "w-full"
        }`}
        onClick={handleCardClick}
        type="button"
      >
        <div className=" p-2">
          <Image
            src={props?.data?.itunes_image.href}
            height={240}
            alt="podcast preview"
            width={300}
            className="w-full object-contain rounded-bl-3xl rounded-tr-3xl border border-black"
          />
        </div>
        <div className="py-2 px-2 w-full md:h-[30%] flex flex-col justify-between">
          <p className="text-sm mt-2 px-2 pb-2 top-0 text-justify">
            {props?.data?.title}
          </p>
          <p className="mt-2 mb-1 bottom-0 text-right text-[#22668d] text-xs px-2">
            {" "}
            {newData}
          </p>
        </div>
      </button>

      {/* Modal */}

      {isModalOpen ? (
        <>
          <div className="justify-center items-center flex  h-full fixed overflow-x-hidden overflow-y-auto inset-0 z-50 md:bg-[url('/assets/popup-bg.png')] md:bg-contain md:bg-no-repeat md:bg-center">
            <div className="flex flex-row justify-around md:w-[37%] w-full -mt-12">
              <button
                className="bg-transparent md:mr-5 w-7 top-0 h-7"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                <img src="/assets/arrow-icon.png" className="w-7 h-7"/>
              </button>
              <div className=" rounded-bl-3xl rounded-tr-3xl shadow-lg shadow-black md:w-[70%] w-[90%]  bg-white">
                <div className=" w-[80%] mx-auto flex flex-col justify-evenly">
                  <img
                    src={`${props.data.itunes_image.href}`}
                    className="w-[40%] mx-auto justify-self-auto rounded-bl-3xl rounded-tr-3xl shadow-lg shadow-[#22668d] mt-4"
                  />
                  <h3 className="text-sm text-justify my-2">
                    {props.data.title}
                  </h3>
                  <div className="w-full h-10 mb-2">
                    <audio
                      ref={audioRef}
                      src={props.data.enclosures[0].url}
                    ></audio>
                    <div className="flex items-center justify-between h-5">
                      <div className="w-11 text-xs text-center bottom-0">
                        {formatTime(currentTime)}
                      </div>
                      <button
                        onClick={playPauseToggle}
                        className="text-[#22668d] cursor-pointer"
                      >
                        {isPlaying ? <Pause /> : <Play />}
                      </button>
                      <div className="text-xs text-center bottom-0">
                        {formatTime(itunesDuration)}
                      </div>
                    </div>
                    <div className="w-full h-0">
                      <input
                        type="range"
                        min="0"
                        max={itunesDuration}
                        step="0.01"
                        value={currentTime}
                        onChange={handleSliderChange}
                        className="w-full text-black h-1 bg-[#22668d8d] appearance-none accent-[#22668d]"
                      />
                    </div>
                  </div>
                  <div className="mb-4 text-xs text-justify">
                    {!expanded ? (
                      <div>
                      {props.data.description.length > 300
                        ? props.data.description.slice(3, 300) + "..."
                        : props.data.description}
                      <span className="text-[#22668d] cursor-pointer" onClick={() => setExpanded(!expanded)} >
                        <b>Read More</b>
                      </span>
                      </div>
                    ):null}
                    {expanded ? (
                      <div onClick={() => setExpanded(false)}>
                      {props.data.description.length > 700
                        ? props.data.description.slice(3, 700) + "..."
                        : props.data.description}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black"> </div>
        </>
      ) : null}
    </>
  );
};

export default PodcastCard;
