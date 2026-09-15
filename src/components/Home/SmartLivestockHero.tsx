/** @format */

import Image from "next/image";

const SmartLivestockHero = () => {
  return (
    <section className="w-full relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="flex">
        {/* Left Side */}
        <div className="max-w-2xl">
          <button className="text-[#C0612B] border border-[#C0612B] rounded-2xl p-1 bg-[#FBE6DA] ">
            OUR VISIONS
          </button>

          <h1 className="font-semibold text-3xl mt-2">
            Empowering Smarter <br /> Animal Care Through AI
          </h1>

          <p>
            Gobadi is building a unified digital ecosystem where animal care
            becomes faster, smarter, and more accessible.Our goal is to improve
            animal wellbeing through AI-driven insights, expert consultation,
            and trusted marketplace solutions.
          </p>

          {/* Inner div */}

          <div className="flex mt-1.5">
            <div>
              <div className="flex gap-1 p-2">
                <Image
                  src={"/hero/Frame.png"}
                  width={20}
                  height={10}
                  alt="framer"
                  className="h-5"></Image>
                <h2> </h2>
                <div>
                  <h2 className="font-semibold">Animal Care Ecosystem</h2>
                  <p className="text-[14px] text-[#525252]">
                    A complete platform for pet health, care <br /> guidance,
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
                  <h2 className="font-semibold">
                    AI-Powered Insights & Marketplace
                  </h2>
                  <p className="text-[14px] text-[#525252]">
                    Smart AI results for better decisions, plus a marketplace{" "}
                    <br /> for services, products, and care solutions.
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
                  <h2 className="font-semibold">Doctor Consultation Network</h2>
                  <p className="text-[14px] text-[#525252]">
                    Instant access to veterinary professionals <br /> for
                    reliable diagnosis and treatment advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-50 h-50">
          <Image
            src="/hero/Rectangle-16.png"
            width={50}
            height={700}
            alt="rectangle"
            className="pl-14 top-6 w-120 h-60  left-9"
          />

          <Image
            src="/hero/Rectangle-17.svg"
            width={30}
            height={30}
            alt="rectangle"
            className="absolute w-60 h-60 top-0 right-5"
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
            className="absolute bottom-0 left-3"
          />

          <Image
            src="/hero/Ellipse-12.png"
            width={30}
            height={30}
            alt="ful"
            className="absolute bottom-0 right-3"
          />


          {/* <Image
            src="/hero/Rectangle-17.png.png"
            width={30}
            height={30}
            alt="ful2"
            className="absolute bottom-0 right-0"
          /> */}


<Image
    src="/hero/Rectangle-19.png.png"
    width={30}
    height={30}
    alt="ellipse"
    className="absolute bottom-0 right-0"
  />

  <Image
    src="/hero/Rectangle-18.png.png"
    width={30}
    height={30}
    alt="ellipse"
    className="absolute bottom-0 right-0"
  />

        </div>
      </div>
    </section>
  );
};

export default SmartLivestockHero;
