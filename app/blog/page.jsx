"use client";
import React from "react";
import HeroSection from "./(components)/HeroSection";
import ImageDesc from "./(components)/ImageDesc";
import '@fortawesome/fontawesome-free/css/all.min.css';
const Blog = () => {
  const customBackgroundColor = "#22668D";
  const data = [
    {
      image: "blg1",
      position: "right",
      id: "details",
      title: "Srimad Bhagavatam is Life Saviour",
      description:
        "Every man should act like this: when he meets a person more qualified than himself, he should be very pleased; when he meets someone less qualified than himself, he should be compassionate toward him; and when he meets someone equal to himself, he should make friendship with him. In this way one is never affected by… read more",
    },
    {
      image: "blg2",
      position: "left",
      id: "biography",
      title: "Understanding the Tenth Canto Chronology",
      description:
        "Lord Kṛṣṇa, who appeared with Baladeva in the Yadu dynasty, performed His activities within this world. Kṛṣṇa is transcendental, and therefore to understand His activities is the occupation of liberated persons. Hearing of kṛṣṇa-līlā is the boat by which to achieve the ultimate goal of life. Except for an animal killer or one who is… read more.",
    },
    {
      image: "blg3",
      position: "right",
      id: "education",
      title: "Diksa or Initiation, what it actually means",
      description:
        "Dīkṣā or initiation actually means to take a vow to chant the holy names of the Lord. This is the main rule; because by dint of His holy name alone can one attain the Supreme Lord. There is no other process prescribed in the scriptures. By chanting His holy names alone can one obtain Kṛṣṇa.… read more",
    },
    {
      image: "blg4",
      position: "left",
      id: "childhood",
      title: "Understanding the Tenth Canto Chronology",
      description:
        "Śrīla Bhaktivinoda Ṭhākura envisioned the global spread of Lord Caitanya’s teachings, believing that the congregational chanting of the Supreme Lord’s divine names could unify diverse theories and religions... read more",
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
</div>

      </section>
    </main>
  );
};

export default Blog;
