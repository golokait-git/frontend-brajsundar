"use client";
import React, { useEffect, useState } from "react";
import { coursedataFetcher } from "../../../utils/operations/CourseListApi";
import Loader from "../(components)/Loader";
import CourseCard from "../(components)/CourseCard";
import Header from "../(components)/Header";
import Wrapper from "../../Wrapper";

const Course = () => {
  const [courseData, setCourseData] = useState([]);
  const [filteredCourseData, setFilteredCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCourseData = await coursedataFetcher();
      setCourseData(fetchedCourseData.institute_courses[0].course_bundles);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredCourses = courseData.filter((courseBundle) =>
      courseBundle.bundle_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCourseData(filteredCourses);
  }, [searchQuery, courseData]);

  const handleSearch = () => {
    setFilteredCourseData(
      courseData.filter((courseBundle) =>
        courseBundle.bundle_name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    );
  };

  return (
    <Wrapper>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        title={"Course"}
      />
      <section className="text-gray-600 body-font min-h-screen w-full bg-[#f5f5f5]">
        {loading ? (
          <Loader />
        ) : filteredCourseData.length === 0 ? (
          <p className="pt-10 text-center text-xl font-medium">
            No Course Found.
          </p>
        ) : (
          <div className="mx-auto py-6 md:grid md:grid-cols-3 gap-x-5 w-full flex flex-wrap max-w-6xl">
            {filteredCourseData.map((courseBundle, index) => (
              <CourseCard
                key={courseBundle.id}
                courseData={courseBundle}
                type="courses"
              />
            ))}
          </div>
        )}
      </section>
    </Wrapper>
  );
};

export default Course;
