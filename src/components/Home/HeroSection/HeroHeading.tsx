const HeroHeading = () => {
  return (
    <div className="relative h-[325px] w-full">
      {/* SVG SHAPE */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 558 325"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M25 0
            H520
            C541 0 558 17 558 38
            V126
            C558 145 544 159 525 159
            H503
            C481 159 464 173 458 194
            L443 250
            C438 271 419 285 397 285
            H312
            C288 285 269 299 263 317
            C261 322 256 325 247 325
            H25
            C11 325 0 314 0 300
            V25
            C0 11 11 0 25 0
            Z
          "
          fill="#FFFDFB"
          stroke="#C0612B"
          strokeWidth="1"
        />
      </svg>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center px-6 sm:px-8">
        <h1
          className="
            text-[42px]
            font-extrabold
            leading-[1.12]
            tracking-tight
            text-[#171717]
            sm:text-[48px]
            lg:text-[58px]
            lg:leading-[1.15]
          "
        >
          Where{" "}
          <span className="text-[#C0612B]">
            Livestock
          </span>

          <br />

          Meets

          <br />

          <span className="text-[#C0612B]">
            Intelligence.
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HeroHeading;