import Image from "next/image";
import heroRightImg from "../../../public/hero/card-bg-of-cow.jpg";
import heroLeftImg from "../../../public/hero/hero-left-img.jpg";
import HerCow from "../../../public/hero/hero-right-cow.png";

const HeroSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">

      {/* First row */}
<div className="flex flex-col md:flex-row gap-4">

  {/* LEFT - 60% */}
  <div className="relative w-full md:flex-[6] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] rounded-lg overflow-hidden">

    <Image
      src={heroLeftImg}
      alt="hero-left-img"
      fill
      className="object-fill rounded-lg"
    />

    <div className="absolute top-[40%] left-[36%] -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-[clamp(28px,4vw,60px)] font-bold leading-[1.15]">
        Where <span className="text-[#C0612B]">Livestock</span>
        <br />
        <span>Meets </span>
        <br />
        <span className="text-[#C0612B]">Intelligence</span>
      </h2>
    </div>

  </div>


  {/* RIGHT - 40% */}
  <div className="relative w-full md:flex-[4] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] rounded-lg ">

  {/* Background */}
  <Image
    src={heroRightImg}
    alt="hero-right-img"
    fill
    className="object-fill rounded-lg"
  />

  {/* Cow */}
  <Image
    src={HerCow}
    alt="hero-cow"
    width={610}
    height={446}
    className="
      absolute
      w-[100%]
      h-auto
      top-[42%]
      left-[46%]
      -translate-x-1/2
      -translate-y-1/2
    "
  />

</div>
</div>




    </section>
  );
};

export default HeroSection;