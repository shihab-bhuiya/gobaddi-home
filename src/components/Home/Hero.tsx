/** @format */

import Image from "next/image";
import heroRightImg from "../../../public/hero/card-bg-of-cow.jpg";
import heroLeftImg from "../../../public/hero/hero-left-img.jpg";
import HerCow from "../../../public/hero/hero-right-cow.png";
import LaunchImage from "../../../public/hero/near-to-launch.png";
import handPhoneBg from "../../../public/hero/hand-phone-bg.png";
import bg from "../../../public/hero/bg.png";
import logo from "../../../public/hero/Ellipse.png";

const HeroSection = () => {
  return (
    <section className="relative mx-auto mt-8 w-full max-w-[1312px] px-3 sm:px-4 md:px-6 lg:px-8">
      {/* First row */}
      <div className="flex flex-col gap-4 md:flex-row">
        {/* LEFT - 60% */}
        <div
          className="
            relative
            h-[260px]
            w-full
            overflow-hidden
            rounded-lg
            sm:h-[300px]
            md:h-[350px]
            md:flex-[6]
            lg:h-[380px]
          ">
          <Image
            src={heroLeftImg}
            alt="hero-left-img"
            fill
            className="rounded-lg  object-fill"
          />

          <div
            className="
              absolute
              left-[36%]
              top-[40%]
              -translate-x-1/2
              -translate-y-1/2
            
              md:left-[38%]
              lg:left-[36%]
            ">
            <h2
              className="
                text-[34px]
                font-extrabold
           
                font-['Tusker_Grotesk]
                
            
                sm:text-[34px]
                md:text-[42px]
                lg:text-[52px] 
                tracking-[6%]
                leading-[140%]
                
              ">
              Where <span className="text-[#C0612B] tracking-[4%] ">Livestock</span>
              <br />
              <span className="">Meets </span>
              <br />
              <span className="text-[#C0612B] tracking-[4%]">Intelligence </span>
            </h2>
          </div>
        </div>

        {/* RIGHT - 40% */}
        <div
  className="
    relative
    h-[260px]
    w-full
    lg:w-[370px]
    rounded-lg
    sm:h-[300px]
    md:h-[350px]
    md:flex-[4]
    lg:h-[410px]

    
  ">
  {/* Background */}
  <Image
    src={heroRightImg}
    alt="hero-right-img"
    fill
    className="rounded-lg object-fill"
  />

  {/* Cow — anchored to bottom, allowed to overflow past the box */}
  <Image
    src={HerCow}
    alt="hero-cow"
    
    height={426}
    className="
      absolute
    
      left-40
      md:left-[295px]
      bottom-14
      lg:left-[48%]
      z-10
      w-[100%]
      h-[105%]
      -translate-x-[50%]
      translate-y-[10%]
      lg:h-[118%]
      md:w-[100%]
      
    "
  />
</div>
      </div>

      {/* second row */}

      <div
        className="
          mt-4
          flex
          flex-col
          gap-4
          md:flex-row
          md:justify-between
        ">
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-4
            sm:grid-cols-2
            md:w-[58%]
            md:grid-cols-2
            md:gap-4
            lg:w-auto
          ">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            {/* Stay Tuned */}
            <div
              className="
                h-[202px]
                w-full
               lg:pl-4
                lg:-space-y-4
                rounded-[24px]
                bg-[#C0612B]
                sm:h-[230px]
                sm:w-[280px]
                md:h-[258px]
                md:w-[280px]
                lg:w-[320px]
              ">
              <h2
                className="
                  pl-8
                  pt-8
                  text-[40px]
                  font-[Tusker-Grotesk]
                  font-bold
                  leading-16
                  tracking-[8%]
                  md:p-8
                  md:pt-14
                  lg:text-[42px]
                  leading-[140%]
                  tracking-[4%]
                  lg:pl-2
                  lg:pt-4
                  lg:font-bold
                  uppercase
                  text-white
                ">
                
                  Download
                
                <br />

             
                  now...
             
              </h2>
              <Image src={'/card/playStore.svg'} alt="playstore" width={189.85365295410156} height={58} className="
              w-[200px]  lg:w-[230px] lg:pl-1
                  pl-8
              " />
            </div>

            {/* Launch */}
            <div
              className="
                relative
                h-[110px]
                border-[#C0612B]
                border-1
                w-full
                -space-y-4
                rounded-[24px]
                sm:h-[120px]
                sm:w-[280px]
                md:h-[130px]
                md:w-[280px]
                lg:w-[320px]
              ">

<div className="flex justify-around pt-4 gap-32">
  <div className="font-[SF_Pro] text-[24px] font-semibold ">

  We are:
  </div>

<Image src={'/card/live.svg'} alt="live" width={70} height={60} />

</div>
            
<div className="text-[#C0612B] text-[62px] lg:text-[72px] leading-[140%]  tracking-[-1%] font-semibold text-center ">
  Live Now
</div>


            </div>
          </div>

          {/* Right column */}
          <div
            className="
              relative
              min-h-[320px]
              w-full
              overflow-hidden
              rounded-[24px]
              sm:min-h-[350px]
              md:min-h-[380px]
              md:w-[280px]
              lg:w-[325px]
            ">
            <Image
              src={handPhoneBg}
              alt="hand-phone-bg"
              fill
              className="rounded-lg object-fill"
            />

            <Image
              src={"/hero/full-hand.svg"}
              alt="hand-phone"
              width={247}
              height={486}
              className="
                absolute
                bottom-0
                left-[46%]
                h-[90%]
                w-full
                -translate-x-1/2
                sm:h-[62%]
                sm:w-[95%]
                md:h-[60%]
                md:w-full
                lg:h-[85%]
              "
            />

    
          </div>
        </div>

        {/* second row right side */}

        <div
          className="
            relative
            min-h-[320px]
            w-full
            sm:min-h-[350px]
            md:min-h-[380px]
            md:w-[40%]
            lg:w-[47%]
          ">
          <Image
            src={bg}
            alt="bg"
            fill
            className="min-h-[320px] rounded-lg object-fill sm:min-h-[350px] md:min-h-[380px]"
          />

          <p
            className="
    absolute
    left-[38%]
    top-[31%]
    w-full
    leading-8
    -translate-x-1/2
    -translate-y-1/2
    text-center
    text-sm
    font-medium
    sm:text-base
    md:pt-0.5
    md:w-[95%]
    md:tracking-tight
    md:font-semibold  
    md:text-[11px]
    lg:left-[38%]
    lg:leading-10
    lg:text-[22px]
  ">
            <span className="pl-[42%] md:pl-20 lg:pl-52">
              AI-powered digital platform
            </span>
            <br />

            <span className=" pl-[36%] md:pl-16 lg:pl-45">
              transforming the livestock
            </span>
            <br />

            <span className=" pl-[28%] md:pl-8 lg:pl-30">
              eco-system by connecting
            </span>
            <br />

            <span className="pl-[15%] md:pl-4 lg:pl-12">
              farmers, veterinarians, and also
            </span>
            <br />

            <span className=" md:pl-[1px] lg:pl-0">
              trusted providers in one place.
            </span>
            <br />
          </p>
        </div>
      </div>

      {/* Center Logo */}

      <Image
        src={logo}
        alt="logo"
        width={250}
        height={200}
        className="
    hidden
    sm:block
    absolute
    left-[52%]
    top-[50%]
    min-h-[18%]
    w-[130px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-lg
    object-fill
    md:w-[180px]
    lg:w-[250px]
  "
      />
    </section>
  );
};

export default HeroSection;
