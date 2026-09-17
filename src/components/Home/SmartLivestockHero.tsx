/** @format */

import Image from "next/image";

const SmartLivestockHero = () => {
  return (
     <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-8 items-center">
        {/* Left Side */}
         <div className="w-full max-w-2xl  font-[SF_Pro] ">
          <button className="text-[#C0612B] border border-[#C0612B] rounded-2xl p-1 bg-[#FBE6DA] ">
            OUR VISIONS
          </button>

          <h1 className="font-[SF_Pro] font-bold leading-16 lg:text-[56px] mt-2 text-[30px] ">
            Empowering Smarter <br /> Animal Care Through AI
          </h1>

          <p className="mt-4 text-[20px] leading-[140%] tracking-[0%]">
            Gobadi is building a unified digital ecosystem where animal care 
            becomes faster, smarter, and more accessible.Our goal is to improve
            animal wellbeing through AI-driven insights, expert consultation,
            and trusted marketplace solutions.
          </p>

          {/* Inner div */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
            <div className="flex flex-col gap-2">
             <div className="flex gap-2 p-2">
                <Image
                  src={"/hero/Frame.png"}
                  width={20}
                  height={10}
                  alt="framer"
                  className="h-5"></Image>
                <h2> </h2>
                <div>
                  <h2 className="font-semibold">Animal Care Ecosystem</h2>
                  <p className="text-[14px] text-[#525252] leading-[160%] ">
                    A complete platform for pet health, care guidance,
                    and daily wellbeing support.
                  </p>
                </div>
              </div>

              <div className="flex gap-1 p-2">
                <Image
                  src={"/hero/Frame-1.png"}
                  width={20}
                  height={10}
                  alt="framer"
                  className="h-5"></Image>
                <h2> </h2>
                <div>
                  <h2 className="font-semibold text-sm sm:text-base">
                    AI-Powered Insights & Marketplace
                  </h2>
                <p className="text-[14px] text-[#525252] leading-[160%]">
                    Smart AI results for better decisions, plus a marketplace 
                    for services, products, and care solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* inner left div */}
            <div>
              <div className="flex gap-1 p-2">
                <Image
                  src={"/hero/Frame-2.png"}
                  width={20}
                  height={10}
                  alt="framer"
                  className="h-5"></Image>
                <h2> </h2>
                <div>
                     <h2 className="font-semibold text-sm sm:text-base">
                    Doctor Consultation Network</h2>
                   <p className="text-[14px] text-[#525252] leading-[160%]">
                    Instant access to veterinary professionals for
                    reliable diagnosis and treatment advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Right Side */}
         <div
          className="
            relative
            w-full
            max-w-[480px]
            mx-auto
            aspect-[4/5]
          "
        >
          <Image
            src="/hero/Rectangle-16.png"
            width={40}
            height={0}
            alt="rectangle"
            className="pl-14 absolute top-20 w-80 h-60  left-9"
          />

          <Image
            src="/hero/Rectangle-17.svg"
            width={30}
            height={30}
            alt="rectangle"
            className="absolute w-60 h-60  bottom-[60%] left-36"
          />
           <Image
            src="/hero/Rectangle-20.svg"
            width={30}
            height={30}
            alt="rectangle"
            className="absolute w-21 h-21  right-[2%]"
          />

          <Image
            src="/hero/Ellipse-11.png"
            width={30}
            height={30}
            alt="ful3333"
            className="absolute bottom-[35%] w-25 h-25 left-[25%]"
          />

          <Image
            src="/hero/Ellipse-12.png"
            width={30}
            height={30}
            alt="ful"
            className="absolute top-0 right-5 w-10 h-10"
          />


       

<Image
    src="/hero/Rectangle-19.svg"
    width={30}
    height={30}
    alt="ellipse"
    className="absolute lg:bottom-[40%] lg:left-[80%] w-50 h-50 lg:right-[10%]"
  />

  <Image
    src="/hero/Rectangle-18.svg"
    width={30}
    height={30}
    alt="ellipse"
    className="absolute bottom-0 w-80 h-80 right-16"
  />

        </div>
      </div>
    </section>
  );
};

export default SmartLivestockHero;
