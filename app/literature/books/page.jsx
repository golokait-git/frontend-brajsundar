"use client";
import axios from "axios";
import { Search, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import BookMain from "../../components/BookMain";
import { Oval } from "react-loader-spinner";
import { apiLink } from "../../../apiLink";
const Books = () => {
  const [hide, setHide] = useState(true);
  const [active, setActive] = useState(false);
  const [book, setBook] = useState({});
  const [selectedBook, setSelectedBook] = useState("");
  const [loading, setLoading] = useState(false);
  const [bulkorder, setBulkOrder] = useState({
    firstname: "",
    lastname: "",
    address: "",
    pincode: 0,
    city: "",
    book: "",
    quantity: 0,
    phoneno: 0,
    state: "",
    country: "",
  });

  const [preorder, setPreOrder] = useState({
    name: "",
    email: "",
    phoneno: 0,
    book: "",
  });

  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

  // const searchHandler = async (e) => {
  //   setSearchData({});
  //   e.preventDefault();
  //   if (search) {
  //     setSearchActive(true);
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(`${apiLink}/book`
  //       // , {
  //       //   params: {
  //       //     search,
  //       //   },
  //       // }
  //       );
  //       setSearchData(response.data);
  //       console.log(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       console.error("Error fetching podcast data:", error);
  //     }
  //   }
  // };

  // const searchResetHandler = () => {
  //   setSearchActive(false);
  //   setSearch("");
  // };

  const onValueChangeBulkOrder = (e) => {
    setBulkOrder({ ...bulkorder, [e.target.name]: e.target.value });
  };

  const onValueChangePreOrder = (e) => {
    setPreOrder({ ...preorder, [e.target.name]: e.target.value });
  };
  const Books = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${apiLink}/book`
        // , {
        //   params: {
        //     page: 1,
        //     limit: 12,
        //   },
        // }
      );
      setBook(response.data.Books);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching book bulkorder:", error);
    }
  };
  useEffect(() => {
    Books();
  }, []);

  const onSubmitPreOrder = async (e) => {
    e.preventDefault();
    if (preorder.email && preorder.name && preorder.phoneno) {
      toast.loading("Submitting From");
      try {
        const resp = await axios.post("/api/preorder", {
          ...preorder,
          book: selectedBook,
        });
        setPreOrder({
          name: "",
          email: "",
          phoneno: 0,
          book: "",
        });
        toast.dismiss();
        toast.dismiss();
        if (resp.data.message === "Mail Send Failed!") {
          toast.error(resp.data.message);
        } else {
          toast.success("Form Submitted");
        }
        setHide(true);
      } catch (error) {
        toast.dismiss();
        console.log("Error: PreOrder Form Sending");
        toast.error("Error In Submitting.");
      }
    } else {
      toast.dismiss();
      toast.error("Fill All Details");
    }
  };

  const onSubmitBulkOrder = async (e) => {
    e.preventDefault();
    if (
      bulkorder.firstname &&
      bulkorder.lastname &&
      bulkorder.address &&
      bulkorder.pincode &&
      bulkorder.city &&
      bulkorder.book !== "" &&
      bulkorder.quantity &&
      bulkorder.phoneno &&
      bulkorder.state &&
      bulkorder.country
    ) {
      toast.loading("Submitting From");
      try {
        const resp = await axios.post("/api/bulkorder", {
          ...bulkorder,
          book: bulkorder.book.label,
        });
        setBulkOrder({
          firstname: "",
          lastname: "",
          address: "",
          pincode: 0,
          city: "",
          book: "",
          quantity: 0,
          phoneno: 0,
          state: "",
          country: "",
        });
        toast.dismiss();
        toast.dismiss();
        if (resp.data.message === "Mail Send Failed!") {
          toast.error(resp.data.message);
        } else {
          toast.success("Form Submitted");
        }
      } catch (error) {
        toast.dismiss();
        console.log("Error: Bulk Order Form Sending");
        toast.error("Error In Submitting.");
      }
    } else {
      toast.dismiss();
      toast.error("Fill All Details");
    }
  };

  // useEffect(() => {
  //   if (search.length === 0) {
  //     searchResetHandler();
  //   }
  // }, [search]);

  return (
    <>
      {!hide && (
        <div className="w-[100%] flex justify-center items-center flex-col bg-white h-[100vh] fixed top-0 z-50">
          <span
            className="text-white bg-[#142834] p-3 cursor-pointer rounded-full absolute top-20 right-10"
            onClick={() => setHide(true)}
          >
            <X size={24} />
          </span>
          <p className="font-semibold text-3xl mb-2 text-[#142834]">
            Preorder Book
          </p>
          <p className="mb-4 text-[#142834] md:w-full w-[80%] text-center">
            Book: {selectedBook}
          </p>
          <form
            className="flex justify-center items-center flex-col w-[90%] md:w-[35%] mx-auto"
            onSubmit={onSubmitPreOrder}
          >
            <div className="w-full flex flex-wrap md:flex-nowrap gap-x-4">
              <div className="w-full md:w-1/2 flex justify-center items-start flex-col my-2">
                <label htmlFor="name" className="text-[#181818] text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full text-sm bg-transparent py-2 px-3 border-[1.5px] border-[#181818] text-[#181818]  outline-none rounded"
                  onChange={onValueChangePreOrder}
                  value={preorder.name}
                />
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-start flex-col my-2">
                <label htmlFor="phoneno" className="text-[#181818] text-sm">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phoneno"
                  className="w-full text-sm bg-transparent py-2 px-3 border-[1.5px] border-[#181818] text-[#181818] outline-none rounded"
                  onChange={onValueChangePreOrder}
                  value={preorder.phoneno}
                />
              </div>
            </div>
            <div className="w-full flex justify-center items-start flex-col my-2">
              <label htmlFor="email" className="text-[#181818] text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full text-sm bg-transparent py-2 px-3 border-[1.5px] border-[#181818] text-[#181818] outline-none rounded"
                onChange={onValueChangePreOrder}
                value={preorder.email}
              />
            </div>
            <div className="flex justify-end items-end">
              <button
                className="text-[#fff] bg-[#142834] font-semibold px-6 py-2 rounded mt-6"
                type="submit"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      )}
      <section className="w-full min-h-[100vh]">
        <div className="flex md:flex-row-reverse flex-col justify-between items-center md:mb-12 w-[80%] mx-auto md:w-[80%] md:mx-auto ">
          <div className="md:w-[40%]">
            <Image src="/assets/books.png" width={440} height={380} alt="" />
          </div>
          <div className=" bg-[url('/assets/bg-line.png')] bg-contain bg-no-repeat bg-center md:w-[60%] py-[20%]">
            <div className="md:h-[35%] md:px-[39%] md:w-full w-[20%] mx-auto ">
              <h1 className="text-xl  md:text-4xl text-center text-[#22668d] px-2 rounded-bl-2xl rounded-tr-2xl shadow-lg shadow-[#22668d] bg-white">
                Books
              </h1>
            </div>
          </div>
        </div>

        <div className="min-h-[90vh] max-w-6xl mx-auto">
          {/* <form
            className="flex justify-center items-center border-2 w-[90%] mx-auto my-10 md:w-[30%] border-[#22668d] rounded-md md:mb-0 mb-4"
            onSubmit={searchHandler}
          >
            <input
              type="text"
              name="search"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-2 py-1 h-10 outline-none w-full rounded-md"
              placeholder="Search Books"
            />
            {searchActive ? (
              <button
                className="bg-[#22668d] px-3 py-2"
                onClick={searchResetHandler}
              >
                <X color="white" />
              </button>
            ) : (
              <button
                className="bg-[#22668d] px-3 py-2"
                onClick={searchHandler}
              >
                <Search color="white" />
              </button>
            )}
          </form> */}
          {loading && (
            <div className="flex justify-center items-center my-10">
              <Oval
                height={30}
                width={30}
                color="#142834"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#142834"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          )}
          {!loading && searchActive && Object.keys(searchData).length === 0 && (
            <p className="text-center my-10">No Books Found!</p>
          )}
          {/* Pre order Form */}

          {/* Books */}
          {!loading &&
            book &&
            !searchActive &&
            Object.keys(book).map((item, index) => {
              return (
                <BookMain
                  data={book[item]}
                  key={index}
                  active={active}
                  setSelectedBook={setSelectedBook}
                  setHide={setHide}
                />
              );
            })}
          {!loading &&
            book &&
            searchActive &&
            Object.keys(searchData)
              .reverse()
              .map((item, index) => {
                return (
                  <BookMain
                    data={book[item]}
                    key={index}
                    active={active}
                    setSelectedBook={setSelectedBook}
                    setHide={setHide}
                  />
                );
              })}
        </div>

        {/* Bulk Order */}
        <section className=" w-full font-serif">
          <div className="flex justify-center items-center mx-auto max-w-6xl py-14 flex-col">
            <p className="text-[#22668d] font-semibold text-2xl text-center md:text-3xl mb-4">
              Want to purchase books in bulk?
            </p>
            <p className="text-[#22668d] text-sm md:text-base text-center mb-10">
              Fill this from if you want to order any book in bulk. <br />
              We will get in touch with you soon.
            </p>
            <form
              className="flex justify-center items-center flex-col w-[90%] md:w-[45%] mx-auto"
              onSubmit={onSubmitBulkOrder}
            >
              <div className="w-full flex justify-evenly items-center md:gap-4 flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex justify-center items-start flex-col my-2">
                  <label htmlFor="firstname" className="text-black">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    className="w-full bg-white rounded-bl-2xl rounded-tr-2xl border-2 py-2 px-3 border-dashed border-[#22668d] text-black caret-black outline-none"
                    onChange={onValueChangeBulkOrder}
                    value={bulkorder.firstname}
                  />
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-start flex-col my-2">
                  <label htmlFor="lastname" className="text-black">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    className="w-full bg-white rounded-bl-2xl rounded-tr-2xl border-2 py-2 px-3 border-dashed border-[#22668d] text-black caret-black outline-none"
                    onChange={onValueChangeBulkOrder}
                    value={bulkorder.lastname}
                  />
                </div>
              </div>
              <div className="w-full flex justify-center items-start flex-col my-2">
                <label htmlFor="address" className="text-black">
                  Address
                </label>
                <textarea
                  name="address"
                  id="address"
                  cols="30"
                  rows="3"
                  className="w-full bg-white rounded-bl-2xl rounded-tr-2xl border-2 py-2 px-3 border-dashed border-[#22668d] text-black caret-black outline-none"
                  onChange={onValueChangeBulkOrder}
                  value={bulkorder.message}
                ></textarea>
              </div>
              <div className="w-full flex justify-evenly items-center md:gap-4 flex-col md:flex-row">
                <div className="w-full md:w-1/3 flex justify-center items-start flex-col my-2">
                  <label htmlFor="country" className="text-black">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    className="w-full bg-white rounded-bl-2xl rounded-tr-2xl border-2 py-2 px-3 border-dashed border-[#22668d] text-black caret-black outline-none"
                    onChange={onValueChangeBulkOrder}
                    value={bulkorder.country}
                  />
                </div>
                <div className="w-full md:w-1/3 flex justify-center items-start flex-col my-2">
                  <label htmlFor="state" className="text-black">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    className="w-full bg-white rounded-bl-2xl rounded-tr-2xl border-2 py-2 px-3 border-dashed border-[#22668d] text-black caret-black outline-none"
                    onChange={onValueChangeBulkOrder}
                    value={bulkorder.state}
                  />
                </div>
                <div className="w-full md:w-1/3 flex justify-center items-start flex-col my-2">
                  <label htmlFor="city" className="text-black">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="w-full bg-white rounded-bl-2xl rounded-tr-2xl border-2 py-2 px-3 border-dashed border-[#22668d] text-black caret-black outline-none"
                    onChange={onValueChangeBulkOrder}
                    value={bulkorder.city}
                  />
                </div>
              </div>
              <div className="w-full flex justify-evenly items-center gap-4">
                <div className="w-1/2 flex justify-center items-start flex-col my-2">
                  <label htmlFor="book" className="text-black">
                    Select Book
                  </label>
                  <select
                    name="book"
                    id="book"
                    value={bulkorder.book}
                    onChange={(e) => {
                      setBulkOrder({ ...bulkorder, book: e.target.value });
                    }}
                    className="text-black bg-white rounded-bl-2xl rounded-tr-2xl py-2 px-3 border-dashed border-2 border-[#22668d] caret-black outline-none h-10 w-full appearance-none"
                    placeholder="Select Book"
                  >
                    <option value="" selected className="text-black">
                      -- Select Book --
                    </option>
                    {book &&
                      Object.keys(book).map((item, index) => {
                        return (
                          <option
                            value={book[item].bookName}
                            key={index}
                            className="w-full text-black"
                          >
                            {book[item].bookName}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="w-1/2 flex justify-center items-start flex-col my-2">
                  <label htmlFor="quantity" className="text-black">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    className="w-full bg-white rounded-bl-2xl rounded-tr-2xl border-2 py-2 px-3 border-dashed border-[#22668d] text-black caret-black outline-none"
                    onChange={onValueChangeBulkOrder}
                    value={bulkorder.quantity}
                  />
                </div>
              </div>
              <div className="w-full flex justify-evenly items-center gap-4">
                <div className="w-1/2 flex justify-center items-start flex-col my-2">
                  <label htmlFor="pincode" className="text-black">
                    Pincode
                  </label>
                  <input
                    type="number"
                    name="pincode"
                    className="w-full bg-white rounded-bl-2xl rounded-tr-2xl border-2 py-2 px-3 border-dashed border-[#22668d] text-black caret-black outline-none"
                    onChange={onValueChangeBulkOrder}
                    value={bulkorder.pincode}
                  />
                </div>
                <div className="w-1/2 flex justify-center items-start flex-col my-2">
                  <label htmlFor="phoneno" className="text-black">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phoneno"
                    className="w-full bg-white rounded-bl-2xl rounded-tr-2xl border-2 py-2 px-3 border-dashed border-[#22668d] text-black caret-black outline-none"
                    onChange={onValueChangeBulkOrder}
                    value={bulkorder.phoneno}
                  />
                </div>
              </div>
              <button
                className="bg-[#22668d] text-white px-4 text-xl md:text-lg rounded-bl-2xl rounded-tr-2xl scale-100 hover:scale-105 hover:transition-all hover:duration-200"
                type="submit"
              >
                Submit Form
              </button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};

export default Books;
