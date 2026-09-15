import Image from "next/image";
import heroRightImg from "../../../public/hero/card-bg-of-cow.jpg";
import heroLeftImg from "../../../public/hero/hero-left-img.jpg";
import HerCow from "../../../public/hero/hero-right-cow.png";
import LaunchImage from "../../../public/hero/near-to-launch.png";
import handPhoneBg from "../../../public/hero/hand-phone-bg.png";
import handPhone from "../../../public/hero/handPhone.png";
import phone from "../../../public/hero/Home-Phone.png";

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


{/* second row */}


    <div className="flex justify-between mt-4">
      <div className="grid grid-cols-2 gap-6">

  {/* Left column */}
  <div className="flex flex-col gap-4">

    {/* Stay Tuned */}
    <div className="rounded-[24px] w-[300px] bg-[#C0612B] h-[258px]">

     <h2 className="p-8 pt-14 font-bold  leading-none"> <span className="text-[#000000] text-[64px]">STAY </span> <br /> <span className="text-[64px] text-white">Tuned... </span>    </h2>    
    </div>

    {/* Launch */}
    <div className="relative rounded-[24px] border border-[#C0612B] h-[130px]">
   
      <Image src={LaunchImage} alt="launch-image" fill className="absolute inset-0 object-fill rounded-lg" />
    </div>

  </div>

  {/* Right column */}
  <div className="relative rounded-[24px] min-h-[380px] overflow-hidden">
    <Image src={handPhoneBg} alt="hand-phone-bg" fill className="object-fill rounded-lg" />

<Image
  src={handPhone}
  alt="hand-phone"
  width={247}
  height={446}
  className="
    absolute
    w-full
    h-[60%]
    bottom-0
    left-[46%]
    -translate-x-1/2
  "
/>

      <Image src={phone} alt="phone" width={610} height={446} className="absolute w-[20%] h-[27%] bottom-[11%]  left-32 -translate-x-1/2 -translate-y-1/2" />


  </div>

</div>


{/* second row right side */}
<div>
  <h2>Second Row Content</h2>
</div>


    </div>




    </section>
  );
};

export default HeroSection;