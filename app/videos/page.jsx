"use client";
import React, { useState, useEffect } from "react";
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
  const videosPerPage = 21;
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [categories, setCategories] = useState([]);
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
      setYoutubeData(response.data.youtube);
      settotalVideos(response.data.totalYoutube);
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

  const getCategoriesHandler = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiLink}/youtube?type=categories`);
      setCategories(response.data.categories);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching youtube data:", error);
    }
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    if (search) {
      setSearchActive(true);
      setLoading(true);
      try {
        const response = await axios.get(`${apiLink}/youtube?search=${search}`);
        setSearchData(response.data.youtube);
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

  const totalPages = Math.ceil(totalVideos / videosPerPage);

  const showPagination = totalVideos > videosPerPage;

  useEffect(() => {
    if (search.length === 0) {
      searchResetHandler();
    }
  }, [search]);

  const resetFilterHandler = () => {
    setSelectedFilter("");
    setSearch("");
    setSearchActive(false);
  };

  const filterHandler = async (value) => {
    if (value.length === 0) {
      resetFilterHandler();
    } else {
      setSearchActive(true);
      setLoading(true);
      try {
        const response = await axios.get(
          `${apiLink}/youtube?type=findcategory&category=${value}`
        );
        setSearchData(response.data.youtube);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching youtube data:", error);
      }
    }
  };

  return (
    <main className="w-full">
      <section className="max-w-6xl mx-auto min-h-[100vh]">
        <div className="w-full">
          <p className="text-4xl text-[#22668d] font-semibold text-center my-10">
            Videos
          </p>
          <div className="flex justify-between items-center w-full md:w-[90%] md:mx-auto md:flex-row-reverse flex-col">
            <form
              className="flex justify-center items-center border-2 w-[90%] md:w-[30%] border-[#22668d] rounded-md md:mb-0 mb-4"
              onSubmit={searchHandler}
            >
              <input
                type="text"
                name="search"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-2 py-1 h-10 outline-none w-full rounded-md"
                placeholder="Search Videos"
              />
              {searchActive ? (
                <button
                  className="bg-[#22668d] px-3 py-2"
                  onClick={searchResetHandler}
                >
                  <X color="white" />
                </button>
              ) : (
                <button
                  className="bg-[#22668d] px-3 py-2"
                  onClick={searchHandler}
                >
                  <Search color="white" />
                </button>
              )}
            </form>
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
                      <option key={item} value={item}>
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
        {!loading && youtubeData.length !== 0 && !searchActive && (
          <div className="flex flex-wrap md:grid md:grid-cols-3 place-items-center items-center md:gap-y-10 gap-y-8 pb-14 w-full mx-auto px-6 py-10 md:p-14">
            {youtubeData.map((item) => {
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
        )}
        {!loading && youtubeData.length === 0 && (
          <p className="text-center my-10">No Videos Available Now!</p>
        )}
        {!loading && searchActive && searchData.length === 0 && (
          <p className="text-center my-10">No Videos Found!</p>
        )}
        {!loading && !searchActive && showPagination && (
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
        )}
        {!loading && searchActive && (
          <>
            <div className="flex flex-wrap md:grid md:grid-cols-3 place-items-center items-center md:gap-y-10 gap-y-8 pb-14 w-full mx-auto px-6 py-10 md:p-14">
              {searchData &&
                searchData.map((youtube) => {
                  return (
                    <VideoCard
                      key={youtube.id}
                      data={{
                        title: youtube.title,
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
