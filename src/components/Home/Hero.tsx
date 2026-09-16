import Image from "next/image";
import heroRightImg from "../../../public/hero/card-bg-of-cow.jpg";
import heroLeftImg from "../../../public/hero/hero-left-img.jpg";
import HerCow from "../../../public/hero/hero-right-cow.png";
import LaunchImage from "../../../public/hero/near-to-launch.png";
import handPhoneBg from "../../../public/hero/hand-phone-bg.png";
import handPhone from "../../../public/hero/handPhone.png";
import phone from "../../../public/hero/Home-Phone.png";
import bg from "../../../public/hero/bg.png";
import logo from "../../../public/hero/Ellipse.png";

const HeroSection = () => {
  return (
    <section className="relative mx-auto mt-8 w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">

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
          "
        >
          <Image
            src={heroLeftImg}
            alt="hero-left-img"
            fill
            className="rounded-lg object-fill"
          />

          <div
            className="
              absolute
              left-[30%]
              top-[40%]
              -translate-x-1/2
              -translate-y-1/2
              sm:left-[32%]
              md:left-[34%]
              lg:left-[36%]
            "
          >
            <h2
              className="
                text-[28px]
                font-bold
                leading-[1.15]
                sm:text-[36px] text-center pl-2
                md:text-[46px]
                lg:text-[60px]
              "
            >
              Where <span className="text-[#C0612B]">Livestock</span>
              <br />
              <span>Meets </span>
              <br />
              <span className="text-[#C0612B]">Intelligence</span>
            </h2>
          </div>
        </div>

        {/* RIGHT - 40% */}
        <div
          className="
            relative
            h-[260px]
            w-full
            rounded-lg
            sm:h-[300px]
            md:h-[350px]
            md:flex-[4]
            lg:h-[380px]
          "
        >

          {/* Background */}
          <Image
            src={heroRightImg}
            alt="hero-right-img"
            fill
            className="rounded-lg object-fill"
          />

          {/* Cow */}
          <Image
            src={HerCow}
            alt="hero-cow"
            width={610}
            height={446}
            className="
              absolute
              left-[46%]
              top-[42%]
              w-[105%]
              -translate-x-1/2
              -translate-y-1/2
              sm:w-[105%]
              md:w-[105%]
              lg:w-[100%]
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
        "
      >

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
          "
        >

          {/* Left column */}
          <div className="flex flex-col gap-4">

            {/* Stay Tuned */}
            <div
              className="
                h-[200px]
                w-full
                rounded-[24px]
                bg-[#C0612B]
                sm:h-[230px]
                sm:w-[280px]
                md:h-[258px]
                md:w-[280px]
                lg:w-[300px]
              "
            >
              <h2
                className="
                  p-5
                  pt-10
                  font-bold
                  leading-none
                  sm:p-6
                  sm:pt-12
                  md:p-8
                  md:pt-14
                "
              >
                <span
                  className="
                    text-[42px]
                    text-[#000000]
                    sm:text-[50px]
                    md:text-[58px]
                    lg:text-[64px]
                  "
                >
                  STAY
                </span>

                <br />

                <span
                  className="
                    text-[42px]
                    text-white
                    sm:text-[50px]
                    md:text-[58px]
                    lg:text-[64px]
                  "
                >
                  Tuned...
                </span>
              </h2>
            </div>

            {/* Launch */}
            <div
              className="
                relative
                h-[110px]
                w-full
                rounded-[24px]
                sm:h-[120px]
                sm:w-[280px]
                md:h-[130px]
                md:w-[280px]
                lg:w-[300px]
              "
            >
              <Image
                src={LaunchImage}
                alt="launch-image"
                fill
                className="absolute inset-0 rounded-lg object-fill"
              />
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
              lg:w-[300px]
            "
          >
            <Image
              src={handPhoneBg}
              alt="hand-phone-bg"
              fill
              className="rounded-lg object-fill"
            />

            <Image
              src={handPhone}
              alt="hand-phone"
              width={247}
              height={446}
              className="
                absolute
                bottom-0
                left-[46%]
                h-[60%]
                w-[95%]
                -translate-x-1/2
                sm:h-[62%]
                sm:w-[95%]
                md:h-[60%]
                md:w-full
                lg:h-[60%]
              "
            />

            <Image
              src={phone}
              alt="phone"
              width={610}
              height={446}
              className="
                absolute
                bottom-[11%]
                left-[35%]
                h-auto
                w-[24%]
                -translate-x-1/2
                -translate-y-1/2
                sm:left-[34%]
                sm:w-[23%]
                md:left-[35%]
                md:w-[22%]
                lg:left-32
                lg:w-[20%]
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
            lg:w-[42%]
          "
        >

          <Image
            src={bg}
            alt="bg"
            fill
            className="min-h-[320px] rounded-lg object-fill sm:min-h-[350px] md:min-h-[380px]"
          />

          <p
            className="
              absolute
              left-[50%]
              top-[55%]
              w-[90%]
              -translate-x-1/2
              -translate-y-1/2
              text-center
              text-sm
              font-medium
              sm:text-base
              md:left-[60%]
              md:w-[85%]
              md:text-lg
              lg:text-xl
            "
          >
            <span className="md:pl-27">
              AI-powered digital platform
            </span>
            <br />

            <span className="md:pl-26.5">
              transforming the livestock
            </span>
            <br />

            <span className="md:pl-22">
              eco-system by connecting
            </span>
            <br />

            <span className="md:pl-12">
              farmers, veterinarians, and also
            </span>
            <br />

            <span>
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