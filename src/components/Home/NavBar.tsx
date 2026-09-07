"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="mx-3 my-3 rounded-xl bg-white p-3 sm:mx-4 sm:my-4 sm:p-4">
      <div className="mx-auto w-full max-w-7xl">

        {/* ================= NAVBAR ================= */}
        <div className="flex items-center justify-between px-2 sm:px-4 lg:px-6">

          {/* ================= LOGO ================= */}
          <div className="flex items-center gap-1">
            <Image
              src="/NavBar/NavLogo.png"
              alt="Gobaddi Logo"
              width={40}
              height={40}
              className="h-9 w-9 sm:h-10 sm:w-10"
            />

            <h2 className="text-xl font-bold sm:text-2xl">
              গবাদি
            </h2>
          </div>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-6 font-bold md:flex">

            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="#home"
                  className="text-[15px] transition hover:text-[#C0612B]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-[15px] text-[#737373] transition hover:text-[#C0612B]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#vision"
                  className="text-[15px] text-[#737373] transition hover:text-[#C0612B]"
                >
                  Our Vision
                </a>
              </li>
            </ul>

            <Button variant="navBtn">
              Contact Us
            </Button>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              text-[#171717]
              transition
              hover:bg-[#C0612B]/10
              md:hidden
            "
          >
            {isOpen ? (
              <X size={25} strokeWidth={2} />
            ) : (
              <Menu size={25} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="border-t border-neutral-100 md:hidden">
            <div className="flex flex-col gap-2 px-2 pb-3 pt-4 sm:px-4">

              <a
                href="#home"
                onClick={closeMenu}
                className="
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-[#171717]
                  transition
                  hover:bg-[#C0612B]/10
                  hover:text-[#C0612B]
                "
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-[#737373]
                  transition
                  hover:bg-[#C0612B]/10
                  hover:text-[#C0612B]
                "
              >
                About Us
              </a>

              <a
                href="#vision"
                onClick={closeMenu}
                className="
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-[#737373]
                  transition
                  hover:bg-[#C0612B]/10
                  hover:text-[#C0612B]
                "
              >
                Our Vision
              </a>

              <Button
                variant="navBtn"
                className="mt-2 w-full"
                onClick={closeMenu}
              >
                Contact Us
              </Button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;