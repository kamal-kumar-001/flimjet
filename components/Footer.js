// import Link from "next/link";

// const Footer = () => {
//   return (
//     <div className="text-center h-32 flex items-center justify-center">
//       <p className="text-xl text-gray-800">&copy; Copyright 2023 <span className="font-bold">
//         <Link href='https://kamal-001.github.io'>
//         Kamal
//         </Link>
//         </span></p>
//     </div>
//   );
// };

// export default Footer;

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer bg-cover b-0 bg-center" style={{ backgroundImage: `url('/footer-bg.jpg')` }}>
      <div className="container mx-auto py-20 px-4">
        <div className="flex justify-center items-center -mt-6 mb-6">
          <div className="text-center text-xl font-bold text-neutral-100 tracking-widest font-neue  subpixel-antialiased flex items-center justify-center">
            <Link href="/">
          <a className="text-base md:text-2xl">Film
            <span className="text-red-600">Jet</span>
          </a>
        </Link>
     </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-bold text-neutral-100 tracking-widest font-neue">
          <div className="mx-auto flex flex-col text-white text-lg font-semibold">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact us</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/about">About us</Link>
          </div>
          <div className="mx-auto flex flex-col text-white text-lg font-semibold">
            <Link href="/live">Live</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/premium">Premium</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <div className="mx-auto flex flex-col text-white text-lg font-semibold">
            <Link href="/">You must watch</Link>
            <Link href="/recent-release">Recent releases</Link>
            <Link href="/top-imdb">Top IMDb</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

