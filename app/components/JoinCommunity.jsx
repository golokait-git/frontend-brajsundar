import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { SlSocialVkontakte } from "react-icons/sl";

const JoinCommunity = () => {
  return (
    <main className="w-full">
      <section className="flex justify-evenly items-center w-full mt-10 mb-12 flex-col md:flex-row max-w-6xl mx-auto">
        <div className="w-[90%] md:w-auto">
          <p className="font-semibold text-2xl md:text-3xl mb-1 text-center md:text-left">
            Join The Community
          </p>
          <p className="text-center md:text-left mb-5 md:mb-0">
            Join our vibrant community and connect with us across all our social
            platforms!
          </p>
        </div>
        <ul className="flex justify-evenly items-center">
          <li
            className="mx-2 cursor-pointer hover:text-[#22668d] transition-all ease-linear duration-200 hover:transition-all hover:ease-linear hover:duration-200"
            onClick={() => {
              window.open("https://www.instagram.com/brajsundardas/");
            }}
          >
            <Instagram size={26} />
          </li>
          <li
            className="mx-2 cursor-pointer hover:text-[#22668d] transition-all ease-linear duration-200 hover:transition-all hover:ease-linear hover:duration-200"
            onClick={() => {
              window.open("https://www.facebook.com/brajsunderdas/");
            }}
          >
            <Facebook size={26} />
          </li>
          <li
            className="mx-2 cursor-pointer hover:text-[#22668d] transition-all ease-linear duration-200 hover:transition-all hover:ease-linear hover:duration-200"
            onClick={() => {
              window.open(
                "https://www.youtube.com/channel/UCBLLSfLYL8CYlwlUZkDtM4Q"
              );
            }}
          >
            <Youtube size={26} />
          </li>
          <li
            className="mx-2 cursor-pointer hover:text-[#22668d] transition-all ease-linear duration-200 hover:transition-all hover:ease-linear hover:duration-200"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/brajsundar-das-444718186/"
              );
            }}
          >
            <Linkedin size={26} />
          </li>
          <li
            className="mx-2 cursor-pointer hover:text-[#22668d] transition-all ease-linear duration-200 hover:transition-all hover:ease-linear hover:duration-200"
            onClick={() => {
              window.open("https://twitter.com/Brajsunder_das");
            }}
          >
            <Twitter size={26} />
          </li>
          <li
            className="mx-2 cursor-pointer hover:text-[#22668d] transition-all ease-linear duration-200 hover:transition-all hover:ease-linear hover:duration-200"
            onClick={() => {
              window.open("https://vk.com/brajasundara");
            }}
          >
            <SlSocialVkontakte size={26} />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default JoinCommunity;
