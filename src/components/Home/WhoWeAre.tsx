
import Image from 'next/image';
import React from 'react';
import WhoWeAreCards from './WhoWeAreCard';

const WhoWeAre = () => {
  return (
 <section className="w-full relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="relative mx-auto max-w-7xl min-h-[650px] sm:min-h-[700px] lg:min-h-[744px] ">
        
        {/* Sky Background */}
        <Image
          src="/wow/sky.svg"
          alt="Sky background"
          fill
          priority
          className="object-fill"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 lg:px-16 pt-16 sm:pt-20 lg:pt-24">
          
          {/* Badge */}
          <button
            className="
              rounded-full
              border border-[#C0612B]
              bg-[#FBE6DA]
              px-3 py-1
              text-xs sm:text-sm
              uppercase
              tracking-wider
              text-[#C0612B]
            "
          >
            About Us
          </button>

          {/* Heading */}
          <h2
            className="
              mt-4
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-semibold
              text-[#111111]
            "
          >
            Who we are
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              sm:text-base
              lg:text-lg
              leading-6
              sm:leading-7
              text-[#222222]
            "
          >
            Our platform enables farmers to access veterinary care, book
            services from licensed veterinarians, receive AI-assisted health
            insights, and generate personalized livestock management content.
            Veterinarians can also use AI to create educational content, share
            expert knowledge, and provide digital consultations more
            efficiently.
          </p>

        </div>

        <WhoWeAreCards/>
      </div>
    </section>
  );
};

export default WhoWeAre;