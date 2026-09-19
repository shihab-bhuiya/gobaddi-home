"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ email, message });

    setEmail("");
    setMessage("");
  };

  return (
    <footer className="relative  rounded-t-2xl bg-[#C0612B] text-white">
      {/* ================= TOP CURVE ================= */}
      <div className="absolute left-0 top-0 z-0 w-full -translate-y-[65%]">
        <Image
          src="/hero/BG Wave.svg"
          alt="Footer wave"
          width={1440}
          height={116}
          className="h-auto w-full"
        />
      </div>

      {/* ================= BACKGROUND GRADIENT + DOT PATTERN ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b  " />
   <div
  className="absolute inset-0 z-0 overflow-hidden rounded-t-2xl opacity-[0.35]"
  style={{
    backgroundImage:
      "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1.5px)",
    backgroundSize: "16px 16px",
    // this is the key part: mask the dots into a wide ellipse
    maskImage:
      "radial-gradient(ellipse 70% 55% at 50% 40%, black 0%, transparent 75%)",
    WebkitMaskImage:
      "radial-gradient(ellipse 70% 55% at 50% 40%, black 0%, transparent 75%)",
  }}
/>

      {/* ================= CONTACT CONTENT ================= */}
      <div className="relative w-full max-w-full mx-auto lg:px-28 px-6    mt-10">
        {/* ================= HEADING + SOCIAL ROW ================= */}
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-[500px]">
            <div className="mb-3 inline-flex rounded-[200px] bg-white/90 px-3 py-1">
              <span className="text-[18px] font-semibold font-[SF_Pro] uppercase tracking-wider text-[#C0612B]">
                Contact Us
              </span>
            </div>

            <h2 className="text-[56px] leading-[68px] font-[SF_Pro] font-semibold leading-tight sm:text-4xl">
              Let&apos;s stay connected
            </h2>

            <p className="mt-2 max-w-[330px] text-[20px] font-[SF_Pro] leading-[30px] font-medium text-white/80">
              Join the Gobadi community and be part of a smarter future for
              animal care.
            </p>
          </div>

          {/* ================= SOCIAL (moved to top-right) ================= */}
          <div className="flex flex-col  shrink-0 mt-26 pr-72">
            <p className="mb-3 font-[SF_Pro] text-[18px] leading-[150%] font-medium">Follow Us On</p>

            <div className="flex gap-2">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[10px] text-[#C0612B]"
              >
                <Image src={'/card/Facebook-Icon.svg'} alt="facebook" width={50} height={50} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-[10px]"
              >
                <FaInstagram  />
              </Link>
              <Link
                href="#"
                aria-label="X"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-[10px]"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-[10px]"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="mt-14 grid grid-cols-1 gap-10 pr-22 md:grid-cols-[1fr_360px] md:gap-16">
          {/* ================= CONTACT DETAILS ================= */}
          <div className="grid grid-cols-1 font-[SF_Pro] text-[30px] gap-7 sm:grid-cols-2">
            {/* Email */}
            <div className="flex gap-3 space-y-2">
              <div>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/50">
                <Mail size={13} />
              </div>
                <p className="text-[22px] font-semibold">Email</p>
                <p className=" text-[20px] text-white/80">
                  ceo.gobadi@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 space-y-2">
              <div>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/50">
                                <Phone size={13} />

              </div>
                <p className="text-[22px] font-semibold">Phone</p>
                <p className=" text-[20px] text-white/80">
                  +8801911418977
                </p>
              </div>
            </div>

            {/* Office */}
            <div className="flex gap-3 space-y-2">
              <div>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/50">
                                               <MapPin size={13} />


              </div>
                <p className="text-[22px] font-semibold">Office</p>
                <p className=" text-[20px] text-white/80">
                  Road# 9 , house# 5 , Lane#3, Mirpur 11/a,
                  Dhaka, 1216, Bangladesh.
                </p>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="rounded-[16px] bg-white p-4 text-[#171717] shadow-lg sm:p-5">
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1 block text-[12px] font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="pat@shuffle.dev"
                  className="h-8 w-full rounded border border-neutral-200 px-3 text-[10px] text-neutral-800 placeholder:text-neutral-400 outline-none focus:border-[#C0612B]"
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="message" className="mb-4 font-[SF_Pro] block text-[16px] font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  className="h-[90px] w-full resize-none rounded border border-neutral-200 p-3 text-[10px] text-neutral-800 placeholder:text-neutral-400 outline-none focus:border-[#C0612B]"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="flex h-8 w-full items-center justify-center gap-2 rounded bg-[#C0612B] text-[10px] font-semibold text-white transition hover:bg-[#a94f21]"
              >
                <Send size={11} />
                Send Email
              </button>
            </form>
          </div>
        </div>

        {/* ================= LOGO ================= */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-white/10">
              <Image
                src="/NavBar/NavLogo.png"
                alt="Gobaddi-Logo"
                height={32}
                width={32}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold">গবাদি</h2>
          </div>

          <div className="mt-2 font-[SF_Pro] text-[20px] leading-[30px] flex gap-5 text-[8px] text-white/90">
            <a href="#" className="hover:text-white ">About Us</a>
            <a href="#" className="hover:text-white">Our Vision</a>
            <a href="#" className="hover:text-white">Contact Us</a>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="relative z-10 border-t font-[SF_Pro] text-[16px] leading-[30px] border-white/30 py-4 text-center">
        <p className=" text-white/80">
          © 2026 gobadi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default ContactSection;