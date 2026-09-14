import Image from "next/image";
import heroLeftImg from "../../../public/hero/First-bg-hero.jpg"
const HeroSection = () => {
  return (
    <div>

      {/* left div of first */}
      <div className="flex md:flex-row items-center justify-between gap-4 md:gap-8 lg:gap-12">

      <div className="min-h-screen relative">

      <Image src={heroLeftImg} alt="First-bg" width={811} height={456} className="w-full h-full object-cover" />

<div className="absolute top-8 left-7 w-[305px]">
  <h1 className="text-[42px] font-bold leading-[0.95] tracking-[-1px] text-[#171717]">
    Where 
    <span className="text-[#C0612B]">
      Livestock
    </span>
    <br />

    Meets
    <br />

    <span className="text-[#C0612B]">
      Intelligence.
    </span>
  </h1>
</div>

      <div>
        <h2>hello</h2>
      </div>

      </div>
    </div>


{/* first line second div */}



<div>

      

</div>

    </div>
  );
};

export default HeroSection;
















    













































