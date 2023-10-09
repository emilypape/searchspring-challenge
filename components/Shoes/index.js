import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Footer from '../Footer';
import ProductCard from '../shared/ProductCard';

export default function Shoes() {
  const [shoes, setShoes] = useState();
  const [page, setPage] = useState(1);

  async function getShoesPage() {
    const response = await fetch(
      `https://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=shoes&resultsPerPage=25&resultsFormat=native&page=${page}`,
      {
        method: 'Get',
      },
    );

    const shoesPageData = await response.json();

    setShoes(shoesPageData);
  }

  const handleClickScroll = (el) => {
    const element = document.getElementById(el);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    getShoesPage();
  }, [page]);

  return (
    <div>
      <div id='topOfPage' className='ml-12 mt-2'>
        <div className='text-sm font-bold text-zinc-600'>WOMENS</div>
        <div className='flex'>
          <div className='text-xl font-bold'>SHOES</div>
          <div className='text-xs text-gray-500 mt-2 ml-3'>{shoes?.pagination?.totalResults} products</div>
        </div>
        <div className='flex justify-center'>
          <div
            onClick={() => setPage(shoes?.pagination?.previousPage)}
            className={
              shoes?.pagination?.currentPage === 1 ? 'mt-1 mr-5 cursor-pointer hidden' : 'mt-1 mr-5 cursor-pointer'
            }>
            <Icon icon='ic:twotone-arrow-back-ios' />
          </div>
          Showing page {shoes?.pagination?.currentPage} of {shoes?.pagination?.totalPages}
          <div
            onClick={() => setPage(shoes?.pagination?.nextPage)}
            className={
              shoes?.pagination?.currentPage === shoes?.pagination?.totalPages
                ? 'mt-1 ml-5 cursor-pointer hidden'
                : 'mt-1 ml-5 cursor-pointer'
            }>
            <Icon icon='ic:twotone-arrow-forward-ios' />
          </div>
        </div>
      </div>
      <div className='flex-wrap flex items-center justify-start ml-10'>
        {shoes?.results?.map((item) => {
          return <ProductCard item={item} />;
        })}
      </div>
      <div className='flex justify-center mt-4 mb-5 '>
        <div
          onClick={() => {
            setPage(shoes?.pagination?.previousPage);
            handleClickScroll('topOfPage');
          }}
          className={
            shoes?.pagination?.currentPage === 1
              ? 'mt-1 mb-5 mr-5 cursor-pointer hidden'
              : 'mt-1 mb-5 mr-5 cursor-pointer'
          }>
          <Icon icon='ic:twotone-arrow-back-ios' />
        </div>
        Showing page {shoes?.pagination?.currentPage} of {shoes?.pagination?.totalPages}
        <div
          onClick={() => {
            setPage(shoes?.pagination?.nextPage);
            handleClickScroll('topOfPage');
          }}
          className={
            shoes?.pagination?.currentPage === shoes?.pagination?.totalPages
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
