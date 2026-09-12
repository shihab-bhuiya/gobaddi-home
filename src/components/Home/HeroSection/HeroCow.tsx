import Image from "next/image";

const HeroCow = () => {
  return (
    <div className="relative h-[300px] w-full overflow-hidden lg:h-[325px]">

      {/* Organic background shape */}
      <svg
        className="absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 355 325"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="cowClip">
            <path
              d="
                M0 0
                H330
                C344 0 355 11 355 25
                V325
                H30
                C15 325 7 314 4 300
                L0 280
                Z
              "
            />
          </clipPath>
        </defs>

        <path
          d="
            M0 0
            H330
            C344 0 355 11 355 25
            V325
            H30
            C15 325 7 314 4 300
            L0 280
            Z
          "
          fill="#C0612B"
        />
      </svg>

      {/* Cow */}
      <div
        className="absolute inset-0 z-10"
        style={{
          clipPath:
            "path('M 0 0 H 330 C 344 0 355 11 355 25 V 325 H 30 C 15 325 7 314 4 300 L 0 280 Z')",
        }}
      >
        <Image
          src="/HeroSection/image.png"
          alt="Cow"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 355px"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default HeroCow;