import React, { useState } from "react";
import { FiMenu } from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';
import {MdClose } from 'react-icons/md';
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <style jsx global>
        {`
          .mobile-menu {
            left: -200%;
            transition: 0.5s;
          }

          .mobile-menu.active {
            left: 0;
          }

          .mobile-menu ul li ul {
            display: none;
          }

          .mobile-menu ul li:hover ul {
            display: block;
          }
        `}
      </style>
          <nav className="top-0 sticky px-2 py-2 bg-gray-700 z-10">
            <div className="flex justify-between items-center font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue">
              <div className="flex  justify-between items-center w-full">
                {/* <img src="/fjlogo.png" alt="Tailwindcss Navigation" className="w-6 h-6 mx-4" /> */}
                <div className="">
        <Link href="/">
          <a className="text-base md:text-2xl">Film
            <span className="text-red-600">Jet</span>
          </a>
        </Link>
          </div>
          <div className="">
                <ul className="hidden md:flex space-x-6 ">
                  <li><Link href="/popular">Movies</Link></li>
                  <li><Link href="/tv-shows">TV Shows</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
          </div>
              </div>
              <button id="mobile-icon" className="md:hidden" onClick={toggleMobileMenu}>
                {!isMobileMenuOpen ? <FiMenu size={30} /> : <MdClose size={30}/>}
              </button>
            </div>

            <div className="md:hidden flex justify-center mt-3 w-full">
              <div className={`mobile-menu absolute top-23 w-full ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul className="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
                  <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><Link href="/popular" className="block pl-7">Movies</Link></li>
                  <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><Link href="/tv-shows" className="block pl-7">TV Shows</Link></li>
                  <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><Link href="/contact" className="block pl-7">Contact</Link></li>
                </ul>
              </div>
            </div>
          </nav>
    </>
  );
};

export default Navbar;

