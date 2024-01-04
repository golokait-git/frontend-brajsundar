"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Pause, Play } from "lucide-react";

const PodcastCard = (props) => {
  // click handling
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardClick = () => {
    setIsModalOpen(true);
    console.log(props.data);
  };
  // audio player handling

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleError = (error) => {
      console.error("Error while attempting to play audio:", error);
    };

    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('error', handleError);

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('error', handleError);
      };
    }
  }, []);


  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return formattedTime;
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
        // data-hs-overlay="#hs-vertically-centered-modal"
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
          <div className="justify-center items-center flex mx-auto fixed  overflow-x-hidden overflow-y-auto  inset-0 z-50">
            <div className="relative my-6 mx-auto h-[90%]">
              <button
                className="bg-transparent ml-40 mt-10"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                <img src="/assets/arrow-icon.png" className="w-7 mb-2" />
              </button>
              {/*content*/}
              <div className="border-0 rounded-bl-3xl rounded-tr-3xl shadow-lg relative flex flex-col mx-auto md:w-[30%]  bg-white ">
                {/*header*/}
                <div className="flex flex-col items-start justify-between w-[80%] mx-auto">
                  <img
                    src={`${props.data.itunes_image.href}`}
                    className="h-52 mx-auto rounded-bl-3xl rounded-tr-3xl shadow-lg shadow-[#22668d] my-8"
                  />
                  <h3 className="text-md text-justify">{props.data.title}</h3>
                </div>
                {/*body*/}
                <div className="relative flex-auto w-[80%] mx-auto">
                  {/* audio player */}
                  <div className="w-full">
                    <audio ref={audioRef} src={props.data.enclosures[0].url}></audio>
                    <div>
                      <button onClick={playPauseToggle}>
                        {isPlaying ? "Pause" : "Play"}
                      </button>
                    </div>
                    <div>
                    {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>
                  <p className="mb-6  text-xs leading-relaxed h-[50%]">
                    {props.data.description.length > 150
                      ? props.data.description.slice(3, 410) + "..."
                      : props.data.description}
                  </p>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default PodcastCard;
