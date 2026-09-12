import Image from "next/image";

const HeroCow = () => {
  return (
    <div className="relative h-[280px] overflow-hidden rounded-[24px] bg-[#C0612B] sm:h-[300px] lg:h-[325px]">
      <Image
        src="/HeroSection/image.png"
        alt="Cow"
        fill
        priority
        sizes="355px"
        className="object-cover object-[50%_center]"
      />
    </div>
  );
};

export default HeroCow;