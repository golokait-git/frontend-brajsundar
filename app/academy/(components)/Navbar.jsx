import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/academy", current: true },
  { name: "Courses", href: "/academy/courses", current: false },
  { name: "Workshop", href: "/academy/workshop", current: false },
  { name: "Coaching", href: "/academy/coaching", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = usePathname();

  navigation.forEach((item) => {
    item.current = item.href === location;
  });

  return (
    <Disclosure as="nav" className="bg-white z-10 relative shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link href={"/"}>
                      <Image
                        src={require("../../../public/assets/logo.png")}
                        alt="logo"
                        width={100}
                        className="saturate-150 h-[36px] object-contain "
                      />
                    </Link>
                    {navigation.map((item) => (
                      <Link legacyBehavior href={item.href} key={item.name}>
                        <span
                          id="link"
                          className={classNames(
                            item.current
                              ? "bg-[#22668d36] text-[#22668d]"
                              : "text-gray-900 hover:bg-[#22668d36] hover:text-[#22668d]",
                            "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* {sdkLoaded && ( */}
              <div className="gap-2 flex">
                <button className="loginButton login text-[#22668d] font-medium px-5 py-[6px] text-sm rounded-md border-2 border-[#22668d]">
                  Sign In
                </button>
                <button className="loginButton signup text-white font-medium px-5 py-[6px] text-sm rounded-md bg-[#22668d]">
                  Sign Up
                </button>
                <button
                  className="postLogin goToAccountButton text-[#22668d] font-medium px-5 py-[6px] text-sm rounded-md border-2 border-[#22668d]"
                  style={{ display: "none" }}
                >
                  My Account
                </button>
                <button
                  className="postLogin logout text-white font-medium px-5 py-[6px] text-sm rounded-md bg-[#22668d]"
                  style={{ display: "none" }}
                >
                  Logout
                </button>
              </div>
              {/* )} */}
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link href={"/"}>
                <Image
                  src={require("../../../public/assets/logo.png")}
                  alt="logo"
                  width={100}
                  className="saturate-150 h-[40px] object-contain "
                />
              </Link>
              {navigation.map((item) => (
                <Link legacyBehavior href={item.href} key={item.name}>
                  <span
                    id="link"
                    className={classNames(
                      item.current
                        ? "bg-[#22668d36] text-[#22668d]"
                        : "text-gray-900 hover:bg-[#22668d36] hover:text-[#22668d]",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
