/** @format */

import Image from "next/image";


export default function WhoWeAre() {
  return (
    <section className="relative w-full overflow-hidden pb-24 pt-20">
      {/* Layer 1: Sky (no clouds) - fills entire section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="sky.svg" // TODO: sky.svg path
          alt="Sky background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Layer 2: Field - pinned to bottom */}
      <div className="absolute bottom-0 left-0 z-10 h-[45%] w-full">
        <Image
          src="/field.svg" // TODO: field image path
          alt="Field"
          fill
          className="object-cover object-bottom"
        />
      </div>

      {/* Layer 3: Heading + paragraph content */}
      <div className="relative z-20 mx-auto flex max-w-2xl flex-col items-center px-4 text-center">
        
            <button className="bg-[#FBE6DA] text-[18px] leading-[100%] uppercase tracking-[10%] font-[SF_Pro] text-[#C0612B] border-[#C0612B] border-2 rounded-2xl px-2 py-1 mb-4 ">
              About Us
            </button>
         
        <h2 className="mb-4 text-[56px] leading-[68px] font-[SF_Pro] font-semibold text-gray-900">
          Who we are
        </h2>
        <p className="lg:text-[26px] font-[SF_Pro] leading-[140%] text-gray-700 md:text-base">
          Our platform enables farmers to access veterinary care, book services
          from licensed veterinarians, receive AI-assisted health insights, and
          generate personalized livestock management content. Veterinarians can
          also use AI to create educational content, share expert knowledge, and
          provide digital consultations more efficiently.
        </p>
      </div>

     {/* Layer 4: Cards - straddles the sky/field seam */}
      <div className="relative z-30 mx-auto mt-16 h-[340px] max-w-4xl px-4 md:h-[400px] ">
        {/* Card 1 - left, sits a bit lower than the middle card */}
        <div
          className="absolute h-64 w-52 -translate-x-1/2 overflow-hidden rounded-[2rem] shadow-lg md:h-72 md:w-60"
          style={{ left: "22%", top: "8%" }}
        >
          <Image
            src="/card/card-1.svg" // TODO: farmer with lamb image
            alt="Farmer holding a lamb"
            fill
            className="object-cover"
          />
        </div>
 
        {/* Card 2 - middle, highest card (least offset) */}
        <div
          className="absolute h-64 w-52 -translate-x-1/2 overflow-hidden rounded-[2rem] shadow-lg md:h-72 md:w-60"
          style={{ left: "50%", top: "0%" }}
        >
          <Image
            src="/card/card-2.svg" // TODO: vet checking cattle image
            alt="Veterinarian examining livestock"
            fill
            className="object-cover"
          />
        </div>
 
        {/* Card 3 - right, sits a bit lower than card 1 */}
        <div
          className="absolute h-64 w-52 -translate-x-1/2 overflow-hidden rounded-[2rem] shadow-lg md:h-72 md:w-60"
          style={{ left: "78%", top: "16%" }}
        >
          <Image
            src="/card/card-3.svg" // TODO: farmer holding turkey image
            alt="Farmer holding poultry"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
