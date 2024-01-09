"use client";
import React, { useEffect, useState } from "react";
import EmagazineCard from "./EmagazineCard";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
} from "lucide-react";

const EMagazine = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const emagazinePerPage = 12;
  const [totalEmazine, settotalEmazine] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

  const fetchEMagazine = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://admin.brajsundar.com/api/admin/emagazinesub`,
        // `http://localhost:3007/api/admin/emagazinesub`,
        {
          params: {
            page: currentPage,
            limit: emagazinePerPage,
          },
        }
      );
      setData(response.data.podcast);
      settotalEmazine(response.data.totalPodcast);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Article data:", error);
    }
  };
  // useEffect(() => {
  //   fetchEMagazine();
  // }, [currentPage]);
  useEffect(() => {
    const fetchAndSetEMagazine = async () => {
      await fetchEMagazine();
    };
  
    fetchAndSetEMagazine();
  }, [currentPage, fetchEMagazine]);

  const totalPages = Math.ceil(totalEmazine / emagazinePerPage);

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

  const showPagination = totalEmazine > emagazinePerPage;

  useEffect(() => {
    if (search.length === 0) {
      searchResetHandler();
    }
  }, [search]);

  const searchHandler = async (e) => {
    e.preventDefault();
    if (search) {
      setSearchActive(true);
      setLoading(true);
      try {
        const response = await axios.get(
          // `http://localhost:3007/api/admin/emagazinesub?search=${search}`
          `https://admin.brajsundar.com/api/admin/emagazinesub?search=${search}`
        );
        setSearchData(response.data.podcast);
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
  };

  return (
    <section className="w-full min-h-[100vh]">
      <div className="w-full">
        <p className="text-4xl text-[#22668d] font-semibold text-center mt-10 md:mt-24 mb-10">
          E Magazine
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
              placeholder="Search E Magazine"
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
        </div>
      </div>
      {!searchActive && (
        <div className="grid md:grid-cols-3 gap-14 w-[85%] md:w-[78%] mx-auto mb-12 mt-10">
          {!loading &&
            data &&
            data.map((item) => {
              return (
                <EmagazineCard
                  key={item.id}
                  data={{
                    title: item.title,
                    date: item.create_date,
                    image: item.emagazine_name,
                    link: item.pdf,
                  }}
                />
              );
            })}
        </div>
      )}
      {searchActive && (
        <div className="grid md:grid-cols-3 gap-14 w-[85%] md:w-[78%] mx-auto mb-12 mt-10">
          {!loading &&
            searchData &&
            searchData.map((item) => {
              return (
                <EmagazineCard
                  key={item.id}
                  data={{
                    title: item.title,
                    date: item.create_date,
                    image: item.emagazine_name,
                    link: item.pdf,
                  }}
                />
              );
            })}
        </div>
      )}
      {!loading && data && data?.length === 0 && (
        <p className="text-center my-10">No EMagazine Available Now!</p>
      )}
      {!loading && searchActive && searchData.length === 0 && (
        <p className="text-center my-10">No EMagazine Found!</p>
      )}
      {!loading && showPagination && !searchActive && (
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
  );
};

export default EMagazine;
