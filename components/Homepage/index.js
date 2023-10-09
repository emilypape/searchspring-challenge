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
      <div className='relative lg:text-slate-50 md:text-slate-50  flex flex-col '>
        <Image src={FashionPhoto} alt='Fashion Model Picture' />
        <div className='lg:mt-0 md:mt-0 mt-10 lg:absolute md:absolute duration-1000 lg:top-36 md:top-24 lg:left-32 md:left-24 lg:text-3xl font-bold text-center animate-fade-in-up'>
          MAIN CHARACTER ENERGY
        </div>
        <div className='lg:mt-0 md:mt-0 mt-3 lg:absolute md:absolute duration-1000 lg:top-52 lg:left-32 md:top-36 md:left-24 text-md  text-center animate-fade-in-up'>
          Elevated Staples that make you look and feel like "That Girl"
        </div>
        <Link href={`/trending`}>
          <button className=' lg:mt-0 md:mt-0 mt-3  lg:ml-0 md:ml-0 ml-[8.5em] duration-1000 animate-fade-in-up hover:bg-gray-50 hover:text-zinc-800 lg:absolute  md:absolute lg:top-72 lg:left-64 md:top-52 md:left-52 bg-zinc-800 text-gray-50 text-sm p-3 rounded-lg'>
            Shop trending Looks
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
