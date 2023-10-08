import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Nav() {
  const advertisedSentences = [
    'Free Standard Shipping over $75',
    '10% off your first purchase',
    'Now Shipping internationally',
  ];

  const [sentence, setSentence] = useState('');
  const router = useRouter();

  useEffect(() => {
    let index = 0;
    setSentence(advertisedSentences[index]);
    const interval = setInterval(() => {
      index = (index + 1) % 3;
      setSentence(advertisedSentences[index]);
    }, 5000);

    return () => {
      return clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className='bg-gray-200 flex justify-end p-2 mb-2'>
        <div className='flex'>
          <div className='py-[.1em]'>
            <Icon icon='emojione:flag-for-united-states' width={20} height={20} />
          </div>
          <div className='text-gray-400 px-1'>US</div>
        </div>
        <div className='text-gray-400 px-1'>English</div>
      </div>
      <div className='shadow-md flex justify-between'>
        <div className='mb-2 lg:ml-10 md:ml-10 ml-2'>
          <Icon icon='bxl:figma' width={70} height={70} />
        </div>
        <div className='hidden ml-18  justify-center items-center lg:flex md:flex lg:ml-60 md:ml-0'>
          <div className='font-bold mr-5 hover:text-zinc-600 hover:underline cursor-pointer '> TOPS</div>
          <div className='font-bold mr-5 hover:text-zinc-600 hover:underline cursor-pointer'>BOTTOMS</div>
          <div className='font-bold mr-5 hover:text-zinc-600 hover:underline cursor-pointer'>SHOES</div>
          <div className='font-bold hover:text-zinc-600 hover:underline cursor-pointer lg:block md:hidden'>
            ACCESSORIES
          </div>
        </div>
        <div className='flex mr-10 '>
          <form method='GET' className='lg:mr-10 md:mr-10 mr-5 mt-5'>
            <div className='relative text-gray-600 focus-within:text-gray-400'>
              <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                <button type='submit' className='p-1 focus:outline-none focus:shadow-outline'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    viewBox='0 0 24 24'
                    class='w-6 h-6'>
                    <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                  </svg>
                </button>
              </span>
              <input
                type='search'
                name='q'
                className='py-2 text-sm text-white bg-gray-200 rounded-md pl-10  focus:outline-none focus:bg-gray-300 focus:text-gray-900'
                placeholder='Search for a Product'
              />
            </div>
          </form>
          <div className='flex py-6 px-3'>
            <Icon className='cursor-pointer' icon='clarity:shopping-bag-line' color='grey' width={25} height={25} />
          </div>
        </div>
      </div>
      <div className='bg-gray-200 flex justify-center p-2 '>
        <div className='flex text-xs font-bold '>{sentence}</div>
      </div>
    </div>
  );
}
