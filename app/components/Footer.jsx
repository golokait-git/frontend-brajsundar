"use client";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { SlSocialVkontakte } from "react-icons/sl";
import React from "react";
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();
  let re = new RegExp(
    "/podcast/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}"
  );
  if (!pathname.startsWith("/podcast/") && !pathname.match(re))
    return (
      <footer className="bg-[#22668d] w-full mx-auto font-serif">
        <section className="max-w-6xl mx-auto py-6 flex justify-center items-center flex-col relative">
          <ul className="md:flex justify-evenly items-center w-[80%] my-2 hidden">
          <Link href={"/"}>
            <Image
              src={require("../../public/assets/brajsundar-logo-light.png")}
              alt="logo"
              height={40}
              width={100}
              className=" h-[40px] object-contain"
            />
          </Link>
            <Link href={"/academy"}>
              <span className="text-white text-sm cursor-pointer tracking-wide scale-100 hover:scale-125 hover:transition-all hover:duration-200">
                Academy
              </span>
            </Link>
            <Link href={"/literature/books"}>
              <span className="text-white text-sm cursor-pointer tracking-wide">
                Books
              </span>
            </Link>
            <Link href={"/podcast"}>
              <span className="text-white text-sm cursor-pointer tracking-wide">
                Podcast
              </span>
            </Link>
            <Link href={"/reels"}>
              <span className="text-white text-sm cursor-pointer tracking-wide">
                Reels
              </span>
            </Link>
            {/* <Link href={"/"}>
            <span className="text-white text-sm cursor-pointer tracking-wide">
              Literature
            </span>
          </Link> */}
            <Link href={"/videos"}>
              <span className="text-white text-sm cursor-pointer tracking-wide">
                Videos
              </span>
            </Link>
            <Link href={"/contact"}>
              <span className="text-white text-sm cursor-pointer tracking-wide">
                Contact Me
              </span>
            </Link>
            <Link href={"/about"}>
              <span className="text-white text-sm cursor-pointer tracking-wide">
                About Me
              </span>
            </Link>
          </ul>
          <p className="text-white tracking-wider font-medium md:text-xl md:mt-4 md:mb-5 text-center">
            © 2023 Brajsundar Das. All Rights Reserved.
          </p>
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
          <a
            href="https://karmatechnologies.in/"
            target="_blank"
            className="text-white font-medium tracking-wide text-xs md:text-base mt-2 md:mt-4 text-center"
          >
            Developed By Goloka IT
          </a>
          <span
            className="hidden md:block absolute right-14 cursor-pointer bg-white p-2 rounded-full"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <ChevronUp />
          </span>
        </section>
      </footer>
    );
};

export default Footer;
