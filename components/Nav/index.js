import React from 'react';
import { Icon } from '@iconify/react';

export default function Nav() {
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
      <div className='shadow-md mb-2 flex justify-between'>
        <div className='mb-2 ml-10'>
          <Icon icon='bxl:figma' width={70} height={70} />
        </div>
        <div className='flex ml-18  justify-center items-center'>
          <div className='font-bold mr-5'> TOPS</div>
          <div className='font-bold mr-5'>BOTTOMS</div>
          <div className='font-bold mr-5 '>SHOES</div>
          <div className='font-bold'>ACCESSORIES</div>
        </div>
        <div className='flex mr-10'>
          <form method='GET'>
            <div class='relative text-gray-600 focus-within:text-gray-400'>
              <span class='absolute inset-y-0 left-0 flex items-center pl-2'>
                <button type='submit' class='p-1 focus:outline-none focus:shadow-outline'>
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
                class='py-2 text-sm text-white bg-gray-200 rounded-md pl-10  focus:outline-none focus:bg-gray-300 focus:text-gray-900'
                placeholder='Search for a Product'
                autocomplete='off'
              />
            </div>
          </form>
          <Icon icon='iconoir:heart' />
          <Icon icon='clarity:shopping-bag-line' />
        </div>
      </div>
    </div>
  );
}
