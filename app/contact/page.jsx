"use client";
import axios from "axios";
import { Mail } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (data.email && data.name && data.message) {
      toast.loading("Submitting From");
      try {
        const resp = await axios.post("/api/contact", { ...data });
        setData({
          name: "",
          email: "",
          message: "",
        });
        toast.dismiss();
        if (resp.data.message === "Mail Send Failed!") {
          toast.error(resp.data.message);
        } else {
          toast.success("Form Submitted");
        }
      } catch (error) {
        toast.dismiss();
        console.log("Error: Contact Form Sending");
        toast.error("Error In Submitting.");
      }
    } else {
      toast.dismiss();
      toast.error("Fill All Details");
    }
  };

  return (
    <main className="w-full bg-[#142834]">
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <p className="text-4xl text-[#fff] font-semibold text-center py-12">
          Get In Touch
        </p>
        <form
          className="flex justify-center items-center flex-col w-[90%] md:w-[35%] mx-auto"
          onSubmit={onSubmit}
        >
          <div className="w-full flex justify-center items-start flex-col my-2">
            <label htmlFor="name" className="text-white/80">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full bg-transparent py-2 px-3 border-[1.5px] border-[#f5f5f550] text-white/80 caret-white outline-none rounded"
              onChange={onValueChange}
              value={data.name}
            />
          </div>
          <div className="w-full flex justify-center items-start flex-col my-2">
            <label htmlFor="email" className="text-white/80">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full bg-transparent py-2 px-3 border-[1.5px] border-[#f5f5f550] text-white/80 caret-white outline-none rounded"
              onChange={onValueChange}
              value={data.email}
            />
          </div>
          <div className="w-full flex justify-center items-start flex-col my-2">
            <label htmlFor="message" className="text-white/80">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              className="w-full bg-transparent py-2 px-3 border-[1.5px] border-[#f5f5f550] text-white/80 caret-white outline-none rounded"
              onChange={onValueChange}
              value={data.message}
            ></textarea>
          </div>
          <button
            className="bg-white text-[#142834] font-semibold px-6 py-2 my-6 rounded"
            type="submit"
          >
            Submit Now
          </button>
        </form>
        <div className="mb-10 mt-6 text-center w-[90%] md:w-full">
          <p className="text-white my-3">
            Reach out to Brajsundar Das at the following
            <br />
            <a
              className="hover:underline flex justify-center items-center mt-1"
              href="mailto:bdas@brajsundar.com"
            >
              <span className="mr-2">
                <Mail size={20} />
              </span>
              bdas@brajsundar.com
            </a>
          </p>
          <p className="text-white my-3">
            To schedule appointments and make bookings, contact
            <br />
            <a
              className="hover:underline flex justify-center items-center mt-1"
              href="mailto:admin@brajsundar.com"
            >
              <span className="mr-2">
                <Mail size={20} />
              </span>
              admin@brajsundar.com
            </a>
          </p>
          <p className="text-white my-3">
            For inquiries related to media and promotions, please email
            <br />
            <a
              className="hover:underline flex justify-center items-center mt-1"
              href="mailto:media@brajsundar.com"
            >
              <span className="mr-2">
                <Mail size={20} />
              </span>
              media@brajsundar.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
