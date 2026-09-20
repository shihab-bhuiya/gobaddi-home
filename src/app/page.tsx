import ComingSoon from "@/components/Home/ComingSoon";
import ContactSection from "@/components/Home/ContactSection";
import HeroSection from "@/components/Home/Hero";
import NavBar from "@/components/Home/NavBar";
import SmartLivestockHero from "@/components/Home/SmartLivestockHero";
import WhoWeAre from "@/components/Home/WhoWeAre";




export default function Home() {
  return (
      <div className="w-full max-w-[1440px] mx-auto   bg-[#FFFDFB]">
   <NavBar/>
 
   <HeroSection/>
   <SmartLivestockHero/>
   <WhoWeAre/>
   <ComingSoon/>
   <ContactSection/>
    </div>
  );
}
