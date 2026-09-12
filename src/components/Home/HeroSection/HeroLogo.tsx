import Image from "next/image";

const HeroLogo = () => {
  return (
    <div
      className="
        absolute
        left-[61%]
        top-[325px]
        z-30
        hidden
        -translate-x-1/2
        -translate-y-1/2
        lg:flex
      "
    >
      <div
        className="
          flex
          h-[154px]
          w-[154px]
          items-center
          justify-center
          rounded-full
          border-[3px]
          border-[#C0612B]
          bg-[#FFFDFB]
        "
      >
        <Image
          src="/HeroSection/Ellipse.png"
          alt="গবাদি logo"
          width={120}
          height={120}
          className="h-[115px] w-[115px] object-contain"
        />
      </div>
    </div>
  );
};

export default HeroLogo;