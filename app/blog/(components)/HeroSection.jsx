import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-around p-8">
      <div class ="bg-white p-3 shadow-2xl hover:bg-slate-200 rounded-tr-2xl rounded-bl-2xl">
      <p className="text-4xl text-[#22668d]  text-center ">
          Spritual Blog
        </p>
      </div>
      <div>
        <Image
          src={require("../../../public/assets/blog.jpg")}
          alt="Image"
          width={320}
          height={300}
          className="rounded-lg bg-blend-normal"
        />
      </div>
    </div>
  );
};

export default HeroSection;
