import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
      <div className="relative mx-auto grid max-w-6xl grid-cols-12 grid-rows-6 gap-4">
  
  {/* Heading */}
  <div className="col-span-7 row-span-3 rounded-[24px] border border-orange-500 p-8">
    <h1>Where Livestock Meets Intelligence.</h1>
  </div>

  {/* Cow */}
  <div className="col-span-5 row-span-3 overflow-hidden rounded-[24px]">
    <Image
      src="/images/cow.png"
      alt="Cow"
      height="400"
      width="400"
      className="h-full w-full object-cover"
    ></Image>
  </div>

  {/* Stay */}
  <div className="col-span-3 row-span-2 rounded-[24px] bg-orange-600 p-6">
    STAY
    <br />
    Tuned...
  </div>

  {/* Phone */}
  <div className="col-span-3 row-span-3 rounded-[24px] bg-orange-600">
    Phone
  </div>

  {/* Description */}
<div className="col-span-6 row-span-3 rounded-[24px] border border-orange-500 bg-[url('/HeroSection/bg.png')] bg-cover bg-center p-6">
    AI-powered digital platform...
  </div>

  {/* Middle circle */}
  <div className="absolute left-1/2 top-[55%] z-20 -translate-x-1/2 -translate-y-1/2">
    <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full border-[3px] border-orange-600 bg-white">
      <Image
        src="/images/logo.png"
        alt="Logo"
        height={100}
        width={100}
        className="w-28"
      />
    </div>
  </div>

</div>
    );
};

export default HeroSection;