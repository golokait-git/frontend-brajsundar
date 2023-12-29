"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState("home");
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (pathname === "/") setActive("home");
    if (pathname === "/podcast" || pathname.includes("podcast"))
      setActive("podcast");
    if (pathname === "/reels") setActive("reels");
    if (pathname === "/literature/books") setActive("books");
    if (pathname === "/literature/emagazine") setActive("emagazine");
    if (pathname === "/literature/article") setActive("article");
    if (pathname === "/videos") setActive("videos");
    if (pathname === "/contact") setActive("contact");
    if (pathname === "/about") setActive("about");
    if (pathname === "/academy/courses") setActive("courses");
    if (pathname === "/academy/workshop") setActive("workshop");
    if (pathname === "/academy/coaching") setActive("coaching");
  }, [pathname]);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <nav className="bg-gradient-to-r from-[#f4e9d9] to-[#ffffff] py-8 md:px-7 flex justify-between items-center w-full mx-auto z-50 relative select-none">
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
        <div className="z-[120] flex mx-auto md:mx-0 md:w-[20%] w-[80%] justify-between items-center">
          <Link href={"/"}>
            <Image
              src={require("../../public/assets/brajsundar-logo.png")}
              alt="logo"
              width={100}
              className="saturate-150 h-[40px] object-contain bg-blend-lighten"
            />
          </Link>
          <div className="md:hidden" onClick={toggleMenu}>
            {openMenu ? <X size={26} /> : <Menu size={26} />}
          </div>
        </div>
        {openMenu && (
          <ul className="flex md:hidden flex-col md:flex-row justify-center md:justify-evenly items-center md:w-[50%] md:static absolute md:h-0 h-[100vh] bg-white left-0 top-0 w-full z-[100]">
            <li
              className={`md:block my-4 md:my-0 font-medium cursor-pointer group relative text-xl ${
                (active === "courses" ||
                  active === "workshop" ||
                  active === "coaching") &&
                "border-b-2 border-[#1b4963]"
              }`}
            >
              Academy
              <ul className="scale-0 group group-hover:scale-100 absolute bg-zinc-100 shadow-md shadow-[#0c182b]-950/50 border w-[120px] top-8 rounded-md hover:transition-all hover:duration-200 ease-linear hover:ease-linear transition-all duration-200 origin-top-left z-50">
                <Link href={"/academy/courses"}>
                  <li
                    className={`${
                      active === "Courses" && "text-[#1b4963]"
                    } text-sm text-[#22668d] px-3 py-1 my-1 hover:transition-all hover:duration-200 hover:ease-linear ease-linear transition-all duration-200`}
                  >
                    Courses
                  </li>
                </Link>
                <Link href={"/academy/workshop"}>
                  <li
                    className={`${
                      active === "workshop" && "text-[#1b4963]"
                    } text-sm text-[#22668d] px-3 py-1 my-1 hover:transition-all hover:duration-200 hover:ease-linear ease-linear transition-all duration-200`}
                  >
                    Workshop
                  </li>
                </Link>
                <Link href={"/academy/coaching"}>
                  <li
                    className={`${
                      active === "coaching" && "text-[#1b4963]"
                    } text-sm text-[#22668d] px-3 py-1 my-1 hover:transition-all hover:duration-200 hover:ease-linear ease-linear transition-all duration-200`}
                  >
                    Coaching
                  </li>
                </Link>
              </ul>
            </li>
            <li
              className={`md:block my-4 md:my-0 font-medium cursor-pointer group relative text-xl ${
                (active === "Podcast" ||
                  active === "reels" ||
                  active === "video") &&
                "border-b-2 border-[#1b4963]"
              }`}
            >
              Media
              <ul className="scale-0 group group-hover:scale-100 absolute bg-zinc-100 shadow-md shadow-[#0c182b]-950/50 border w-[120px] top-8 rounded-md hover:transition-all hover:duration-200 ease-linear hover:ease-linear transition-all duration-200 origin-top-left z-50">
                <Link href={"/podcast"}>
                  <li
                    className={`${
                      active === "Podcast" && "text-[#1b4963]"
                    } text-sm text-[#22668d] px-3 py-1 my-1 hover:transition-all hover:duration-200 hover:ease-linear ease-linear transition-all duration-200`}
                  >
                    Podcast
                  </li>
                </Link>
                <Link href={"/reels"}>
                  <li
                    className={`${
                      active === "reels" && "text-[#1b4963]"
                    } text-sm text-[#22668d] px-3 py-1 my-1 hover:transition-all hover:duration-200 hover:ease-linear ease-linear transition-all duration-200`}
                  >
                    Reels
                  </li>
                </Link>
                <Link href={"/videos"}>
                  <li
                    className={`${
                      active === "videos" && "text-[#1b4963]"
                    } text-sm text-[#22668d] px-3 py-1 my-1 hover:transition-all hover:duration-200 hover:ease-linear ease-linear transition-all duration-200`}
                  >
                    Videos
                  </li>
                </Link>
              </ul>
            </li>

            <Link href={"/literature/books"}>
              <li
                className={`text-xl my-4 md:my-0 font-medium ${
                  active === "books" && "border-b-2 border-[#1b4963]"
                }`}
              >
                Books
              </li>
            </Link>
            <Link href={"https://brajsundardas.in/"}>
              <li
                className={`text-xl my-4 md:my-0 font-medium ${
                  active === "videos" && "border-b-2 border-[#1b4963]"
                }`}
              >
                Blogs
              </li>
            </Link>
            <Link href={"/videos"}>
              <li
                className={`text-xl my-4 md:my-0 font-medium ${
                  active === "videos" && "border-b-2 border-[#1b4963]"
                }`}
              >
                Videos
              </li>
            </Link>
            <Link href={"/contact"}>
              <li
                className={`text-xl my-4 md:my-0 font-medium ${
                  active === "contact" && "border-b-2 border-[#1b4963]"
                }`}
              >
                Contact Me
              </li>
            </Link>
            <Link href={"/about"}>
              <li
                className={`text-xl my-4 md:my-0 font-medium ${
                  active === "about" && "border-b-2 border-[#1b4963]"
                }`}
              >
                About Me
              </li>
            </Link>
          </ul>
        )}
        <ul className="md:flex hidden flex-col md:flex-row justify-center md:justify-evenly items-center md:w-[50%] md:static absolute md:h-0 h-[100vh] bg-transparent left-0 top-0 w-full">
          {/* explore courses dropdown */}
          <Link href={"/academy"}>
            <li
              className={`md:block text-[#22668d] my-4 md:my-0 font-medium cursor-pointer group relative ${
                (active === "courses" ||
                  active === "workshop" ||
                  active === "coaching") &&
                "border-b-2 border-[#1b4963]"
              }`}
            >
              Academy
              <ul className="scale-0 group group-hover:scale-100 absolute border-solid border-2 border-[#22668d] grid grid-cols-1 divide-y-2 divide-[#22668d] divide-dashed bg-[#ffffff] shadow-md shadow-[#0c182b]-950/50 w-[120px] top-8 rounded-bl-lg rounded-tr-lg hover:transition-all hover:duration-200 ease-linear hover:ease-linear transition-all duration-200 origin-top-left z-50">
                <Link href={"/academy/courses"}>
                  <li
                    className={`${
                      active === "books" && "text-[#1b4963]"
                    } text-sm text-[#22668d] hover:bg-[#22668d] hover:text-[#ffffff] py-1 px-3 rounded-tr-lg hover:transition-all hover:duration-200 hover:ease-linear ease-linear transition-all duration-200`}
                  >
                    Courses
                  </li>
                </Link>
                <Link href={"/academy/workshop"}>
                  <li
                    className={`${
                      active === "blogs" && "text-[#ffffff] bg-[#22668d]"
                    } text-sm text-[#22668d] hover:bg-[#22668d] hover:text-[#ffffff] px-3 py-1 hover:transition-all hover:duration-200 hover:ease-linear ease-linear transition-all duration-200`}
                  >
                    Workshop
                  </li>
                </Link>
                <Link href={"/academy/coaching"}>
                  <li
                    className={`${
                      active === "blogs" && "text-[#1b4963]"
                    } text-sm text-[#22668d] hover:bg-[#22668d] hover:text-[#ffffff] px-3 py-1 rounded-bl-lg hover:transition-all hover:duration-200 hover:ease-linear ease-linear transition-all duration-200`}
                  >
                    Coaching
                  </li>
                </Link>
              </ul>
            </li>
          </Link>

          <li
            className={`md:block text-[#22668d] my-4 md:my-0 font-medium cursor-pointer group relative ${
              (active === "books" ||
                active === "emagazine" ||
                active === "article") &&
              "border-b-2 border-[#1b4963]"
            }`}
          >
            Literature
            <ul className="scale-0 group group-hover:scale-100 absolute border-solid border-2 border-[#22668d] grid grid-cols-1 divide-y-2 divide-[#22668d] divide-dashed bg-[#ffffff] shadow-md shadow-[#0c182b]-950/50 w-[120px] top-8 rounded-bl-lg rounded-tr-lg hover:transition-all hover:duration-200 ease-linear hover:ease-linear transition-all duration-200 origin-top-left">
              <Link href={"/literature/books"}>
                <li
                  className={`${
                    active === "books" && "text-[#1b4963]"
                  } text-sm text-[#22668d] hover:bg-[#22668d] hover:text-[#ffffff] px-3 py-1 rounded-tr-lg hover:transition-all hover:duration-200 hover:ease-linear ease-linear transition-all duration-200`}
                >
                  Books
                </li>
              </Link>
              <Link href={"https://brajsundardas.in/"} target="_blank">
                <li
                  className={`${
                    active === "blogs" && "text-[#1b4963]"
                  } text-sm text-[#22668d] hover:bg-[#22668d] hover:text-[#ffffff] px-3 py-1 rounded-bl-lg hover:transition-all hover:duration-200 hover:ease-linear ease-linear transition-all duration-200`}
                >
                  Blogs
                </li>
              </Link>
            </ul>
          </li>

          {/* media dropdown */}
          <li
            className={`md:block text-[#22668d] my-4 md:my-0 font-medium cursor-pointer group relative ${
              (active === "Podcast" ||
                active === "reels" ||
                active === "video") &&
              "border-b-2 border-[#1b4963]"
            }`}
          >
            Media
            <ul className="scale-0 group group-hover:scale-100 absolute border-solid border-2 border-[#22668d] grid grid-cols-1 divide-y-2 divide-[#22668d] divide-dashed bg-[#ffffff] shadow-md shadow-[#0c182b]-950/50 w-[120px] top-8 rounded-bl-lg rounded-tr-lg hover:transition-all hover:duration-200 ease-linear hover:ease-linear transition-all duration-200 origin-top-left z-50">
              <Link href={"/podcast"}>
                <li
                  className={`${
                    active === "Podcast" && "text-[#1b4963]"
                  } text-sm text-[#22668d] hover:bg-[#22668d] hover:text-[#ffffff] px-3 py-1 rounded-tr-lg hover:transition-all hover:duration-200 hover:ease-linear ease-linear transition-all duration-200`}
                >
                  Podcast
                </li>
              </Link>
              <Link href={"/reels"}>
                <li
                  className={`${
                    active === "reels" && "text-[#1b4963]"
                  } text-sm text-[#22668d] hover:bg-[#22668d] hover:text-[#ffffff] px-3 py-1 hover:transition-all hover:duration-200 hover:ease-linear ease-linear transition-all duration-200`}
                >
                  Reels
                </li>
              </Link>
              <Link href={"/videos"}>
                <li
                  className={`${
                    active === "videos" && "text-[#1b4963]"
                  } text-sm text-[#22668d] hover:bg-[#22668d] hover:text-[#ffffff] px-3 py-1 rounded-bl-lg hover:transition-all hover:duration-200 hover:ease-linear ease-linear transition-all duration-200`}
                >
                  Videos
                </li>
              </Link>
            </ul>
          </li>

          {/* <Link href={"/videos"}>
                           <li
                             className={`font-medium ${
                               active === "videos" && "border-b-2 border-[#1b4963]"
                             }`}
                           >
                             Videos
                           </li>
                         </Link> */}
          <Link href={"/contact"}>
            <li
              className={`font-medium text-[#22668d] ${
                active === "contact" && "border-b-2 border-[#1b4963]"
              }`}
            >
              Contact Me
            </li>
          </Link>
          <Link href={"/about"}>
            <li
              className={`font-medium text-[#22668d] ${
                active === "about" && "border-b-2 border-[#1b4963]"
              }`}
            >
              About Me
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
