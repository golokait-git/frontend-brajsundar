"use client";
import React from "react";
import { useRouter } from "next/navigation";
const NOTFOUND = () => {
  const navigate = useRouter();
  return (
    <main className="w-full">
      <section className="mx-auto max-w-6xl flex justify-center items-center h-[80vh] flex-col">
        <p className="font-semibold text-2xl">404 Page Not Found</p>
        <button
          className="mt-3 bg-[#1b4963] px-3 py-2 text-white rounded-md"
          onClick={() => navigate.push("/")}
        >
          Go To Home
        </button>
      </section>
    </main>
  );
};

export default NOTFOUND;
