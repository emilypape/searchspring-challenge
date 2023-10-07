import React from 'react';
import { Icon } from '@iconify/react';

export default function Nav() {
  return (
    <div>
      <div className='bg-slate-300 flex'>
        <div>US</div>
        <div>English</div>
      </div>
      <Icon icon='bxl:figma' width={70} height={70} />
    </div>
  );
}
