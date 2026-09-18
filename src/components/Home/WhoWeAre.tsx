

import Image from "next/image";


export default function WhoWeAre() {
  return (
    <section className="relative w-full overflow-hidden pb-16 pt-16">
      {/* Layer 1: Sky (no clouds) - fills entire section */}
      <div className="absolute inset-x-0 top-0 z-0 h-[85%]">
        <Image
          src="sky.svg" // TODO: sky.svg path
          alt="Sky background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Layer 2: Field - pinned to bottom */}
      <div className="absolute bottom-0 left-0 z-10 h-[40%] w-full">
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
      <div className="relative z-30 mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 items-start justify-items-center gap-6 px-4 sm:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
        {/* Card 1 - left, sits a bit lower than the middle card */}
        <div className="relative aspect-[420/340] w-full max-w-[420px] overflow-hidden rounded-xl shadow-lg sm:rounded-[2rem] lg:mt-10">
          <Image
            src="/card/card-1.svg"
            alt="Farmer holding a lamb"
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 420px"
            className="object-cover"
          />
        </div>

        {/* Card 2 - middle, highest card (least offset) */}
        <div className="relative aspect-[420/340] w-full max-w-[420px] overflow-hidden rounded-xl shadow-lg sm:rounded-[2rem] lg:mt-4">
          <Image
            src="/card/card-2.svg" // TODO: vet checking cattle image
            alt="Veterinarian examining livestock"
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 420px"
            className="object-cover"
          />
        </div>

        {/* Card 3 - right, sits a bit lower than card 1 */}
        <div className="relative aspect-[420/340] w-full max-w-[420px] overflow-hidden rounded-xl shadow-lg sm:rounded-[2rem] md:col-span-2 md:mx-auto lg:col-span-1 lg:mt-28">
          <Image
            src="/card/card-3.svg" // TODO: farmer holding turkey image
            alt="Farmer holding poultry"
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 420px"
            className="object-cover object-[center_25%]"
          />
        </div>
      </div>
    </section>
  );
}