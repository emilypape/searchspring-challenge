import React from 'react';
import { Icon } from '@iconify/react';
export default function Footer() {
  return (
    <div>
      <div className='bg-gray-200 flex justify-end p-2 '>
        <div className='flex'>
          <a href='https://github.com/emilypape/searchspring-challenge' target='_blank'>
            <div className='py-[.1em]'>
              <Icon icon='bxl:github' color='gray' width={30} height={30} />
            </div>
          </a>
        </div>
      </div>
      <div className='shadow-md flex justify-between'></div>
    </div>
  );
}
