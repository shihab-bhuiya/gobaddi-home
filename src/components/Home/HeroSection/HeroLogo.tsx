import Image from "next/image";

const HeroLogo = () => {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[50%]
        
        z-50
        hidden
        -translate-x-1/2
        -translate-y-1/2
        lg:block
      "
    >
      <div
        className="
          flex
          h-[155px]
          w-[155px]
          items-center
          justify-center
          rounded-full
          
          
          bg-[#FFFDFB]
        "
      >
        <Image
          src="/HeroSection/Ellipse.png"
          alt="গবাদি logo"
          width={135}
          height={135}
          className="h-[120px] w-[120px] object-contain"
        />
      </div>
    </div>
  );
};

export default HeroLogo;