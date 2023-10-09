import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function Bottoms() {
  const [bottoms, setBottoms] = useState();
  const [page, setPage] = useState(1);

  async function getBottomsPage() {
    const response = await fetch(
      `https://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=bottoms&resultsPerPage=25&resultsFormat=native&page=${page}`,
      {
        method: 'Get',
      },
    );

    const bottomsPageData = await response.json();

    setBottoms(bottomsPageData);
  }

  useEffect(() => {
    getBottomsPage();
  }, [page]);
  return (
    <div>
      <div className='ml-12 mt-2'>
        <div className='text-sm font-bold text-zinc-600'>WOMENS</div>
        <div className='flex'>
          <div className='text-xl font-bold'>BOTTOMS</div>
          <div className='text-xs text-gray-500 mt-2 ml-3'>{bottoms?.pagination?.totalResults} products</div>
        </div>
        <div className='flex justify-center'>
          <div
            onClick={() => setPage(bottoms?.pagination?.previousPage)}
            className={
              bottoms?.pagination?.currentPage === 1 ? 'mt-1 mr-5 cursor-pointer hidden' : 'mt-1 mr-5 cursor-pointer'
            }>
            <Icon icon='ic:twotone-arrow-back-ios' />
          </div>
          Showing page {bottoms?.pagination?.currentPage} of {bottoms?.pagination?.totalPages}
          <div
            onClick={() => setPage(bottoms?.pagination?.nextPage)}
            className={
              bottoms?.pagination?.currentPage === bottoms?.pagination?.totalPages
                ? 'mt-1 ml-5 cursor-pointer hidden'
                : 'mt-1 ml-5 cursor-pointer'
            }>
            <Icon icon='ic:twotone-arrow-forward-ios' />
          </div>
        </div>
      </div>
      <div className='flex-wrap flex items-center justify-start ml-10'>
        {bottoms?.results?.map((item) => {
          return (
            <div className='flex' key={item.uid}>
              <div className='p-3 min-h-[32em]'>
                <div className=''>
                  {/* NOTE!!! The directions asked for the thumbnailImageURL to be used, unfortunately it was really washed out, the image URL blew up to size better , so this was used instead */}
                  <Image alt='item photo' src={item.imageUrl} width={250} height={250} />
                  <div className='flex justify-end mt-[-2em] mb-4 mr-4 hover:text-zinc-500 cursor-pointer hover:animate-bounce'>
                    <Icon icon='bi:bag-plus' width={25} height={25} />
                  </div>
                </div>

                <div className='max-w-[15em] text-md'>{item.name}</div>
                <div className='text-gray-400 text-sm'>{item?.keywords?.[3]}</div>
                <div className='flex '>
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
      <div className='flex justify-center mt-4 mb-5 '>
        <div
          onClick={() => setPage(bottoms?.pagination?.previousPage)}
          className={
            bottoms?.pagination?.currentPage === 1
              ? 'mt-1 mb-5 mr-5 cursor-pointer hidden'
              : 'mt-1 mb-5 mr-5 cursor-pointer'
          }>
          <Icon icon='ic:twotone-arrow-back-ios' />
        </div>
        Showing page {bottoms?.pagination?.currentPage} of {bottoms?.pagination?.totalPages}
        <div
          onClick={() => setPage(bottoms?.pagination?.nextPage)}
          className={
            bottoms?.pagination?.currentPage === bottoms?.pagination?.totalPages
              ? 'mt-1 mb-5  ml-5 cursor-pointer hidden'
              : 'mt-1 mb-5  ml-5 cursor-pointer'
          }>
          <Icon icon='ic:twotone-arrow-forward-ios' />
        </div>
      </div>
    </div>
  );
}
