const WhoWeAre = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#b8dcf7]
        rounded-t-full
        bg-[url('/wow/bgofwow.png')]
        bg-cover
        bg-top
        bg-no-repeat
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[360px]
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-center
          px-5
          pb-20
          pt-16
          text-center
          sm:min-h-[400px]
          sm:px-8
          lg:min-h-[430px]
        "
      >
        {/* Small badge */}
        <div className="rounded-full border border-[#C0612B] bg-white/70 px-4 py-1">
          <span className="text-[9px] font-semibold uppercase tracking-wide text-[#C0612B]">
            About Us
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            mt-3
            text-4xl
            font-extrabold
            leading-none
            tracking-tight
            text-[#171717]
            sm:text-5xl
            lg:text-6xl
          "
        >
          Who we are
        </h2>

        {/* Description */}
        <p
          className="
            mt-5
            max-w-[620px]
            text-sm
            font-medium
            leading-6
            text-[#171717]/80
            sm:text-base
            sm:leading-7
          "
        >
          Our platform enables farmers to access veterinary care, book
          services from trusted providers, manage livestock efficiently,
          and receive intelligent recommendations powered by AI.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;