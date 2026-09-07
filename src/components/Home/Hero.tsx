import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full px-3 py-6 sm:px-5 sm:py-8 lg:px-8">
      <div className="relative mx-auto max-w-[1000px]">
        {/* =====================================================
            TOP SECTION
        ===================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:h-[325px]
            lg:grid-cols-[558px_355px]
            lg:gap-6
          "
        >
          {/* Heading */}
          <div
            className="
              flex
              min-h-[260px]
              items-center
              rounded-[24px]
              border
              border-[#C0612B]
              bg-white
              px-6
              py-8
              sm:min-h-[300px]
              sm:px-7
              lg:min-h-0
              lg:px-8
            "
          >
            <h1
              className="
                text-[42px]
                font-extrabold
                leading-[1.15]
                tracking-tight
                sm:text-[44px]
                md:text-[50px]
                lg:text-[58px]
                lg:leading-[1.25]
              "
            >
              Where <span className="text-[#C0612B]">Livestock</span>
              <br />
              Meets
              <br />
              <span className="text-[#C0612B]">Intelligence.</span>
            </h1>
          </div>

          {/* Cow */}
          <div
            className="
              relative
              h-[280px]
              overflow-hidden
              rounded-[24px]
              sm:h-[300px]
              lg:h-auto
            "
          >
            <Image
              src="/HeroSection/image.png"
              alt="Cow"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 355px"
              className="object-cover"
            />
          </div>
        </div>

        {/* =====================================================
            CENTER LOGO - DESKTOP
        ===================================================== */}
        <div
          className="
            absolute
            left-1/2
            top-[337px]
            z-30
            hidden
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            lg:flex
          "
        >
          <div
            className="
              flex
              h-[170px]
              w-[170px]
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
              alt="Logo"
              width={120}
              height={120}
              className="h-[115px] w-[115px] object-contain"
            />
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET LOGO
        ===================================================== */}
        <div className="relative z-30 -my-8 flex justify-center lg:hidden">
          <div
            className="
              flex
              h-[130px]
              w-[130px]
              items-center
              justify-center
              rounded-full
              border-[3px]
              border-[#C0612B]
              bg-[#FFFDFB]
              sm:h-[150px]
              sm:w-[150px]
            "
          >
            <Image
              src="/HeroSection/Ellipse.png"
              alt="Logo"
              width={100}
              height={100}
              className="
                h-[90px]
                w-[90px]
                object-contain
                sm:h-[105px]
                sm:w-[105px]
              "
            />
          </div>
        </div>

        {/* =====================================================
            BOTTOM SECTION
        ===================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:mt-6
            lg:h-[338px]
            lg:grid-cols-[215px_216px_1fr]
            lg:gap-6
          "
        >
          {/* ===================================================
              LEFT STACK
          =================================================== */}
          <div className="flex flex-col gap-4">
            {/* Stay Tuned */}
            <div
              className="
                flex
                min-h-[210px]
                flex-1
                flex-col
                justify-center
                rounded-[24px]
                bg-[#C0612B]
                px-6
                py-8
                sm:min-h-[230px]
                lg:min-h-0
              "
            >
              <p
                className="
                  text-[42px]
                  font-extrabold
                  leading-none
                  text-[#171717]
                  sm:text-[44px]
                  lg:text-[48px]
                "
              >
                STAY
              </p>

              <p
                className="
                  mt-2
                  text-[42px]
                  font-extrabold
                  leading-none
                  text-white
                  sm:text-[44px]
                  lg:text-[48px]
                "
              >
                Tuned...
              </p>
            </div>

            {/* Launch */}
            <div
              className="
                flex
                h-[110px]
                flex-col
                justify-center
                rounded-[24px]
                border
                border-[#C0612B]
                bg-white
                px-5
                sm:h-[116px]
                lg:px-4
              "
            >
              <p className="text-[14px] font-medium text-[#171717] sm:text-[16px]">
                We are near to:
              </p>

              <p
                className="
                  text-[40px]
                  font-extrabold
                  leading-none
                  text-[#C0612B]
                  sm:text-[44px]
                  lg:text-[46px]
                "
              >
                Launch
              </p>
            </div>
          </div>

          {/* ===================================================
              PHONE
          =================================================== */}
          <div
            className="
              relative
              h-[330px]
              overflow-hidden
              rounded-[24px]
              bg-[#C0612B]
              sm:h-[380px]
              lg:h-auto
            "
          >
            {/* Hand */}
            <Image
              src="/HeroSection/handPhone.png"
              alt="Hand holding phone"
              width={900}
              height={800}
              priority
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 330px"
              className="
                absolute
                bottom-[-15px]
                left-1/2
                z-10
                w-[300px]
                max-w-none
                -translate-x-1/2
                object-contain
                sm:w-[330px]
              "
            />

            {/* Phone screen */}
            <Image
              src="/HeroSection/Home-Phone.png"
              alt="Phone screen"
              width={180}
              height={260}
              priority
              className="
                absolute
                left-[52%]
                top-[31%]
                z-20
                w-[95px]
                max-w-none
                -translate-x-1/2
                rotate-[8deg]
                object-contain
                sm:w-[105px]
              "
            />
          </div>

          {/* ===================================================
              DESCRIPTION
          =================================================== */}
          <div
            className="
              relative
              min-h-[300px]
              overflow-hidden
              rounded-[24px]
              border
              border-[#C0612B]
              bg-[url('/HeroSection/bg.png')]
              bg-cover
              bg-center
              sm:col-span-2
              sm:min-h-[300px]
              lg:col-span-1
              lg:min-h-0
            "
          >
            <div
              className="
                absolute
                inset-0
                flex
                items-start
                justify-center
                px-5
                pt-7
                sm:px-8
                sm:pt-8
              "
            >
              <p
                className="
                  max-w-[390px]
                  text-center
                  text-[18px]
                  font-bold
                  leading-[1.45]
                  text-[#171717]
                  sm:text-[20px]
                  lg:text-[21px]
                "
              >
                AI-powered digital platform transforming the livestock
                eco-system by connecting farmers, veterinarians, and also
                trusted providers in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;