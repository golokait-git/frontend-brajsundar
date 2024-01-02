import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { SlSocialVkontakte } from "react-icons/sl";

const JoinCommunity = () => {
  return (
    <main className="w-full">
      <section className="flex justify-evenly items-center w-[80%] mt-10 mb-12 flex-col md:flex-row max-w-6xl mx-auto text-[#22668d] font-serif">
        <div className="w-[90%] md:w-auto">
          <p className=" text-2xl md:text-3xl mb-5 text-center md:text-left">
            Join The Community
          </p>
          <p className="text-center md:text-left mb-5 md:mb-0">
            Join our vibrant community and connect with us across all our social
            platforms!
          </p>
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
      </section>
    </main>
  );
};

export default JoinCommunity;
