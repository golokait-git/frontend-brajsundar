import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { SlSocialVkontakte } from "react-icons/sl";
const AboutSection = () => {
  const navigate = useRouter();
  return (
    <main className="w-full bg-gradient-to-r from-[#e9e6d9] to-[#ceecf5] font-serif">
      <section className="max-w-[80%] flex flex-col lg:flex-row justify-center items-center mx-auto">
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-start items-center lg:items-start flex-col">
          <Image
            src={"/assets/hero-2.png"}
            alt="about image"
            height={1500}
            width={1000}
            className="object-cover w-[100%] md:w-auto "
          />
        </div>
        <div className="w-full lg:w-[45%] flex justify-end items-end flex-col p-4 lg:p-0">
          <p className="font-semibold text-2xl md:text-4xl mb-8 right-0">
          Meet <span className="text-[#22668d]">Brajsundar Das </span>
          </p>
          <p className=" md:text-xl mb-8 md:mb-4 text-justify">
            Brajsundar Das is a spiritual leader, author, educator, and
            relationship coach. His remarkable journey, from a spiritually
            nurtured childhood to a global ambassador of spirituality, is a
            testament to devotion and service. Since 2002, he has been
            associated with ISKCON and embarked on a transformative quest to
            uncover life&apos;s ultimate purpose.
          </p>
          <div className="flex justify-between items-center w-full mt-12"> 
          <button
            className="bg-[#22668d] text-white px-4 rounded-bl-2xl rounded-tr-2xl text-lg scale-100 hover:scale-105 hover:transition-all hover:duration-200"
            onClick={() => navigate.push("/about")}
          >
            Know More
          </button>
          <p className="font-semibold text-lg text-[#22668d]">Follow Me</p>
          </div>
          
          <div className="mb-5 md:mb-4 justify-end items-end bg-[#22668d] right-0 mt-8 rounded-bl-2xl rounded-tr-2xl">
            
            <ul className="flex justify-evenly items-end mx-4 my-2">
              <li
                className="mx-2 cursor-pointer text-white scale-100 hover:scale-125 hover:transition-all hover:duration-200 "
                onClick={() => {
                  window.open("https://www.instagram.com/brajsundardas/");
                }}
              >
                <Instagram size={20} />
              </li>
              <li
                className="mx-2 cursor-pointer text-white scale-100 hover:scale-125 hover:transition-all hover:duration-200"
                onClick={() => {
                  window.open("https://www.facebook.com/brajsunderdas/");
                }}
              >
                <Facebook size={20} />
              </li>
              <li
                className="mx-2 cursor-pointer text-white scale-100 hover:scale-125 hover:transition-all hover:duration-200"
                onClick={() => {
                  window.open(
                    "https://www.youtube.com/channel/UCBLLSfLYL8CYlwlUZkDtM4Q"
                  );
                }}
              >
                <Youtube size={20} />
              </li>
              <li
                className="mx-2 cursor-pointer text-white scale-100 hover:scale-125 hover:transition-all hover:duration-200"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/brajsundar-das-444718186/"
                  );
                }}
              >
                <Linkedin size={20} />
              </li>
              <li
                className="mx-2 cursor-pointer text-white scale-100 hover:scale-125 hover:transition-all hover:duration-200"
                onClick={() => {
                  window.open("https://twitter.com/Brajsunder_das");
                }}
              >
                <Twitter size={20} />
              </li>
              <li
                className="mx-2 cursor-pointer text-white scale-100 hover:scale-125 hover:transition-all hover:duration-200"
                onClick={() => {
                  window.open("https://vk.com/brajasundara");
                }}
              >
                <SlSocialVkontakte size={20} />
              </li>
            </ul>
          </div>
          
        </div>
      </section>
    </main>
  );
};

export default AboutSection;
