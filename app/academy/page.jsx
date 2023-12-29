"use client";
import React, { useEffect, useState } from "react";
import {
  coachingdataFetcher,
  coursedataFetcher,
  workshopdataFetcher,
} from "../../utils/operations/CourseListApi";
import CourseCard from "./(components)/CourseCard";
import CourseSectionTitle from "./CourseSectionTitle";
import { Oval } from "react-loader-spinner";
import doodleBackground from "../../public/assets/doodle_bg.png";
import Wrapper from "../Wrapper";
const CourseList = () => {
  const [courseData, setCourseData] = useState([]);
  const [workshopData, setWorkshopData] = useState([]);
  const [coachingData, setCoachingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const courseData = await coursedataFetcher();
      setCourseData(courseData.institute_courses[0].course_bundles.slice(0, 3));
      setLoading(false);
      const workshopData = await workshopdataFetcher();
      setWorkshopData(
        workshopData.institute_courses[0].course_bundles.slice(0, 3)
      );
      setLoading(false);

      const coachingData = await coachingdataFetcher();
      setCoachingData(
        coachingData.institute_courses[0].course_bundles.slice(0, 3)
      );
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <section
        className={`bg-doodle bg-opacity-50`}
        style={{
          backgroundImage: `url(${doodleBackground})`,
          width: "100%",
        }}
      >
        {courseData && workshopData && coachingData && (
          <div className="mx-auto flex flex-col items-center justify-between w-[100%] max-w-6xl">
            <section className="text-gray-600 body-font overflow-hidden w-full">
              <div className="py-12 w-full min-h-[80vh]">
                {courseData.length === 0 &&
                  workshopData.length === 0 &&
                  coachingData.length === 0 && (
                    <div className="w-full h-full flex justify-center items-center">
                      <Oval
                        height={40}
                        width={40}
                        color="#181818"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#181818"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                      />
                    </div>
                  )}
                {courseData.length > 0 && (
                  <>
                    <CourseSectionTitle title={"Courses"} load={loading} />
                    <div className="mx-auto py-6 md:grid md:grid-cols-3 gap-x-5 w-full flex flex-wrap">
                      {courseData.map((courseBundle) => (
                        <CourseCard
                          key={courseBundle.id}
                          courseData={courseBundle}
                          type="courses"
                        />
                      ))}
                    </div>
                  </>
                )}
                {workshopData.length > 0 && (
                  <>
                    <CourseSectionTitle title={"Workshop"} load={loading} />
                    <div className="mx-auto py-6 md:grid md:grid-cols-3 gap-x-5 w-full flex flex-wrap">
                      {workshopData.map((courseBundle) => (
                        <CourseCard
                          key={courseBundle.id}
                          courseData={courseBundle}
                          type="workshop"
                        />
                      ))}
                    </div>
                  </>
                )}
                {coachingData.length > 0 && (
                  <>
                    <CourseSectionTitle title={"Coaching"} load={loading} />
                    <div className="mx-auto py-6 md:grid md:grid-cols-3 gap-x-5 w-full flex flex-wrap">
                      {coachingData.map((courseBundle) => (
                        <CourseCard
                          key={courseBundle.id}
                          courseData={courseBundle}
                          type="coaching"
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </section>
          </div>
        )}
      </section>
    </Wrapper>
  );
};

export default CourseList;
