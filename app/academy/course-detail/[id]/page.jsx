"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Wrapper from "../../../Wrapper";
import { LiaCertificateSolid } from "react-icons/lia";
import Loader from "../../(components)/Loader";
import Review from "../../../components/Review";
import Image from "next/image";

const CourseDetail = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const apiLink = `https://marriageacademy-api.edmingle.com/nuSource/api/v1/organization/bundles/${params.id}`;
  useEffect(() => {
    const CourseDetailHandler = async () => {
      try {
        const response = await axios.get(apiLink);
        setData(response.data);
        console.log(response.data);
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
          <section className="w-[80%] mx-auto">
            <div className=" w-full py-14 ">
              <div className="mx-auto flex max-w-[95%] z-20">
                <div className="w-full flex justify-between items-center md:items-start font-serif flex-col">
                  <p className="text-[#22668d] rounded-tr-2xl rounded-bl-2xl bg-white text-start md:text-left px-2 py-1 shadow-md shadow-[#22668d] text-2xl md:text-3xl">
                    {data.bundle.bundle_name}
                  </p>
                  <p className="text-black text-center md:text-left md:font-medium text-base md:text-md mb-4 w-full">
                    {data.bundle.bundle_description}
                  </p>
                  <ul className="list-inside list-image-[url(/assets/lang-icon.png)] text-black text-center md:text-left align-middle text-sm h-4">
                    <li className="h-4">Taught in {data.tags[1].value[0]}</li>
                  </ul>
                  {findTagValue(data.tags, 273) == "true" && (
                    <p className=" text-sm justify-start items-center text-black">
                      Instructor: Brajsundar Das
                    </p>
                  )}
                  <a
                    className={`bg-[#3c789a] select-none text-[#fff] font-bold text-md px-2 py-2 rounded-tr-2xl rounded-bl-2xl scale-100 hover:scale-105 hover:transition-all hover:duration-200 cursor-pointer course-landing-buy_${data.bundle.institution_bundle_id} z-50`}
                    data-instbundleid={data.bundle.institution_bundle_id}
                  >
                    Enroll Now at {data.bundle.currency_symbol}{" "}
                    {data.bundle.cost}
                  </a>
                </div>
                <div className="w-[80%] my-auto">
                  <Image
                    src={data.bundle.img_url}
                    className="h-full rounded-tr-3xl rounded-bl-3xl shadow-[#22668d] shadow-xl"
                    alt="Bundle Image"
                    width={600}
                    height={350}
                  />
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
                    What&apos;s this course about?
                  </p>
                  <div
                    className={`mx-auto text-black para`}
                    dangerouslySetInnerHTML={{
                      __html: data.bundle.bundle_overview.replaceAll(
                        "font-family: serif",
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
        {/* <Review/> */}
      </section>
    </Wrapper>
  );
};

export default CourseDetail;
