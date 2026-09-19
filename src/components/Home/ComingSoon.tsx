import Image from "next/image";

const ComingSoon = () => {
  return (
    <section className="mx-auto mt-8 w-full max-w-full mb-16 px-6 md:px-10 lg:px-12">
      <div className="flex flex-col items-center justify-between gap-12 py-14 md:flex-row md:gap-16">
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full md:max-w-[600px]">
          <h2 className="font-[Audiowide] text-[44px] leading-[1.05] font-bold text-[#171717] sm:text-[56px] lg:text-[76px]">
            Something
            <br />
            <span className="italic"> New  </span>   Is
        
          </h2>

          {/* Coming Soon box */}
          <div className="mt-4 inline-block rounded-[14px] bg-[#C0612B] px-4 py-3 lg:px-6 lg:py-5">
            <p className="font-[Audiowide] text-[46px] uppercase leading-none tracking-wide text-white sm:text-[56px] lg:text-[80px]">
              Coming
            </p>

            <div className="mt-2 flex gap-2 font-[Audiowide] lg:mt-3 lg:gap-3">
              {["S", "O", "O", "N"].map((letter, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-white px-3 text-[44px] uppercase leading-[1.1] text-[#C0612B] sm:text-[56px] lg:px-4 lg:text-[76px]"
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-8 text-xl font-bold leading-snug text-[#171717] sm:text-2xl lg:text-[34px]">
            Our new and improved
            <br />
            digital livestock platform.
          </p>
        </div>

        {/* ================= BLOB IMAGE ================= */}
        <div className="relative h-[340px] w-[300px] shrink-0 sm:h-[440px] sm:w-[380px] lg:h-[580px] lg:w-[500px]">
          <svg className="absolute h-0 w-0" aria-hidden="true">
            <defs>
              <clipPath id="livestockBlob" clipPathUnits="objectBoundingBox">
                <path d="M 1 0.16 C 0.88 0.11, 0.78 0.09, 0.67 0.10 C 0.50 0.11, 0.36 0.18, 0.25 0.29 C 0.15 0.39, 0.08 0.51, 0.08 0.64 C 0.08 0.76, 0.14 0.87, 0.25 0.94 C 0.36 1.01, 0.48 0.98, 0.58 0.89 C 0.67 0.81, 0.69 0.69, 0.76 0.59 C 0.82 0.50, 0.90 0.42, 1 0.34 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Orange ring */}
          <div
            className="absolute inset-0 bg-[#F28C28]"
            style={{ clipPath: "url(#livestockBlob)" }}
          />

          {/* Photo */}
          <div
            className="absolute inset-[5px] overflow-hidden bg-black"
            style={{ clipPath: "url(#livestockBlob)" }}
          >
            <Image
              src="/card/hand-1.svg"
              alt="New livestock platform"
              fill
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 500px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;