"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Wrapper from "../../../Wrapper";
import { LiaCertificateSolid } from "react-icons/lia";
import Loader from "../../(components)/Loader";

const CourseDetail = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const apiLink = `https://marriageacademy-api.edmingle.com/nuSource/api/v1/organization/bundles/${params.id}`;
  useEffect(() => {
    const CourseDetailHandler = async () => {
      try {
        const response = await axios.get(apiLink);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    CourseDetailHandler();
  }, [apiLink]);

  const languageTagID = 51;
  const durationTagID = 36;
  const videoTagID = 37;
  const noOfSessionTagID = 38;
  const sessionPerWeekTagID = 39;
  const eligibilityId = 52;

  const findTagValue = (arrayOfTags, tagId) => {
    if (arrayOfTags) {
      let tag = arrayOfTags.filter((eachTag) => eachTag.id == tagId);
      if (tag.length > 0) {
        let value = tag[0].value[0];
        return value;
      } else {
        return "N/A";
      }
    }
  };

  const allInfo = [
    {
      title: "Course Duration",
      subtitle: findTagValue(data.tags, durationTagID),
    },
    {
      title: "Videos",
      subtitle: findTagValue(data.tags, videoTagID),
    },
    {
      title: "No. Of Sessions",
      subtitle: findTagValue(data.tags, noOfSessionTagID),
    },
    {
      title: "Sessions per week",
      subtitle: findTagValue(data.tags, sessionPerWeekTagID),
    },
    {
      title: "Language",
      subtitle: findTagValue(data.tags, languageTagID),
    },
    {
      title: "Eligibility",
      subtitle: findTagValue(data.tags, eligibilityId),
    },
  ];

  return (
    <Wrapper>
      <section>
        {data?.bundle && (
          <section className="w-full">
            <div className="bg-cover bg-center w-full py-14 bgImage bg-details-bg">
              <div className="mx-auto max-w-6xl z-20">
                <div className="w-full flex justify-center items-center flex-col md:items-start">
                  <p className="text-white text-center md:text-left font-semibold md:font-bold text-2xl md:text-4xl mb-4 w-full">
                    {data.bundle.bundle_name}
                  </p>
                  <p className="text-white text-center md:text-left md:font-medium text-base md:text-xl mb-4 w-full">
                    {data.bundle.bundle_description}
                  </p>
                  <p className="text-white text-center md:text-left font-medium md:font-semibold text-lg md:text-2xl mb-5 w-full">
                    {data.bundle.currency_symbol} {data.bundle.cost}
                  </p>
                  {findTagValue(data.tags, 273) == "true" && (
                    <p className="flex text-sm justify-start items-center from-yellow-600 to-yellow-500 shadow-md shadow-yellow-500/30 bg-gradient-to-tr px-3 py-1 rounded-full text-black mb-5">
                      <LiaCertificateSolid className="text-xl mr-1" />
                      Certificate Course
                    </p>
                  )}
                  <a
                    className={`bg-[#3c789a]  shadow-[#3c789a30] select-none shadow-md text-[#fff] font-medium text-lg px-8 py-2 rounded-md cursor-pointer course-landing-buy_${data.bundle.institution_bundle_id} z-50`}
                    data-instbundleid={data.bundle.institution_bundle_id}
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-start py-7 w-[90%] mx-auto">
              {allInfo.map((tag, index) => {
                if (tag.subtitle !== "N/A") {
                  return (
                    <div className="px-6" key={index}>
                      <h3 className="w-max text-center">
                        <p className="text-xl font-semibold">{tag.title}</p>
                        <p className="mt-1">{tag.subtitle}</p>
                      </h3>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            {data.bundle.bundle_overview && (
              <div className="py-10 w-full">
                <div className="max-w-6xl mx-auto w-[90%] md:w-full">
                  <p className="font-bold mx-auto text-2xl md:text-3xl mb-6">
                    Course Overview
                  </p>
                  <div
                    className={`mx-auto text-black para`}
                    dangerouslySetInnerHTML={{
                      __html: data.bundle.bundle_overview.replaceAll(
                        "font-family: Arial",
                        ""
                      ),
                    }}
                  ></div>
                </div>
              </div>
            )}
          </section>
        )}
        {!data.bundle && (
          <div className="flex justify-center items-center h-[80vh]">
            <Loader />
          </div>
        )}
      </section>
    </Wrapper>
  );
};

export default CourseDetail;
