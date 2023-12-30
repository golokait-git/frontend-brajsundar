import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
const HeroSection = () => {
  return (
    <main className="max-w-[80%] font-serif w-full bg-gradient-to-r from-[#f4e9d9] to-[#ffffff]">
      <div className=" flex flex-col-reverse lg:flex-row justify-center items-center mx-auto ">
        <div className="bg-[url('/assets/bg-line.png')] bg-cover bg-blend-color-dodge bg-no-repeat bg-center lg:w-[55%]">
          <div className="relative h-1/4 py-5"><h3 className="text-xl absolute bottom-7">Welcome To Brajasundara</h3></div>
          <div className="h-1/4 text-center text-3xl text-[#22668d] py-10"><div className="p-2 w-fit mx-auto rounded-bl-2xl rounded-tr-2xl shadow-lg shadow-[#22668d] bg-white"><h1>Achieving Greatness</h1></div></div>
          <div className="relative h-1/4 py-5"><h3 className="text-xl text-right absolute top-7 right-0">Take your first steps with us</h3></div>
          <div className="h-1/4 w-[115%] relative py-20">
          <button
            className="bg-[#22668d] hover:border-dotted hover:border-2 hover:border-[#22668d] hover:bg-white hover:text-[#22668d] hover:transition-all hover:duration-150 hover:ease-linear ease-linear transition-all duration-200  text-sm rounded-bl-2xl rounded-tr-2xl my-2 md:my-3 text-white flex justify-center items-center px-2 py-1 absolute right-12"
            onClick={() =>
              window.open("https://chat.whatsapp.com/GO8TSvtB9ET7UrzU8GkhhF")
            }
          >
            Join Our Community{" "}
            <span className="ml-2">
              <BsWhatsapp />
            </span>
          </button>
          </div>
        </div>
        <div className="w-full h-full lg:w-[40%] flex justify-center lg:justify-start items-center lg:items-start flex-col ">
        <Image
       src={("/assets/hero-1.png")}
       height={1500}
            width={1000}
      alt="logo"
      className="object-cover w-[100%] md:w-auto"
    />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
