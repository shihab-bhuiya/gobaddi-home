"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Camera,
  Send,
} from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      email,
      message,
    });

    setEmail("");
    setMessage("");
  };

  return (
    <footer className="relative overflow-hidden bg-[#C0612B] text-white">

      {/* ================= TOP CURVE ================= */}
      <div
        className="
          absolute
          left-1/2
          top-[-35px]
          h-[70px]
          w-[115%]
          -translate-x-1/2
          rounded-[50%]
          bg-[#faf9f7]
        "
      />

      {/* ================= CONTACT CONTENT ================= */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1140px]
          px-6
          pb-10
          pt-20
          sm:px-10
          md:px-12
          lg:px-20
        "
      >

        {/* ================= HEADING ================= */}
        <div className="max-w-[500px]">
          <div className="mb-3 inline-flex rounded-full bg-white/90 px-3 py-1">
            <span className="text-[8px] font-semibold uppercase tracking-wider text-[#C0612B]">
              Contact Us
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Let&apos;s stay connected
          </h2>

          <p className="mt-2 max-w-[330px] text-[10px] leading-4 text-white/80">
            Join the Gobadi community and be part of a smarter future for
            animal care.
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-10
            md:grid-cols-2
            md:gap-16
          "
        >

          {/* ================= CONTACT DETAILS ================= */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">

            {/* Email */}
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/50">
                <Mail size={13} />
              </div>

              <div>
                <p className="text-xs font-semibold">Email</p>
                <p className="mt-1 text-[10px] text-white/80">
                  ceo.gobadi@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/50">
                <Phone size={13} />
              </div>

              <div>
                <p className="text-xs font-semibold">Phone</p>
                <p className="mt-1 text-[10px] text-white/80">
                  +8801911488977
                </p>
              </div>
            </div>

            {/* Office */}
            <div className="flex gap-3 sm:col-span-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/50">
                <MapPin size={13} />
              </div>

              <div>
                <p className="text-xs font-semibold">Office</p>

                <p className="mt-1 max-w-[250px] text-[10px] leading-4 text-white/80">
                  Road 9, house 5, Lane#3, Mirpur 11/A,
                  <br />
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
                <label
                  htmlFor="email"
                  className="mb-1 block text-[9px] font-semibold"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="
                    h-8
                    w-full
                    rounded
                    border
                    border-neutral-200
                    px-3
                    text-[10px]
                    outline-none
                    focus:border-[#C0612B]
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-[9px] font-semibold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  className="
                    h-[90px]
                    w-full
                    resize-none
                    rounded
                    border
                    border-neutral-200
                    p-3
                    text-[10px]
                    outline-none
                    focus:border-[#C0612B]
                  "
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                  flex
                  h-8
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded
                  bg-[#C0612B]
                  text-[10px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#a94f21]
                "
              >
                <Send size={11} />
                Send Email
              </button>

            </form>
          </div>
        </div>

        {/* ================= SOCIAL ================= */}
        <div className="mt-8 flex justify-end">
          <div>
            <p className="mb-2 text-[8px] font-medium">Follow Us On</p>

            <div className="flex gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#C0612B]"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20"
              >
                <Camera size={11} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20"
              >
                <Camera size={11} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* ================= LOGO ================= */}
        <div className="mt-12 flex flex-col items-center">
<div className="flex gap-2 items-center">

           <Image
 src="/NavBar/NavLogo.png"
  alt="Gobaddi-Logo"
 height={40}
 width={40}
 />
         <h2 className="font-bold text-2xl">গবাদি</h2>
</div>
          <div className="mt-2 flex gap-5 text-[8px] text-white/90">
            <a href="#" className="hover:text-white">
              About Us
            </a>

            <a href="#" className="hover:text-white">
              Our Vision
            </a>

            <a href="#" className="hover:text-white">
              Contact Us
            </a>
          </div>
        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-white/30 py-4 text-center">
        <p className="text-[9px] text-white/80">
          © 2026 gobadi. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default ContactSection;