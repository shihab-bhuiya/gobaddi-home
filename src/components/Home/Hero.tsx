import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative mx-auto grid h-[620px] max-w-6xl grid-cols-12 grid-rows-2 gap-4">

      {/* Heading */}
      <div className="col-span-7 row-start-1 flex flex-col justify-center rounded-[24px] border border-orange-500 p-8 transition-transform hover:rotate-2">
        <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
          Where <span className="text-[#C0612B]">Livestock</span> Meets <br />
          <span className="text-[#C0612B]">Intelligence.</span>
        </h1>
      </div>

      {/* Cow */}
      <div className="relative col-span-5 row-start-1 overflow-hidden rounded-[24px]">
        <Image
          src="/HeroSection/image.png"
          alt="Cow"
          width={300}
          height={300}
           className="h-full hover:rotate-2 w-full object-cover"
        />
      </div>

      {/* STAY + Launch stack */}
      <div className="col-span-3 row-start-2 flex flex-col gap-4">
        <div className="flex flex-[2] flex-col justify-center rounded-[24px] bg-[#C0612B] px-8 text-[44px] font-bold leading-tight">
          STAY
          <br />
          <span className="text-white">Tuned...</span>
        </div>
        <div className="flex flex-1 flex-col justify-center rounded-[24px] border border-orange-500 px-6">
          <p className="text-sm text-neutral-500">We are near to:</p>
          <p className="text-3xl font-bold text-[#C0612B]">Launch 🚀</p>
        </div>
      </div>

      {/* Phone */}
     <div className="relative col-span-3 row-span-3 overflow-auto rounded-[24px] bg-[#C0612B]">

  {/* Hand */}
   <Image
    src="/HeroSection/handPhone.png"
    alt="Hand holding phone"
    width={1000}
    height={800}
    className="
      absolute
      bottom-[60px]
      left-1/2
      z-10
      w-[370px]
      max-w-none
      -translate-x-1/2
      object-contain
    "
  />

  {/* Phone screen */}
  <Image
    src="/HeroSection/Home-Phone.png"
    alt="Phone"
    width={180}
    height={260}
    className="
      absolute
      left-[46%]
      top-[38%]
      z-20
      w-auto
      max-w-none
      -translate-x-1/2
      rotate-[deg]
    "
  />
      </div>

      {/* Description */}
     <div className="col-span-6 row-span-3 rounded-[24px] border  bg-[url('/HeroSection/bg.png')] bg-cover bg-center p-6">
<span className='space-y-1 text-2xl font-bold'>

   <p className='pl-[35%] text-[#171717]'>AI-powered digital platform </p>
   <p className='pl-[30%] text-[#171717]'>transforming the livestock </p>
   <p className='pl-[25%] text-[#171717]'>eco-system by connecting </p>
   <p className='pl-[15%] text-[#171717]'>farmers, veterinarians, and also</p>
   <p className='pl-[5%] text-[#171717]'>trusted providers in one place. </p>
</span>
  </div>


      {/* Middle circle — sits on the seam between rows */}
      <div className="absolute left-[44%] top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full border-[3px] border-orange-600 bg-white">
          <Image
            src="/HeroSection/Ellipse.png"
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