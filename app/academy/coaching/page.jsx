"use client";
import React, { useEffect, useState } from "react";
import { coachingdataFetcher } from "../../../utils/operations/CourseListApi";
import Loader from "../(components)/Loader";
import CourseCard from "../(components)/CourseCard";
import Header from "../(components)/Header";
import Wrapper from "../../Wrapper";
const Coaching = () => {
  const [coachingData, setCoachingData] = useState([]);
  const [filteredCoachingData, setFilteredCoachingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCoachingData = await coachingdataFetcher();
      setCoachingData(fetchedCoachingData.institute_courses[0].course_bundles);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredCoachingCourses = coachingData.filter((coachingBundle) =>
      coachingBundle.bundle_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredCoachingData(filteredCoachingCourses);
  }, [searchQuery, coachingData]);

  const handleSearch = () => {
    const filteredCoachingCourses = coachingData.filter((coachingBundle) =>
      coachingBundle.bundle_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredCoachingData(filteredCoachingCourses);
  };

  return (
    <Wrapper>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        title={"Coaching"}
      />
      <section className="text-gray-600 body-font min-h-screen w-full bg-[#f5f5f5]">
        {loading ? (
          <Loader />
        ) : filteredCoachingData.length === 0 ? (
          <p className="pt-10 text-center text-xl font-medium">
            No Coaching Found.
          </p>
        ) : (
          <div className="mx-auto py-6 md:grid md:grid-cols-3 gap-x-5 w-full flex flex-wrap max-w-6xl">
            {filteredCoachingData.map((courseBundle, index) => (
              <CourseCard
                key={courseBundle.id}
                courseData={courseBundle}
                type="coaching"
              />
            ))}
          </div>
        )}
      </section>
    </Wrapper>
  );
};

export default Coaching;
