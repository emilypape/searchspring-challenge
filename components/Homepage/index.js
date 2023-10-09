import React from 'react';
import Nav from '../Nav';
import Image from 'next/image';
import FashionPhoto from '../../public/assets/images/fashionCover.jpeg';
import Link from 'next/link';
import Footer from '../Footer';

export default function Home() {
  return (
    <div>
      <Nav />
      <div className='relative text-slate-50 lg:flex hidden'>
        <Image src={FashionPhoto} alt='Fashion Model Picture' />
        <div className='absolute duration-1000 top-36 left-32 text-3xl font-bold text-center animate-fade-in-up'>
          MAIN CHARACTER ENERGY
        </div>
        <div className='absolute duration-1000 top-52 left-32 text-md  text-center animate-fade-in-up'>
          Elevated Staples that make you look and feel like "That Girl"
        </div>
        <Link href={`/trending`}>
          <button className='duration-1000 animate-fade-in-up hover:bg-gray-50 hover:text-zinc-800 absolute top-72 left-64 bg-zinc-800 text-gray-50 text-sm p-3 rounded-lg'>
            Shop trending Looks
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
