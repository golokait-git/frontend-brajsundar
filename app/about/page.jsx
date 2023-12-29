"use client";
import React from "react";
import HeroSection from "./(components)/HeroSection";
import ImageDesc from "./(components)/ImageDesc";

const About = () => {
  const data = [
    {
      image: "image1",
      position: "left",
      id: "biography",
      title: "Biography",
      description:
        "Brajsundar Das was born in December 1984 to an aristocratic Brahmin family. He was brought up in a spiritual environment and learned about Lord activities from his mother since the age of five. He joined ISKCON (International Society for Krishna Consciousness) in 2002 and received his first initiation in 2007. He has dedicated his life to spreading the knowledge of Srimad Bhāgavatam under the guidance of his spiritual masters. Brajsundar Das resides in the holydham of Vrindavan Dham since 2007. He has been instrumental in establishing ISKCON Bhagavata Mahavidyalaya educational centers in India, Europe, and North America. He authored a book titled 'Taking Shelter of Srimad Bhagavatam.'",
    },
    {
      image: "image2",
      position: "right",
      id: "education",
      title: "Education",
      description:
        "Brajsundar Das pursued his secular education and obtained a Diploma, Bachelor's, and Master's degree in Information Technology. He also holds an M.A. in History. Currently, he is pursuing a Ph.D.",
    },
    {
      image: "image3",
      position: "left",
      id: "childhood",
      title: "Childhood",
      description:
        "Brajsundar Das grew up in a spiritual environment within an aristocratic Brahmin family. He started learning about Lord activities from his mother at the age of five.",
    },
    {
      image: "newImage1",
      position: "right",
      id: "career",
      title: "Career",
      description:
        "After joining ISKCON, Brajsundar Das dedicated his life to spreading the knowledge of Srimad Bhāgavatam. He established ISKCON Bhagavata Mahavidyalaya educational centers in India, Europe, and North America. Brajsundar Das conducted more than 215 seminars on Srimad Bhagavatam in over 21 countries and 168 cities. He trained over 4756+ devotees through his Bhāgavata Teachers Training course. He serves as an editor of the E-Magazine 'Nityam Bhagavata Sevaya,' circulated to over 35,811 devotees worldwide.  Brajsundar Das has a substantial online following with more than 4 lakh followers on various social media platforms. He hosts two podcasts, 'One Purpose' in English and 'Bhagavata Vani' in Hindi.",
    },
  ];
  return (
    <main className="w-full">
      <section className="min-h-[100vh]">
        <p className="text-4xl text-[#22668d] font-semibold text-center mt-10 md:mt-24 mb-12">
          About Me
        </p>
        <HeroSection />
        <section className="bg-[#142834] w-full">
          <section className="max-w-6xl mx-auto mt-20 flex justify-center items-center p-6 md:p-10 flex-col">
            <p className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-10">
              Know More About Me
            </p>
            <div className="mb-8 md:mb-10 flex justify-center items-center w-full flex-wrap">
              <button
                className="bg-white text-[#142834] mx-2 my-2 md:my-0 md:mx-8 px-4 py-1 rounded w-[120px] md:w-[140px]"
                onClick={() => {
                  document.getElementById("biography").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Biography
              </button>
              <button
                className="bg-white text-[#142834] mx-2 my-2 md:my-0 md:mx-8 px-4 py-1 rounded w-[120px] md:w-[140px]"
                onClick={() => {
                  document.getElementById("education").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Education
              </button>
              <button
                className="bg-white text-[#142834] mx-2 my-2 md:my-0 md:mx-8 px-4 py-1 rounded w-[120px] md:w-[140px]"
                onClick={() => {
                  document.getElementById("childhood").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Childhood
              </button>
              <button
                className="bg-white text-[#142834] mx-2 my-2 md:my-0 md:mx-8 px-4 py-1 rounded w-[120px] md:w-[140px]"
                onClick={() => {
                  document.getElementById("career").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Career
              </button>
            </div>
            {data.map((item, index) => {
              return (
                <ImageDesc
                  key={index}
                  id={item.id}
                  position={item.position}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              );
            })}
          </section>
        </section>
      </section>
    </main>
  );
};

export default About;
