"use client";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
          <p className="text-white tracking-wider font-medium md:text-xl md:mt-4 text-center">
            © 2023 Brajsundar Das. All Rights Reserved.
          </p>
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
