"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import VideoCard from "./(component)/VideoCard";
import "../../node_modules/video-react/dist/video-react.css";
// import {
//   Player,
//   PlayToggle,
//   ControlBar,
//   LoadingSpinner,
//   BigPlayButton,
// } from "video-react";
import axios from "axios";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Search,
  X,
} from "lucide-react";
import { Oval } from "react-loader-spinner";
import { apiLink } from "../../apiLink";

const Video = () => {
  // const [activeVideo, setActiveVideo] = useState("video1");
  // const [data, setData] = useState(["video1", "video2", "video3", "video4"]);
  const [youtubeData, setYoutubeData] = useState([]);
  const [totalVideos, settotalVideos] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 9;
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [categories, setCategories] = useState([]);
  const inputRef = useRef(null);
  const VideoYoutubeFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiLink}/youtube`, {
        params: {
          page: currentPage,
          limit: videosPerPage,
        },
      });
      setLoading(false);
      // console.log("Fetched Data:", response.data);
      setYoutubeData((prevData) => [...prevData, ...response.data.youtubeVideo]);
      // console.log("Set Youtube Data:", youtubeData);
      // settotalVideos(youtubeData.length);
      console.log(response.data);
      settotalVideos(response.data.totalyoutubeVideo);
      // console.log(youtubeData.length);
    } catch (error) {
      console.error("Error fetching Youtube Video data:", error);
    }
  };

  useEffect(() => {
    VideoYoutubeFetch();
  }, [currentPage]);

  useEffect(() => {
    getCategoriesHandler();
  }, []);

  useEffect(() => {
    if (search.trim() !== "") {
      searchHandler();
    } else {
      searchResetHandler();
      simulateEnter();
    }
  }, [search]);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = searchActive
    ? (searchData || []).slice(0, indexOfLastVideo)
    : (youtubeData || []).slice(0, indexOfLastVideo);

  const getCategoriesHandler = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiLink}/youtube`);
      console.log(response?.data);
      setCategories(response.data.map((video) => video.category));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching youtube data:", error);
    }
  };

  const searchHandler = async (e) => {
    // e.preventDefault();
    if (search) {
      setSearchActive(true);
      setLoading(true);
      try {
        const response = await axios.get(`${apiLink}/youtube`,{
          params: {
            search: search,
          },
        });
        setSearchData(response.data.youtubeVideo);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching youtube data:", error);
      }
    }
  };

  const searchResetHandler = () => {
    setSearchActive(false);
    setSearch("");
  };

  // const handleVideoClick = (videoName) => {
  //   setActiveVideo(videoName);
  // };

  // const prevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const nextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  const totalPages = Math.ceil(totalVideos / videosPerPage);

  // const showPagination = totalVideos > videosPerPage;

  // useEffect(() => {
  //   if (search.length === 0) {
  //     searchResetHandler();
  //   }
  // }, [search]);

  // useEffect for search

  useEffect(() => {
    if (search.trim() !== '') {
      searchHandler();
    } else if (search.trim() === '') {
      searchResetHandler();
      
    } else {
      simulateEnter();
    };
  }, [search]);

  const resetFilterHandler = () => {
    setSelectedFilter("");
    setSearch("");
    setSearchActive(false);
  };

  const filterHandler = async () => {
    if (value.length === 0) {
      resetFilterHandler();
    } else {
      setSearchActive(true);
      setLoading(true);
      try {
        const response = await axios.get(
          `${apiLink}/youtube`
        );
        setSearchData(response.data.youtubeVideo);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching youtube data:", error);
      }
    }
  };

  // Function to handle "Read More" button click
  const loadMoreHandler = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      searchHandler();
    } else if (search.trim() === "") {
      searchResetHandler();
    } else {
      simulateEnter();
    }
  };

  // simulateEnter function
  const simulateEnter = () => {
    const event = new KeyboardEvent("keydown", {
      key: "Enter",
      code: "Enter",
      which: 13,
      keyCode: 13,
      bubbles: true,
    });
    if (inputRef.current) {
      inputRef.current.dispatchEvent(event);
    }
  };

  if (!loading) {
    console.log("Rendering videos");
  }
  console.log("Youtube Data Length:", youtubeData ? youtubeData.length : 0);
  return (
    <main className="w-full bg-gradient-to-r from-[#e9e6d9] to-[#ceecf5]">
      <section className="max-w-6xl mx-auto min-h-[100vh]">
        <div className="w-full">
          <div className="flex md:flex-row-reverse flex-col justify-between items-center md:mb-12 w-[80%] mx-auto md:w-[80%] md:mx-auto ">
            <div className="md:w-[40%]">
              <Image src="/assets/videos-bg.png" width={440} height={380} />
            </div>
            <div className=" bg-[url('/assets/bg-line.png')] bg-contain bg-no-repeat bg-center md:w-[60%] py-[20%]">
              <div className="md:h-[35%] md:px-[37%] md:w-full w-[20%] mx-auto ">
                <h1 className="text-xl  md:text-4xl text-center text-[#22668d] px-2 rounded-bl-2xl rounded-tr-2xl shadow-lg shadow-[#22668d] bg-white">
                  Videos
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full md:w-[90%] md:mx-auto md:flex-row-reverse flex-col">
            <div className="flex justify-center relative items-center border-2 border-[#22668d] rounded-md w-[90%] md:w-[20%]">
              <select
                id="select"
                value={selectedFilter}
                onChange={(e) => {
                  setSelectedFilter(e.target.value);
                  filterHandler(e.target.value);
                }}
                className="text-[#000] outline-none focus:outline-none h-10 px-2 rounded-md w-full appearance-none"
              >
                <option value="" selected>
                  Select Filters
                </option>
                {categories &&
                  categories.map((item) => {
                    return (
                      <option key={item.category} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
              {selectedFilter !== "" && (
                <button
                  onClick={resetFilterHandler}
                  className="bg-[#22668d] px-3 py-2"
                >
                  <X color="white" />
                </button>
              )}
              {selectedFilter === "" && (
                <label className="text-[#22668d] px-3 py-2 absolute   right-0">
                  <ChevronDown color="#22668d" />
                </label>
              )}
            </div>
            {/* new search */}
            <div className=" w-[90%] md:w-[5%]">
              <form
                action=""
                className="relative mx-auto w-max"
                onSubmit={handleSubmit}
              >
                <input
                  type="search"
                  name="search"
                  id="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  ref={inputRef}
                  placeholder="Search Podcast"
                  className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border-slate-500 border focus:bg-white bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-[#22668d] focus:pl-16 focus:pr-4"
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-y-0 my-auto h-12 w-full border-2 border-white rounded-full pr-3 bg-[#22668d] focus:stroke-[#22668d] stroke-white px-3.5 peer-focus:border-[#22668d] peer-focus:stroke-[#22668d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  onClick={searchHandler}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </form>
            </div>
            {/* new search */}
          </div>
        </div>
        {/* <div className="md:w-[85%] mx-auto">
        <Player autoPlay src={videoPaths[activeVideo]}>
          <LoadingSpinner />
        </Player>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 place-items-center items-center md:gap-x-8 mt-6 md:mb-10 w-full mx-auto">
          {!loading &&
            data.map((item) => {
              return (
                <div
                  key={item}
                  className={`w-[90%] mx-auto h-auto rounded-lg relative flex justify-center items-center ${
                    activeVideo === item ? "filter-none" : "filter-blur"
                  }`}
                  onClick={() => handleVideoClick(item)}
                >
                  <div
                    onClick={() => handleVideoClick(item)}
                    className={`h-full w-full bg-black/10 ${
                      activeVideo !== item && "backdrop-blur-sm"
                    } hover:backdrop-blur-0 hover:bg-transparent absolute z-40 cursor-pointer transition-all hover:transition-all duration-200 hover:duration-200 flex justify-center items-center`}
                  ></div>
                  <Player src={videoPaths[item]} className="rounded-lg">
                    <BigPlayButton position="bottom" />
                  </Player>
                </div>
              );
            })}
        </div>
      </div> */}
        {!loading &&
          // youtubeData &&
          // youtubeData.length !== 0 &&
          !searchActive && (
            <>
            <div className="flex flex-wrap md:grid md:grid-cols-3 place-items-center items-center md:gap-y-10 gap-y-8 pb-14 w-full mx-auto px-6 py-10 md:p-14">
              {youtubeData.map((item) => (
                <VideoCard
                  key={item._id}
                  data={{
                    title: item.video_name,
                    url: item.video_url,
                  }}
                />
              ))}
            </div>
            {currentVideos.length < totalVideos && (
              <div className="flex justify-center mb-20">
                <button
                  className="bg-[#22668d] text-white font-serif px-4 text-xl md:text-lg rounded-bl-2xl rounded-tr-2xl scale-100 hover:scale-105 hover:transition-all hover:duration-200"
                  onClick={loadMoreHandler}
                >
                  Load More
                </button>
              </div>
            )}
            </>
          )}

        {/* {!loading && console.log("Rendering videos")}
        {console.log("youtubeData:", youtubeData)}
        {console.log("searchActive:", searchActive)} */}
        {!searchActive && (!youtubeData || youtubeData.length === 0) && (
          <p className="text-center my-10">No Videos Found!</p>
        )}
        {!searchActive && (!youtubeData || youtubeData.length === 0) && (
          <p className="text-center my-10">No Videos Available Now!</p>
        )}
        {/* {!loading && !searchActive && (
          <>
            <div className="md:grid md:grid-cols-3 flex flex-wrap gap-6 md:gap-24 md:mx-0 mb-12 mx-6">
              {(searchActive ? searchData : youtubeData)?.map((youtube) => (
                <VideoCard
                  key={youtube._id}
                  data={{
                    title: youtube.video_name,
                    url: youtube.video_url,
                  }}
                />
              ))}
            </div> */}
            {/* {!loading && !searchActive && showPagination && (
             <ul className="flex justify-center items-center mb-6">
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
        )} */}
{/*             
          </>
        )} */}
        {!loading && searchActive && (
          <>
            <div className="flex flex-wrap md:grid md:grid-cols-3 place-items-center items-center md:gap-y-10 gap-y-8 pb-14 w-full mx-auto px-6 py-10 md:p-14">
              {searchData &&
                searchData.map((youtube) => {
                  return (
                    <VideoCard
                      key={youtube._id}
                      data={{
                        title: youtube.video_name,
                        url: youtube.video_url,
                      }}
                    />
                  );
                })}
            </div>
          </>
        )}
        {loading && (
          <div className="flex justify-center items-center">
            <Oval
              height={30}
              width={30}
              color="#fff"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#fff"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        )}
      </section>
    </main>
  );
};

export default Video;
