/** @format */

import Image from "next/image";

const ComingSoon = () => {
  return (
    <section className="relative w-full max-w-full mx-auto lg:px-32 px-6    mt-10">
      <div
        className=" w-full max-w-full mx-auto lg:px-2 px-6    mt-10

flex


flex-col
items-center
justify-between
gap-10

py-14

md:flex-row
md:gap-12
md:px-12


">
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full max-w-[430px]">
          <h2
            className="
font-[Audiowide]
text-[54px]
font-bold

lg: w-[480px]
leading-[0.95]
tracking-tight
text-[#171717]

lg:text-[54px]
">
            Something
            <br />
           <span className="italic font-[Audiowide]">New Is  </span> 
          </h2>

          {/* Coming Soon Box */}
          <div
            className="
mt-3
inline-block
rounded-[9px]
border-[4px]

border-[#C0612B]
bg-[#C0612B]
px-3
py-2
">
            <p
              className="
        
font-extrabold
font-[Audiowide]
uppercase
tracking-wider
mb-4
leading-[0.82]
tracking-tight
text-white
text-[54px]

">
              Coming
            </p>

            <div className="mt-1 flex gap-1.5 font-[Audiowide] text-[96px]">
              {["S", "O", "O", "N"].map((letter, i) => (
                <span
                  key={i}
                  className="
rounded-[6px]
bg-white
px-2
text-5xl
font-extrabold
uppercase
leading-[0.82]
text-[#C0612B]
sm:text-6xl
lg:text-[64px]
">
                  {letter}
                </span>
              ))}
            </div>
          </div>

          <p
            className="
mt-6
max-w-[350px]
text-base

leading-tight
font-bold
text-[#171717]
sm:text-2xl
">
            Our new and improved
            <br />
            digital livestock platform.
          </p>
        </div>

        {/* ================= CUSTOM BLOB IMAGE ================= */}
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
">
          {/* SVG definition for the custom curved shape */}
          <svg className="absolute h-0 w-0" aria-hidden="true">
            <defs>
              <clipPath id="livestockBlob" clipPathUnits="objectBoundingBox">
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

          {/* Orange border layer - full size, sits behind */}
          <div
            className="absolute inset-0 overflow-hidden bg-[#F28C28]"
            style={{ clipPath: "url(#livestockBlob)" }}
          />

          {/* Single image, inset slightly to reveal the border ring */}
          <div
            className="absolute inset-[5px] overflow-hidden bg-black"
            style={{ clipPath: "url(#livestockBlob)" }}>
            <Image
              src="/card/hand-1.svg"
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
