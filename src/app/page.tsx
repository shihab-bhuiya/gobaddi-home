import ComingSoon from "@/components/Home/ComingSoon";
import ContactSection from "@/components/Home/ContactSection";
import HeroSection from "@/components/Home/HeroSection/HeroSection";

import NavBar from "@/components/Home/NavBar";
import SmartLivestockHero from "@/components/Home/SmartLivestockHero";
import WhoWeAre from "@/components/Home/WhoWeAre";
import WhoWeAreCards from "@/components/Home/WhoWeAreCard";


export default function Home() {
  return (
      <div className="mx-auto min-h-screen w-full max-w-[1020px] bg-[#FFFDFB]">
   <NavBar/>
   <HeroSection/>
   <SmartLivestockHero/>
   <WhoWeAre/>
   <WhoWeAreCards/>
   <ComingSoon/>
   <ContactSection/>
    </div>
  );
}
