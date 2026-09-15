
import Image from 'next/image';
import React from 'react';

const WhoWeAre = () => {
  return (
      <section className=" w-full container mx-auto px-4 sm:px-6 lg:px-8 mt-10">

      <div className='relative'>
        <Image src={'/wow/sky.svg'} width={1440} height={40} alt='sky' className=' w-full h-[744px]' />

      <button className='absolute top-[10%] left-[45%] text-[#C0612B] rounded-2xl border border-[#C0612B] px-1 bg-[#FBE6DA]'>About Us</button>
      <h2>Who we are</h2>
      <p>
        Our platform enables farmers to access veterinary care, book services from licensed veterinarians, receive AI-assisted health insights, and generate personalized livestock management content. Veterinarians can also use AI to create educational content, share expert knowledge, and provide digital consultations more efficiently.
      </p>

      </div>
      
    </section>
  );
};

export default WhoWeAre;