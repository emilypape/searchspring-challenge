import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Footer from '../Footer';
import ProductCard from '../shared/ProductCard';

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

  const handleClickScroll = (el) => {
    const element = document.getElementById(el);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    getBottomsPage();
  }, [page]);
  return (
    <div>
      <div id='topOfPage' className='ml-12 mt-2'>
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
          return <ProductCard item={item} />;
        })}
      </div>
      <div className='flex justify-center mt-4 mb-5 '>
        <div
          onClick={() => {
            setPage(bottoms?.pagination?.previousPage);
            handleClickScroll('topOfPage');
          }}
          className={
            bottoms?.pagination?.currentPage === 1
              ? 'mt-1 mb-5 mr-5 cursor-pointer hidden'
              : 'mt-1 mb-5 mr-5 cursor-pointer'
          }>
          <Icon icon='ic:twotone-arrow-back-ios' />
        </div>
        Showing page {bottoms?.pagination?.currentPage} of {bottoms?.pagination?.totalPages}
        <div
          onClick={() => {
            setPage(bottoms?.pagination?.nextPage);
            handleClickScroll('topOfPage');
          }}
          className={
            bottoms?.pagination?.currentPage === bottoms?.pagination?.totalPages
              ? 'mt-1 mb-5  ml-5 cursor-pointer hidden'
              : 'mt-1 mb-5  ml-5 cursor-pointer'
          }>
          <Icon icon='ic:twotone-arrow-forward-ios' />
        </div>
      </div>
      <Footer />
    </div>
  );
}
