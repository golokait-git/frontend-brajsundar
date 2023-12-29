import React from "react";
import CourseCards from "./CourseCards";
import courseimg from "../../../../public/assets/course.png";
import workshopimg from "../../../../public/assets/workshop.png";
import coachingimg from "../../../../public/assets/coaching.png";
import Image from "next/image";
import HomeTitle from "../../HomeTitle";

const CourseSection = () => {
    const courseData = [
        {
            id: 1,
            heading: "Courses",
            title: "Color-Game",
            desc: "Revitalize your marriage by embodying the husband your wife needs. Explore the power of a wife's role, contributing to a loving partnership. Fulfill unique needs for a thriving, fulfilling marital journey.",
            link: "/academy/courses",
            img: courseimg,
        },
        {
            id: 2,
            heading: "Workshop",
            title: "Tower Building",
            desc: "Marriage Tuneup: Revitalize and strengthen your marriage with practical tools and expert insights. 'From Me to We - Preparing for Marriage': Prepare for a lifelong journey of love.",
            link: "/academy/workshop",
            img: workshopimg,
        },
        {
            id: 3,
            heading: "Coaching",
            title: "Tic Tac Toe",
            desc: "Making Marriage Success: Discover secrets to a happy marriage. Couples Enrichment Session: Enhance your bond. Personalized Marriage Guidance: Unlock your marriage's potential.",
            link: "/academy/coaching",
            img: coachingimg,
        },
    ];

    return (
        <main className="w-full">
            <section className="flex md:justify-center items-center my-10 mx-auto max-w-5xl w-full flex-col  ">
                <HomeTitle title="Academy" link="/reels" disableButton={true} />
                <div className="flex flex-wrap justify-evenly items-center mb-9 w-full">
                    <div className="mx-auto md:grid md:grid-cols-3 md:gap-x-[30px] w-full flex flex-wrap">
                        {courseData.map((course, index) => (
                            <CourseCards heading={course.heading} title={course.title} id={course.id} key={index} desc={course.desc} img={course.img} link={course.link} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CourseSection;
