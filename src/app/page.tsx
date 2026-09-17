import ComingSoon from "@/components/Home/ComingSoon";
import ContactSection from "@/components/Home/ContactSection";
import HeroSection from "@/components/Home/Hero";
// import HeroSection from "@/components/Home/HeroSection/HeroSection";

import NavBar from "@/components/Home/NavBar";
import SmartLivestockHero from "@/components/Home/SmartLivestockHero";
import WhoWeAre from "@/components/Home/WhoWeAre";
import WhoWeAreCards from "@/components/Home/WhoWeAreCard";



export default function Home() {
  return (
      <div className="w-full max-w-full  px-4 sm:px-6 lg:px-8 bg-[#FFFDFB]">
   <NavBar/>
 
   <HeroSection/>
   <SmartLivestockHero/>
   <WhoWeAre/>
  
   <ComingSoon/>

   <ContactSection/>
    </div>
  );
}
