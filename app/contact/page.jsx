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
    <main className="w-full bg-gradient-to-r from-[#e9e6d9] to-[#ceecf5] ">
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col mt-8">
      {/* style={{ backgroundImage:'url("/assets/bg-form.jpg")'}} */}
        <p className=" flex justify-center text-[#22668d] text-5xl font-serif shadow-lg -shadow-md shadow-[#22668d] bg-white rounded-bl-2xl rounded-tr-2xl w-80">
          Get In Touch
        </p>
        <form
          className="flex justify-center items-center flex-col w-80 mx-auto"
          onSubmit={onSubmit}
        >
          <div className="w-full flex justify-center items-start flex-col mt-11">
            <label htmlFor="name" className="text-[#22668d] font-serif ml-3 mb-5">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full bg-transparent bg-white py-2 px-3 border-[1.5px] border-dashed rounded-bl-2xl rounded-tr-2xl border-[#22668d] text-black caret-black outline-none rounded mb-4 "
              onChange={onValueChange}
              value={data.name}
              placeholder="Your Name"
            />
          </div>
          <div className="w-full flex justify-center items-start flex-col my-2">
            <label htmlFor="email" className="text-[#22668d] font-serif ml-3 mb-5">
              Email ID
            </label>
            <input
              type="email"
              name="email"
              className="w-full bg-transparent bg-white py-2 px-3 border-[1.5px] border-dashed rounded-bl-2xl rounded-tr-2xl border-[#22668d] text-black caret-black outline-none rounded"
              onChange={onValueChange}
              value={data.email}
              placeholder="example@email.com"
            />
          </div>
          <div className="w-full flex justify-center items-start flex-col my-2">
            <label htmlFor="message" className="text-[#22668d] font-serif ml-3 mb-5">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              className="w-full bg-white py-2 px-3 mb-5 border-[1.5px] border-dashed rounded-bl-2xl rounded-tr-2xl border-[#22668d] text-black caret-black outline-none rounded resize-none"
              onChange={onValueChange}
              value={data.message}
              placeholder="Thank You"
            ></textarea>
          </div>
          <button
            className=" text-white font-serif p-1  bg-[#22668d] rounded-bl-xl rounded-tr-xl w-20 transform transition duration-300 hover:scale-110"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="mb-10 mt-6 text-center w-[90%] md:w-full">
          <p className="text-[#22668d] my-3">
            Reach out to Brajsundar Das at the following
            <br />
            <a
              className="hover:underline flex justify-center items-center mt-1"
              href="mailto:bdas@brajsundar.com"
            >
              <span className="mr-2">
              </span>
              bdas@brajsundar.com
            </a>
          </p>
          <p className="text-[#22668d] my-3">
            To schedule appointments and make bookings, contact
            <br />
            <a
              className="hover:underline flex justify-center items-center mt-1"
              href="mailto:admin@brajsundar.com"
            >
              <span className="mr-2">
              </span>
              admin@brajsundar.com
            </a>
          </p>
          <p className="text-[#22668d] my-3">
            For inquiries related to media and promotions, please email
            <br />
            <a
              className="hover:underline flex justify-center items-center mt-1"
              href="mailto:media@brajsundar.com"
            >
              <span className="mr-2">
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
