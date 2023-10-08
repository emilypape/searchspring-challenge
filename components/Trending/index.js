import { useState, useEffect } from 'react';
import Image from 'next/image';
export default function Trending() {
  const [trending, setTrending] = useState();

  async function fetchTrending() {
    const response = await fetch(
      'https://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=trending&resultsFormat=native',
      {
        method: 'Get',
      },
    );

    const trendingData = await response.json();
    console.log(trendingData);
    setTrending(trendingData);
  }

  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <div>
      <div className='flex-wrap flex items-center justify-start ml-10'>
        {trending?.results?.map((item) => {
          return (
            <div className='flex' key={item.uid}>
              <div className='p-3 min-h-[30em]'>
                <Image alt='item photo' src={item.imageUrl} width={250} height={250} />
                <div className='max-w-[15em] text-md'>{item.name}</div>
                <div className='text-gray-400 text-sm'>{item.keywords[2]}</div>
                <div className='flex'>
                  {item.price < item.msrp ? (
                    <div className='text-gray-400 line-through'>${item.msrp}</div>
                  ) : (
                    <div></div>
                  )}
                  <div className='ml-4 font-semibold'>${item.price}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
