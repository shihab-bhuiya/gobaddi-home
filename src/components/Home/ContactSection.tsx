/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "ceo.gobadi@gmail.com",
    href: "mailto:ceo.gobadi@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+8801911418977",
    href: "tel:+8801911418977",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Road# 9, house# 5, Lane#3, Mirpur 11/a, Dhaka, 1216, Bangladesh.",
    href: null,
  },
];

const socials = [
  { label: "Instagram", icon: FaInstagram },
  { label: "X", icon: FaXTwitter },
  { label: "LinkedIn", icon: FaLinkedin },
];

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
    <footer className="relative rounded-t-2xl bg-[#C0612B] mx-auto font-[SF_Pro] text-white">
      {/* ================= TOP CURVE ================= */}
      <div className="pointer-events-none absolute left-0 top-0 z-0 w-full -translate-y-[65%]">
        <Image
          src="/hero/BG Wave.svg"
          alt="Footer wave"
          width={1440}
          height={116}
          className="h-auto w-full"
        />
      </div>

      {/* ================= DOT PATTERN ================= */}
   {/* ================= GLOW ================= */}
<div
  className="pointer-events-none absolute inset-0 z-0 rounded-t-2xl"
  style={{
    background:
      "radial-gradient(ellipse 60% 55% at 40% 40%, rgba(255,255,255,0.18) 0%, transparent 70%)",
  }}
/>

{/* ================= GRID TEXTURE ================= */}
<div
  className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-t-2xl"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.22) 0.5px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.22) 0.5px, transparent 1px)
    `,
    backgroundSize: "18px 18px",
    maskImage:
      "radial-gradient(ellipse 60% 60% at 30% 45%, black 0%, transparent 80%)",
    WebkitMaskImage:
      "radial-gradient(ellipse 60% 60% at 40% 45%, black 0%, transparent 80%)",
  }}
/>
      {/* ================= CONTENT ================= */}
      <div className="relative mx-auto w-full max-w-[1312px] px-5 pt-10 sm:px-8 lg:px-12">
        {/* ---------- Heading + Social ---------- */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[1312px]">
            <div className="mb-3 inline-flex rounded-full bg-[#FBE6DA] px-3 py-1">
              <span className="text-sm  uppercase tracking-wider text-[#C0612B] sm:text-base lg:text-[14px]">
                Contact Us
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl xl:text-[56px]">
              Let&apos;s stay connected
            </h2>

            <p className="mt-3 max-w-md text-base font-medium leading-relaxed text-white/80 sm:text-lg lg:max-w-[330px] lg:text-[20px] lg:leading-[30px]">
              Join the Gobadi community and be part of a smarter future for
              animal care.
            </p>
          </div>

          {/* Social */}
          <div className="flex shrink-0 flex-col md:self-end md:pb-2 lg:pr-24 xl:pr-52">
            <p className="mb-3 text-base font-medium sm:text-[18px]">
              Follow Us On
            </p>

            <div className="flex gap-2">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white">
                <Image
                  src="/card/Facebook-Icon.svg"
                  alt="Facebook"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </Link>

              {socials.map(({ label, icon: Icon }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-base transition hover:bg-white/30">
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Details + Form ---------- */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-[1fr_380px] lg:gap-16">
          {/* Contact details */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7">
            {contactItems.map((item) => {
              const content = (
                <p className="break-words text-base text-white/80 sm:text-lg lg:text-[20px]">
                  {item.value}
                </p>
              );

              return (
                <div
                  key={item.label}
                  className={`min-w-0 ${
                    item.label === "Office" ? "sm:col-span-2" : ""
                  }`}>
                  <div className="mb-2 flex h-9 w-9 items-center bg-[#FFFFFF33] justify-center rounded-full border border-white/50">
                    <item.icon size={16} />
                  </div>
                  <p className="text-lg font-semibold sm:text-xl lg:text-[22px]">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="hover:text-white">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>

          {/* Form */}
          <div className="w-full max-w-xl rounded-2xl bg-white p-5 text-[#171717] shadow-lg sm:p-6 lg:max-w-none">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="pat@shuffle.dev"
                  className="h-11 w-full rounded border border-neutral-200 px-3 text-base text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-[#C0612B] lg:h-10 lg:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  className="h-28 w-full resize-none rounded border border-neutral-200 p-3 text-base text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-[#C0612B] lg:text-sm"
                />
              </div>

              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center gap-2 rounded bg-[#C0612B] text-sm font-semibold text-white transition hover:bg-[#a94f21] lg:h-10">
                <Send size={14} />
                Send Email
              </button>
            </form>
          </div>
        </div>

        {/* ---------- Logo + Links ---------- */}
        <div className="mt-12 flex flex-col items-center pb-8 lg:mt-16">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-white/10">
              <Image
                src="/NavBar/NavLogo.png"
                alt="Gobadi logo"
                height={32}
                width={32}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold">গবাদি</h2>
          </div>

          <nav className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-2 text-base text-white/90 lg:text-[20px] lg:leading-[30px]">
            <a href="#" className="hover:text-white">
              About Us
            </a>
            <a href="#" className="hover:text-white">
              Our Vision
            </a>
            <a href="#" className="hover:text-white">
              Contact Us
            </a>
          </nav>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="relative z-10 border-t border-white/30 px-5 py-2 text-center text-sm sm:text-base">
        <p className="text-white/80">© 2026 gobadi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default ContactSection;
