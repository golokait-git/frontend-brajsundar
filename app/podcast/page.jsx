"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import PodcastCard from "../components/HomePage/Podcast/PodcastCard";
import Image from "next/image";
import {
  ChevronDown,
  ChevronDownSquare,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
} from "lucide-react";
import { Oval } from "react-loader-spinner";
import { apiLink } from "../../apiLink";

const Podcast = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [totalPodcasts, setTotalPodcasts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const podcastPerPage = 9;
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [allPodcast, setAllPodcast] = useState();
  const [allCategory, setAllCategory] = useState();
  const [dictinctCategory, setAllDictinctCategory] = useState();
  const inputRef = useRef(null);
  useEffect(() => {
    const fetchPodcasts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`api/podcast`, {
          params: {
            page: currentPage,
            limit: podcastPerPage,
          },
        });
        setPodcasts((prevPodcasts) => [
          ...prevPodcasts,
          ...response.data.items,
        ]);
        {
          /*changed the logic*/
        }
        setTotalPodcasts(response.data.total);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching podcast data:", error);
      }
    };
    fetchPodcasts();
  }, [currentPage]);

  const indexOfLastPodcast = currentPage * podcastPerPage;
  const indexOfFirstPodcast = indexOfLastPodcast - podcastPerPage;
  const currentPodcasts = searchActive
    ? searchData
    : podcasts.slice(0, indexOfLastPodcast);
  const totalPages = Math.ceil(
    (searchActive ? searchData.length : totalPodcasts) / podcastPerPage
  );

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

  // const showPagination = totalPodcasts > podcastPerPage;

  const searchHandler = async (e) => {
    // e.preventDefault();
    if (search) {
      setSearchActive(true);
      setLoading(true);
      try {
        const response = await axios.get(`api/podcast`, {
          params: {
            q: search,
          },
        });
        setSearchData(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching podcast data:", error);
      }
    }
  };

  const searchResetHandler = () => {
    setSearchActive(false);
    setSearch("");
  };

  const resetFilterHandler = () => {
    setSelectedFilter("");
    setSearch("");
    setSearchActive(false);
  };

  useEffect(() => {
    getAllCategoryData();
  }, []);

  const getAllCategoryData = async () => {
    try {
      const podcastResponse = await axios.get(`api/podcast`);
      const allPodcasts = podcastResponse.data.items;
      setAllPodcast(allPodcasts);

      const adminPodcastResponse = await axios.get(`${apiLink}/podcast`);
      const adminPodcasts = adminPodcastResponse.data.podcast;

      const distinctCategories = [];
      const categorizedPodcasts = allPodcasts.map((podcast) => {
        const matchingCategory = adminPodcasts.find(
          (item) => item.podcast_id === podcast.id
        );
        if (matchingCategory) {
          distinctCategories.push(matchingCategory.category);
          return {
            ...podcast,
            category: matchingCategory.category,
          };
        }
        return podcast;
      });
      setAllCategory(categorizedPodcasts);
      setAllDictinctCategory([...new Set(distinctCategories)]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterHandler = async (value) => {
    if (value) {
      setSelectedFilter(value);
      setSearchActive(true);
      setLoading(true);
      try {
        const filteredPodcasts = allCategory.filter(
          (podcast) => podcast.category === value
        );
        setSearchData(filteredPodcasts);
        setLoading(false);
      } catch (error) {
        console.error("Error filtering podcast data:", error);
      }
    }
  };

  // Function to handle "Read More" button click
  const loadMoreHandler = () => {
    setCurrentPage(currentPage + 1);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== '') {
      searchHandler();
    } else {
      searchResetHandler();
    }
  };

  
  return (
    <main className="w-full bg-gradient-to-r from-[#e9e6d9] to-[#ceecf5]">
      <section className="max-w-6xl mx-auto mt-10 min-h-[100vh]">
        <div className="w-full font-serif">
          <div className="flex justify-between items-center md:mb-12 w-[80%] mx-auto md:w-[90%] md:mx-auto bg-[url('/assets/bg-line.png')] bg-contain bg-no-repeat bg-center">
            <div className="mx-auto">
              <div className="w-full rounded-bl-2xl rounded-tr-2xl shadow-lg shadow-[#22668d] bg-white">
                <h1 className="text-3xl md:text-5xl text-center text-[#22668d] m-3">
                  Podcasts
                </h1>
              </div>
            </div>
            <div>
              <Image src="/assets/podcast.png" width={440} height={380} />
            </div>
          </div>
          <div className="flex justify-between items-center my-5 md:mb-12 w-full md:w-[90%] md:mx-auto md:flex-row-reverse flex-col">
            {/* <form
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
                placeholder="Search Podcast"
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
            </form> */}
            <div className="flex justify-center relative items-center border-2 border-[#22668d] rounded-md w-[90%] md:w-[20%] mb-8 md:mb-0">
              <select
                id="select"
                value={selectedFilter}
                onChange={(e) => filterHandler(e.target.value)}
                className="text-[#000] outline-none focus:outline-none h-10 px-2 rounded-md w-full appearance-none"
              >
                <option value="" selected>
                  Select Filters
                </option>
                {dictinctCategory &&
                  dictinctCategory.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
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
                <label className="text-[#22668d] px-3 py-2 absolute right-0">
                  <ChevronDown color="#22668d" />
                </label>
              )}
            </div>
            {/* new search */}
            <div class=" w-[90%] md:w-[5%]">
              <form action="" class="relative mx-auto w-max" onSubmit={handleSubmit}>
                <input
                  type="search"
                  name="search"
                  id="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  
                  placeholder="Search Podcast"
                  class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border-slate-500 border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-[#22668d] focus:pl-16 focus:pr-4"
                />
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500  px-3.5 peer-focus:border-[#22668d] peer-focus:stroke-[#22668d]"
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
        {!loading && searchActive && searchData.length === 0 && (
          <p className="text-center">No Podcast Found!</p>
        )}
        {!loading && !searchActive && (
          <>
            <div className="md:grid md:grid-cols-3 flex flex-wrap gap-6 md:gap-24 md:mx-0 mb-12 mx-6 ">
              {currentPodcasts &&
                currentPodcasts.map((podcast) => {
                  return <PodcastCard key={podcast.id} data={podcast} />;
                })}
            </div>
            {/* {showPagination && (
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
                <li
                  className={`${currentPage === totalPages ? "disabled" : ""}`}
                >
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
            {currentPodcasts.length < totalPodcasts && (
              <div className="flex justify-center mb-20">
                <button
                  className="bg-[#22668d] text-white font-serif px-4 text-xl md:text-lg rounded-bl-2xl rounded-tr-2xl scale-100 hover:scale-105 hover:transition-all hover:duration-200"
                  onClick={loadMoreHandler}
                >
                  Read More
                </button>
              </div>
            )}
          </>
        )}
        {!loading && searchActive && (
          <>
            <div className="md:grid md:grid-cols-3 flex flex-wrap gap-8 md:gap-24 mx-8 md:mx-10 mb-12">
              {searchData &&
                searchData.map((podcast) => {
                  return <PodcastCard key={podcast.id} data={podcast} />;
                })}
            </div>
          </>
        )}
        {loading && (
          <div className="flex justify-center items-center">
            <Oval
              height={30}
              width={30}
              color="#142834"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#142834"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        )}
      </section>
    </main>
  );
};

export default Podcast;
