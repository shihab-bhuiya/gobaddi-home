import HeroCow from "./HeroCow";
import HeroDescription from "./HeroDescription";
import HeroHeading from "./HeroHeading";
import HeroLogo from "./HeroLogo";
import HeroPhone from "./HeroPhone";
import HeroStayTuned from "./HeroStayTuned";


const HeroSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-[1000px]">

        {/* =========================
            TOP SECTION
        ========================== */}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.57fr_1fr] lg:gap-6">
          <HeroHeading />
          <HeroCow />
        </div>

        {/* =========================
            CENTER LOGO
        ========================== */}

        <HeroLogo />

        {/* =========================
            BOTTOM SECTION
        ========================== */}

        <div
          className="
            mt-4
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:mt-6
            lg:grid-cols-[1fr_1fr_1.48fr]
            lg:gap-6
          "
        >
          {/* Left */}
          <HeroStayTuned />

          {/* Phone */}
          <HeroPhone />

          {/* Description */}
          <HeroDescription />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;