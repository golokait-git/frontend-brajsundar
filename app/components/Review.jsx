import axios from "axios";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { apiLink } from "../../apiLink";

const Review = ({ title, setShowReview }) => {
  useEffect(() => {
    reviewHandler();
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);
  const [review, setReviews] = useState();
  const [loading, setLoading] = useState(false);

  const reviewHandler = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiLink}/review`);
      setReviews(response.data.reviews);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching podcast data:", error);
      toast.error("Something Went Wrong!");
    }
  };

  return (
    <section className="h-[100vh] w-full flex justify-center items-center bg-black bg-opacity-50 z-50 top-0 overflow-hidden absolute">
      <div className="bg-white rounded-md border relative p-4 w-[90%] md:w-[60%] min-h-[70vh] max-h-[85vh] flex items-center flex-col">
        <div
          className="bg-[#22668d] p-2 absolute right-4 rounded-lg cursor-pointer"
          onClick={() => setShowReview(false)}
        >
          <X size={22} color="white" />
        </div>
        <p className="text-[#22668d] font-semibold text-3xl">Reviews</p>
        <p className="text-[#000] font-medium text-lg my-2 text-center">
          {title}
        </p>
        {loading && (
          <div className="flex justify-center items-center mt-10">
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
        {!loading && (
          <div className="w-full overflow-y-auto scrollbar-hidden">
            {review &&
              review.map((item, index) => {
                if (item.book_id === title) {
                  return (
                    <div
                      key={item.id}
                      className={`w-full border border-black rounded-[10px] my-2 px-2 py-2 flex ${
                        index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                      } shadow`}
                    >
                      <Image
                        src={`https://media.brajsundar.com/${item.file_name}`}
                        height={70}
                        width={70}
                        alt="Image"
                        className={`object-cover aspect-square rounded-md ${
                          index % 2 === 0 ? "ml-2" : "mr-2"
                        }`}
                      />
                      <div
                        className={`w-full ${
                          index % 2 === 0 ? "ml-2" : "mr-2"
                        }`}
                      >
                        <p className="font-semibold w-full">{item.name}</p>
                        <p className="font-regular text-sm">{item.message}</p>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Review;
