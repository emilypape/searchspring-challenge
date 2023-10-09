import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Footer from '../Footer';
import ProductCard from '../shared/ProductCard';

export default function Tops() {
  const [tops, setTops] = useState();
  const [page, setPage] = useState(1);

  async function getTopsPage() {
    const response = await fetch(
      `https://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=tops&resultsPerPage=25&resultsFormat=native&page=${page}`,
      {
        method: 'Get',
      },
    );

    const topsPageData = await response.json();

    setTops(topsPageData);
  }

  const handleClickScroll = (el) => {
    const element = document.getElementById(el);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    getTopsPage();
  }, [page]);
  return (
    <div>
      <div id='topOfPage' className='ml-12 mt-2'>
        <div className='text-sm font-bold text-zinc-600'>WOMENS</div>
        <div className='flex'>
          <div className='text-xl font-bold'>TOPS</div>
          <div className='text-xs text-gray-500 mt-2 ml-3'>{tops?.pagination?.totalResults} products</div>
        </div>
        <div className='flex justify-center'>
          <div
            onClick={() => setPage(tops?.pagination?.previousPage)}
            className={
              tops?.pagination?.currentPage === 1 ? 'mt-1 mr-5 cursor-pointer hidden' : 'mt-1 mr-5 cursor-pointer'
            }>
            <Icon icon='ic:twotone-arrow-back-ios' />
          </div>
          Showing page {tops?.pagination?.currentPage} of {tops?.pagination?.totalPages}
          <div
            onClick={() => setPage(tops?.pagination?.nextPage)}
            className={
              tops?.pagination?.currentPage === tops?.pagination?.totalPages
                ? 'mt-1 ml-5 cursor-pointer hidden'
                : 'mt-1 ml-5 cursor-pointer'
            }>
            <Icon icon='ic:twotone-arrow-forward-ios' />
          </div>
        </div>
      </div>
      <div className='flex-wrap flex items-center justify-start ml-10'>
        {tops?.results?.map((item) => {
          return <ProductCard item={item} />;
        })}
      </div>
      <div className='flex justify-center mt-4 mb-5 '>
        <div
          onClick={() => {
            setPage(tops?.pagination?.previousPage);
            handleClickScroll('topOfPage');
          }}
          className={
            tops?.pagination?.currentPage === 1
              ? 'mt-1 mb-5 mr-5 cursor-pointer hidden'
              : 'mt-1 mb-5 mr-5 cursor-pointer'
          }>
          <Icon icon='ic:twotone-arrow-back-ios' />
        </div>
        Showing page {tops?.pagination?.currentPage} of {tops?.pagination?.totalPages}
        <div
          onClick={() => {
            setPage(tops?.pagination?.nextPage);
            handleClickScroll('topOfPage');
          }}
          className={
            tops?.pagination?.currentPage === tops?.pagination?.totalPages
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
