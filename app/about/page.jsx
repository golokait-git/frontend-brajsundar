"use client";
import React from "react";
import HeroSection from "./(components)/HeroSection";
import ImageDesc from "./(components)/ImageDesc";
import '@fortawesome/fontawesome-free/css/all.min.css';
const About = () => {
  const customBackgroundColor = "#22668D";
  const data = [
    {
      image: "ab1",
      position: "right",
      id: "details",
      title: "Brajsundar Das",
      description:
        "Brajsundar Das is a multifaceted individual, encompassing the roles of a spiritual leader, author, global public speaker, educator, and relationship coach. His profound quest to unravel the ultimate purpose of life led him to embark on a transformative journey when he became associated with ISKCON in 2002. It's noteworthy that he is a devoted disciple of the esteemed His Holiness Radha Govind Das Goswami.",
    },
    {
      image: "ab2",
      position: "left",
      id: "biography",
      title: "Biography",
      description:
        "Brajsundar Das was born in December 1984 to an aristocratic Brahmin family. He was brought up in a spiritual environment and learned about Lord activities from his mother since the age of five. He joined ISKCON (International Society for Krishna Consciousness) in 2002 and received his first initiation in 2007. He has dedicated his life to spreading the knowledge of Srimad Bhāgavatam under the guidance of his spiritual masters. Brajsundar Das resides in the holydham of Vrindavan Dham since 2007. He has been instrumental in establishing ISKCON Bhagavata Mahavidyalaya educational centers in India, Europe, and North America. He authored a book titled 'Taking Shelter of Srimad Bhagavatam.'",
    },
    {
      image: "ab3",
      position: "right",
      id: "education",
      title: "Education",
      description:
        "Brajsundar Das pursued his secular education and obtained a Diploma, Bachelor's, and Master's degree in Information Technology. He also holds an M.A. in History. Currently, he is pursuing a Ph.D.",
    },
    {
      image: "ab4",
      position: "left",
      id: "childhood",
      title: "Childhood",
      description:
        "Brajsundar Das grew up in a spiritual environment within an aristocratic Brahmin family. He started learning about Lord activities from his mother at the age of five.",
    },
    {
      image: "ab5",
      position: "right",
      id: "career",
      title: "Career",
      description:
        "After joining ISKCON, Brajsundar Das dedicated his life to spreading the knowledge of Srimad Bhāgavatam. He established ISKCON Bhagavata Mahavidyalaya educational centers in India, Europe, and North America. Brajsundar Das conducted more than 215 seminars on Srimad Bhagavatam in over 21 countries and 168 cities. He trained over 4756+ devotees through his Bhāgavata Teachers Training course. He serves as an editor of the E-Magazine 'Nityam Bhagavata Sevaya,' circulated to over 35,811 devotees worldwide.  Brajsundar Das has a substantial online following with more than 4 lakh followers on various social media platforms. He hosts two podcasts, 'One Purpose' in English and 'Bhagavata Vani' in Hindi.",
    },
    
  ];
  return (
    <main className="w-full">
      <section className="min-h-[100vh] bg-gradient-to-r from-[#f4e9d9] to-[#ffffff] w-full ">
        <HeroSection />
        <section className="bg-gradient-to-r from-[#f4e9d9] to-[#ffffff] w-full">
          <section className="max-w-6xl mx-auto mt-20 flex justify-center items-center p-6 md:p-10 flex-col">
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
        <div class="flex justify-around items-center">
  <div class="mr-4">
    <p class="font-mono text-2xl text-[#22668d] ">Join Our Community</p>
  </div>
  <div class="mb-2 mr-10 rounded-tr-lg rounded-bl-lg" style={{ backgroundColor: customBackgroundColor }}>
    <div class="flex space-x-6 m-2 ">
      <a href="#" class="text-white"><i class="fa-brands fa-instagram"></i></a>
      <a href="#" class="text-white"><i class="fa-brands fa-facebook"></i></a>
      <a href="#" class="text-white"><i class="fa-brands fa-x-twitter"></i></a>
      <a href="#" class="text-white"><i class="fa-brands fa-linkedin"></i></a>
      <a href="#" class="text-white"><i class="fa-brands fa-youtube"></i></a>
    </div>
  </div>
</div>

      </section>
    </main>
  );
};

export default About;
