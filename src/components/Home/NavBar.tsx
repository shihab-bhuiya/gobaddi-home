'use client'
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const NavBar = () => {
    return (
        <nav className="bg-white p-4 m-4">
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row gap-4 justify-between mx-2 sm:mx-6 font-bold text-xl">
                    <div className="flex gap-1 items-center">
                        <Image
                            src="/NavBar/NavLogo.png"
                            alt="Gobaddi-Logo"
                            height={40}
                            width={40}
                        />
                        <h2 className="font-bold text-2xl">গবাদি</h2>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                        <ul className="flex flex-wrap gap-4 items-center">
                            <li>Home</li>
                            <li className="text-[#737373] text-[15px]">About Us</li>
                            <li className="text-[#737373] text-[15px]">Our Vision</li>
                        </ul>
                        <Button variant="navBtn">Contact Us</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;