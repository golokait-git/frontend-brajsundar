"use client";
import React, { useEffect, useState } from "react";
import { workshopdataFetcher } from "../../../utils/operations/CourseListApi";
import Loader from "../(components)/Loader";
import CourseCard from "../(components)/CourseCard";
import Header from "../(components)/Header";
import Wrapper from "../../Wrapper";
const Workshop = () => {
  const [workshopData, setWorkshopData] = useState([]);
  const [filteredWorkshopData, setFilteredWorkshopData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedWorkshopData = await workshopdataFetcher();
      setWorkshopData(fetchedWorkshopData.institute_courses[0].course_bundles);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredWorkshopCourses = workshopData.filter((workshopBundle) =>
      workshopBundle.bundle_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredWorkshopData(filteredWorkshopCourses);
  }, [searchQuery, workshopData]);

  const handleSearch = () => {
    const filteredWorkshopCourses = workshopData.filter((workshopBundle) =>
      workshopBundle.bundle_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredWorkshopData(filteredWorkshopCourses);
  };

  return (
    <Wrapper>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        title={"Workshop"}
      />
      <section className="bg-gradient-to-r from-[#e9e6d9] to-[#ceecf5]">
        {loading ? (
          <Loader />
        ) : filteredWorkshopData.length === 0 ? (
          <p className="pt-10 text-center text-xl font-medium">
            No Workshop Found.
          </p>
        ) : (
          <div className="mx-auto py-6 md:grid md:grid-cols-3 gap-x-5 w-full flex flex-wrap max-w-6xl">
            {filteredWorkshopData.map((workshopBundle, index) => (
              <CourseCard
                key={workshopBundle.id}
                courseData={workshopBundle}
                type="workshop"
              />
            ))}
          </div>
        )}
      </section>
    </Wrapper>
  );
};

export default Workshop;
