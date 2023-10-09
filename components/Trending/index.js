import { useState, useEffect, useContext } from 'react';
import { Icon } from '@iconify/react';
import Footer from '../Footer';
import ProductCard from '../shared/ProductCard';

export default function Trending() {
  const [trending, setTrending] = useState();
  const [page, setPage] = useState(1);

  async function fetchTrending() {
    const response = await fetch(
      `https://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=trending&resultsPerPage=25&resultsFormat=native&page=${page}`,
      {
        method: 'Get',
      },
    );

    const trendingData = await response.json();
    console.log(trendingData);
    setTrending(trendingData);
  }

  const handleClickScroll = (el) => {
    const element = document.getElementById(el);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);
  return (
    <div>
      <div id='TopOfPage' className='ml-12 mt-2'>
        <div className='text-sm font-bold text-zinc-600'>WOMENS</div>
        <div className='flex'>
          <div className='text-xl font-bold'>TRENDING</div>
          <div className='text-xs text-gray-500 mt-2 ml-3'>{trending?.pagination?.totalResults} products</div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div
          onClick={() => setPage(trending?.pagination?.previousPage)}
          className={
            trending?.pagination?.currentPage === 1 ? 'mt-1 mr-5 cursor-pointer hidden' : 'mt-1 mr-5 cursor-pointer'
          }>
          <Icon icon='ic:twotone-arrow-back-ios' />
        </div>
        Showing page {trending?.pagination?.currentPage} of {trending?.pagination?.totalPages}
        <div
          onClick={() => setPage(trending?.pagination?.nextPage)}
          className={
            trending?.pagination?.currentPage === trending?.pagination?.totalPages
              ? 'mt-1 ml-5 cursor-pointer hidden'
              : 'mt-1 ml-5 cursor-pointer'
          }>
          <Icon icon='ic:twotone-arrow-forward-ios' />
        </div>
      </div>
      <div className='flex-wrap flex items-center justify-start ml-10'>
        {trending?.results?.map((item) => {
          return <ProductCard item={item} />;
        })}
      </div>
      <div className='flex justify-center mt-4 mb-5'>
        <div
          onClick={() => {
            setPage(trending?.pagination?.previousPage);
            handleClickScroll('TopOfPage');
          }}
          className={
            trending?.pagination?.currentPage === 1 ? 'mt-1 mr-5 cursor-pointer hidden' : 'mt-1 mr-5 cursor-pointer'
          }>
          <Icon icon='ic:twotone-arrow-back-ios' />
        </div>
        Showing page {trending?.pagination?.currentPage} of {trending?.pagination?.totalPages}
        <div
          onClick={() => {
            setPage(trending?.pagination?.nextPage);
            handleClickScroll('TopOfPage');
          }}
          className={
            trending?.pagination?.currentPage === trending?.pagination?.totalPages
              ? 'mt-1 ml-5 cursor-pointer hidden'
              : 'mt-1 ml-5 cursor-pointer'
          }>
          <Icon icon='ic:twotone-arrow-forward-ios' />
        </div>
      </div>
      <Footer />
    </div>
  );
}
