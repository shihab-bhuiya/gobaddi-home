
import HeroHeading from "./HeroHeading";
import HeroCow from "./HeroCow";
import HeroLogo from "./HeroLogo";
import HeroStayTuned from "./HeroStayTuned";
import HeroPhone from "./HeroPhone";
import HeroDescription from "./HeroDescription";

const HeroSection = () => {
  return (
    <section className="relative px-3 pt-4 sm:px-4 lg:px-0">
      

        {/* TOP */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-[1.57fr_1fr] lg:gap-6">
          <HeroHeading />
          <HeroCow />
        </div>

        {/* LOGO */}
        <HeroLogo />

        {/* BOTTOM */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:grid-cols-[1fr_1fr_1.48fr] lg:gap-6">
          <HeroStayTuned />
          <HeroPhone />
          <div className="sm:col-span-2 lg:col-span-1">
            <HeroDescription />
          </div>
        </div>

    
    </section>
  );
};

export default HeroSection;