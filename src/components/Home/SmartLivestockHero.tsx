import Image from "next/image";

const SmartLivestockHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[500px] w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-12 md:grid-cols-2 md:px-10 lg:min-h-[560px] lg:gap-16 lg:px-16">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-10">
          
          {/* Small badge */}
          <div className="mb-5 inline-flex rounded-full border border-[#C0612B]/40 px-3 py-1">
            <span className="text-[9px] font-medium uppercase tracking-wide text-[#C0612B]">
              Our Mission
            </span>
          </div>

          <h2 className="max-w-[550px] text-4xl font-extrabold leading-[1.05] tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
            Empowering Smarter
            <br />
            Animal Care Through{" "}
            <span className="text-[#C0612B]">AI</span>
          </h2>

          <p className="mt-5 max-w-[560px] text-sm leading-6 text-neutral-600">
            Discover a smarter way to manage livestock with intelligent
            technology. Our platform brings farmers, veterinarians, and
            trusted livestock service providers together in one place.
          </p>

          {/* Features */}
          <div className="mt-7 grid max-w-[570px] grid-cols-1 gap-4 sm:grid-cols-2">

            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C0612B]/10">
                <span className="text-xs text-[#C0612B]">✓</span>
              </div>

              <div>
                <p className="text-xs font-bold text-[#171717]">
                  AI-Powered Insights
                </p>
                <p className="mt-1 text-[10px] leading-4 text-neutral-500">
                  Get intelligent insights for better livestock care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C0612B]/10">
                <span className="text-xs text-[#C0612B]">✓</span>
              </div>

              <div>
                <p className="text-xs font-bold text-[#171717]">
                  Connect With Experts
                </p>
                <p className="mt-1 text-[10px] leading-4 text-neutral-500">
                  Connect with veterinarians and livestock professionals.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-5 flex items-center gap-2 text-[10px] font-medium text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C0612B]" />
            Reliable technology for modern livestock management.
          </div>
        </div>

        {/* ================= RIGHT IMAGES ================= */}
        <div className="relative mx-auto h-[400px] w-full max-w-[500px] sm:h-[470px]">

          {/* Large center image */}
          <div className="absolute left-1/2 top-1/2 z-20 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[5px] border-white shadow-lg sm:h-[220px] sm:w-[220px]">
            <Image
              src="/about/animal-3.png"
              alt="Livestock care"
              fill
              className="object-cover"
            />
          </div>

          {/* Top image */}
          <div className="absolute right-[18%] top-[3%] h-[120px] w-[120px] overflow-hidden rounded-full border-[5px] border-white shadow-md sm:right-[20%] sm:h-[145px] sm:w-[145px]">
            <Image
              src="/about/animal-1.png"
              alt="Livestock"
              fill
              className="object-cover"
            />
          </div>

          {/* Right image */}
          <div className="absolute bottom-[18%] right-[2%] h-[120px] w-[120px] overflow-hidden rounded-full border-[5px] border-white shadow-md sm:h-[145px] sm:w-[145px]">
            <Image
              src="/about/animal-2.png"
              alt="Animal care"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>

      {/* ================= CURVED BOTTOM ================= */}
      <div className="absolute -bottom-[1px x] left-1/2 h-16 w-[110%] -translate-x-1/2 rounded-[50%_50%_0_0] bg-[#B8DCF7] sm:h-20" />
    </section>
  );
};

export default SmartLivestockHero;