"use client";
import AboutSection from "../app/components/HomePage/AboutSection";
import HeroSection from "../app/components/HomePage/HeroSection";
import React from "react";
import PodcastSection from "../app/components/HomePage/Podcast/PodcastSection";
import ReelsSection from "../app/components/HomePage/ReelsSection";
import BookSection from "../app/components/HomePage/BookSection";
import VideoSection from "../app/components/HomePage/VideoSection";
import JoinCommunity from "../app/components/JoinCommunity";
import BlogSection from "../app/components/HomePage/BlogSection";
import CourseSection from "../app/components/HomePage/Courses/CourseSection";

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-[#f4e9d9] to-[#ffffff] flex justify-center items-center w-full flex-col scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 mx-auto">
      <HeroSection />
      <AboutSection />
      <CourseSection />
      <BookSection />
      <BlogSection />
      <PodcastSection />
      <ReelsSection />
      <VideoSection />
      <JoinCommunity />
    </section>
  );
};

export default Home;
