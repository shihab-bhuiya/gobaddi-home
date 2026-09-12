import Image from "next/image";

const HeroPhone = () => {
  return (
    <div
      className="
        relative
        h-[330px]
        overflow-hidden
        rounded-[24px]
        bg-[#C0612B]
        sm:h-[380px]
        lg:h-full
      "
    >
      {/* =========================
          HAND
      ========================== */}

      <Image
        src="/HeroSection/handPhone.png"
        alt="Hand holding phone"
        width={900}
        height={800}
        priority
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 330px"
        className="
          absolute
          bottom-[-12px]
          left-1/2
          z-10
          w-[280px]
          max-w-none
          -translate-x-1/2
          object-contain
          sm:w-[320px]
        "
      />

      {/* =========================
          PHONE SCREEN
      ========================== */}

      <Image
        src="/HeroSection/Home-Phone.png"
        alt="Livestock app phone screen"
        width={180}
        height={260}
        priority
        className="
          absolute
          left-[52%]
          top-[30%]
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
  );
};

export default HeroPhone;