const HeroDescription = () => {
  return (
    <div className="relative min-h-[300px] overflow-hidden rounded-[24px] border border-[#C0612B] sm:min-h-[300px] lg:min-h-0">

      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-[url('/HeroSection/bg.png')]
          bg-cover
          bg-bottom
          bg-no-repeat
        "
      />

      {/* Slight white overlay for text readability */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Text */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          items-start
          justify-center
          px-5
          pt-6
          sm:px-7
          sm:pt-7
        "
      >
        <p
          className="
            max-w-[390px]
            text-center
            text-[16px]
            font-bold
            leading-[1.45]
            text-[#171717]
            sm:text-[18px]
            lg:text-[18px]
          "
        >
          AI-powered digital platform transforming the livestock
          eco-system by connecting farmers, veterinarians, and also
          trusted providers in one place.
        </p>
      </div>
    </div>
  );
};

export default HeroDescription;