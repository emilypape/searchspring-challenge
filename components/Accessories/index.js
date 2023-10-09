import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Footer from '../Footer';
import ProductCard from '../shared/ProductCard';

export default function Accessories() {
  const [accessories, setAccessories] = useState();
  const [page, setPage] = useState(1);

  async function getAccessoriesPage() {
    const response = await fetch(
      `https://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=accessories&resultsPerPage=25&resultsFormat=native&page=${page}`,
      {
        method: 'Get',
      },
    );

    const accessoriesPageData = await response.json();

    setAccessories(accessoriesPageData);
  }

  const handleClickScroll = (el) => {
    const element = document.getElementById(el);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    getAccessoriesPage();
  }, [page]);
  return (
    <div>
      <div id='topOfPage' className='ml-12 mt-2'>
        <div className='text-sm font-bold text-zinc-600'>WOMENS</div>
        <div className='flex'>
          <div className='text-xl font-bold'>ACCESSORIES</div>
          <div className='text-xs text-gray-500 mt-2 ml-3'>{accessories?.pagination?.totalResults} products</div>
        </div>
        <div className='flex justify-center'>
          <div
            onClick={() => setPage(accessories?.pagination?.previousPage)}
            className={
              accessories?.pagination?.currentPage === 1
                ? 'mt-1 mr-5 cursor-pointer hidden'
                : 'mt-1 mr-5 cursor-pointer'
            }>
            <Icon icon='ic:twotone-arrow-back-ios' />
          </div>
          Showing page {accessories?.pagination?.currentPage} of {accessories?.pagination?.totalPages}
          <div
            onClick={() => setPage(accessories?.pagination?.nextPage)}
            className={
              accessories?.pagination?.currentPage === accessories?.pagination?.totalPages
                ? 'mt-1 ml-5 cursor-pointer hidden'
                : 'mt-1 ml-5 cursor-pointer'
            }>
            <Icon icon='ic:twotone-arrow-forward-ios' />
          </div>
        </div>
      </div>
      <div className='flex-wrap flex items-center justify-start ml-10'>
        {accessories?.results?.map((item) => {
          return <ProductCard item={item} />;
        })}
      </div>
      <div className='flex justify-center mt-4 mb-5 '>
        <div
          onClick={() => {
            setPage(accessories?.pagination?.previousPage);
            handleClickScroll('topOfPage');
          }}
          className={
            accessories?.pagination?.currentPage === 1
              ? 'mt-1 mb-5 mr-5 cursor-pointer hidden'
              : 'mt-1 mb-5 mr-5 cursor-pointer'
          }>
          <Icon icon='ic:twotone-arrow-back-ios' />
        </div>
        Showing page {accessories?.pagination?.currentPage} of {accessories?.pagination?.totalPages}
        <div
          onClick={() => {
            setPage(accessories?.pagination?.nextPage);
            handleClickScroll('topOfPage');
          }}
          className={
            accessories?.pagination?.currentPage === accessories?.pagination?.totalPages
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
