import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useCount } from '../../CartContext';

const ProductCard = ({ item }) => {
  const { increment } = useCount();

  return (
    <div className='flex' key={item.uid}>
      <div className='p-3 min-h-[32em]'>
        <div className=''>
          <Image alt='item photo' src={item.imageUrl} width={250} height={250} />
          <div className='flex justify-end mt-[-2em] mb-4 mr-4 hover:text-zinc-500 cursor-pointer hover:animate-bounce'>
            <Icon icon='bi:bag-plus' width={25} height={25} onClick={increment} />
          </div>
        </div>

        <div className='max-w-[15em] text-md'>{item.name}</div>
        <div className='text-gray-400 text-sm'>{item?.keywords?.[2]}</div>
        <div className='flex '>
          {item.price < item.msrp ? <div className='text-gray-400 line-through'>${item.msrp}</div> : <div></div>}
          <div className='ml-4 font-semibold'>${item.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
