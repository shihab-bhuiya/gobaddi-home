import Image from "next/image";

const ComingSoon = () => {
  return (
    <section className="relative overflow-hidden bg-[#faf9f7]">
      <div
        className="
          mx-auto
          flex
          min-h-[430px]
          w-full
          max-w-[1140px]
          flex-col
          items-center
          justify-between
          gap-10
          px-6
          py-14
          sm:px-10
          md:flex-row
          md:gap-12
          md:px-12
          lg:min-h-[480px]
          lg:px-20
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full max-w-[430px]">
          <h2
            className="
              text-4xl
              font-bold
              leading-[0.95]
              tracking-tight
              text-[#171717]
              sm:text-5xl
              lg:text-[52px]
            "
          >
            Something
            <br />
            New Is
          </h2>

          {/* Coming Soon Box */}
          <div
            className="
              mt-3
              inline-block
              rounded-[9px]
              border-[4px]
              border-[#C0612B]
              px-1
              py-1
            "
          >
            <h3
              className="
                text-[38px]
                font-extrabold
                uppercase
                leading-[0.82]
                tracking-tight
                text-[#C0612B]
                sm:text-[44px]
                lg:text-[48px]
              "
            >
              Coming
              <br />
              Soon
            </h3>
          </div>

          <p
            className="
              mt-6
              max-w-[350px]
              text-xl
              font-semibold
              leading-[1.25]
              text-[#171717]
              sm:text-2xl
            "
          >
            Our new and improved
            <br />
            digital livestock platform.
          </p>
        </div>

        {/* ================= CUSTOM PHONE IMAGE ================= */}
        <div
          className="
            relative
            h-[300px]
            w-[300px]
            shrink-0
            sm:h-[340px]
            sm:w-[340px]
            md:h-[370px]
            md:w-[370px]
            lg:h-[410px]
            lg:w-[410px]
          "
        >
          {/* SVG definition for the custom curved shape */}
          <svg
            className="absolute h-0 w-0"
            aria-hidden="true"
          >
            <defs>
              <clipPath
                id="livestockBlob"
                clipPathUnits="objectBoundingBox"
              >
                <path
                  d="
                    M 1 0.16

                    C 0.88 0.11,
                      0.78 0.09,
                      0.67 0.10

                    C 0.50 0.11,
                      0.36 0.18,
                      0.25 0.29

                    C 0.15 0.39,
                      0.08 0.51,
                      0.08 0.64

                    C 0.08 0.76,
                      0.14 0.87,
                      0.25 0.94

                    C 0.36 1.01,
                      0.48 0.98,
                      0.58 0.89

                    C 0.67 0.81,
                      0.69 0.69,
                      0.76 0.59

                    C 0.82 0.50,
                      0.90 0.42,
                      1 0.34

                    Z
                  "
                />
              </clipPath>
            </defs>
          </svg>

          {/* Orange border */}
          <div
            className="
              absolute
              inset-0
              overflow-hidden
              bg-[#F28C28]
            "
            style={{
              clipPath: "url(#livestockBlob)",
            }}
          />

          {/* Image */}
          <div
            className="
              absolute
              inset-[5px]
              overflow-hidden
              bg-black
            "
            style={{
              clipPath: "url(#livestockBlob)",
            }}
          >
            <Image
              src="/wow/image.png"
              alt="New livestock platform"
              fill
              sizes="
                (max-width: 640px) 300px,
                (max-width: 768px) 340px,
                410px
              "
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;