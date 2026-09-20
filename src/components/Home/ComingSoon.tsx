import Image from "next/image";
// top of the file
import { Orbitron } from "next/font/google";
import Link from "next/link";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["600", "700"] });


const ComingSoon = () => {
  return (
    <section className="mx-auto  mt-24 w-full max-w-[1440] mb-40 px-6 md:px-10 lg:px-12">


     <div className="relative w-full mx-auto max-w-[1312px] max-h-[586px] pb-6 overflow-hidden rounded-[24px] border border-[#C4622D]/70 bg-gradient-to-br from-white via-white to-[#FBE9DA]">
        {/* 1. BACKGROUND LAYER (add your pattern image later) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
       

          <Image src={'/playstore/left-top-corner.png'} alt="bg" width={130} height={130} className="absolute w-[400px]   rounded-2xl top-0 left-0" />
          <Image src={'/playstore/left-top-corner.png'} alt="bg" width={130} height={130} className="absolute w-[290px]   rounded-[100px] -bottom-40 left-[45%]" />
          

          <Image src={'/playstore/BG-Pattern.png'} alt="bg" fill className="absolute w-[250px]  overflow-visible rounded-2xl top-0 " />
        </div>



        {/* 2. TEXT CONTENT (sets the card height) */}
        <div className="relative z-10 px-6 pt-8 text-center md:w-1/2 md:px-10 md:py-14 md:text-left lg:px-14">
          <h2 className={`${orbitron.className} font-bold`}>
            <span className="block text-xl text-neutral-800 sm:text-2xl lg:text-3xl">
              <span className="text-[#C4622D]">GOBAADI</span> App Is
            </span>
            <span className="mt-1 block text-5xl leading-tight tracking-tighter  text-[#C4622D] sm:text-6xl lg:text-7xl">Li<span className="italic ">v</span>e No<span className="italic">w</span>!
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[380px] text-sm font-semibold text-neutral-800 sm:text-base md:mx-0">
            Use AI-powered{" "}
            <span className="font-bold italic text-[#C4622D]">GOBAADI</span>{" "}
            mobile app &amp; know what your cattle actually needs!
          </p>

          {/* Google Play badge slot: attach the image later */}
          
          <Link
            href="#"
            aria-label="Get it on Google Play"
            className="relative mx-auto mt-6 mb-4 block h-[52px] w-[170px] sm:h-[56px] sm:w-[180px] md:mx-0"
          >
            {/* <Image src={GooglePlayBadge} alt="Get it on Google Play" fill className="object-contain" /> */}
            <Image src={'/playstore/playsStore-2.svg'} alt="playStore" fill className="max-w-[360px] w-full object-contain " />
          </Link>
        </div>

        {/* 3. PHONES: in flow on mobile, absolute on md+ */}
        <div
          className="
            relative
            z-10
            mx-auto
            -mt-1
            h-[236px]
            w-full
            max-w-[360px]
            sm:h-[320px]
            md:absolute
            md:bottom-8
            md:right-6
            md:mt-0
            md:h-[90%]
            md:w-[46%]
            md:max-w-none
            lg:right-12
          "
        >
          <Image
            src={'/playstore/two-phone.svg'}
            alt="GOBAADI app preview"
            fill
            priority
            className="object-contain lg:w-[359px] h-[359px] object-bottom"
          />
        </div>
    </div>

    </section>
  );
};

export default ComingSoon;